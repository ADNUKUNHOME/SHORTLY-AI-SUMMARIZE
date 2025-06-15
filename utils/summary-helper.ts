export const parseSection = (section: string): { title: string; points: string[] } => {
    const [title, ...content] = section.split('\n');

    const cleanTitle = title.startsWith('#')
        ? title.substring(1).trim()
        : title.trim();

    const emojiSplit = (line: string): string[] => {
        const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu;
        const parts: string[] = [];
        let match;
        let lastIndex = 0;

        while ((match = emojiRegex.exec(line)) !== null) {
            const emojiIndex = match.index;
            if (emojiIndex > lastIndex) {
                const textBefore = line.slice(lastIndex, emojiIndex).trim();
                if (textBefore) parts.push(textBefore);
            }

            const emoji = match[0];
            lastIndex = emojiIndex + emoji.length;

            const nextTextMatch = line.slice(lastIndex).match(/^(.*?)(?=\p{Emoji}|$)/u);
            if (nextTextMatch) {
                const emojiText = nextTextMatch[1].trim();
                if (emojiText) parts.push(`${emoji} ${emojiText}`);
                lastIndex += emojiText.length;
            }
        }

        return parts.length > 0 ? parts : [line];
    };

    const points: string[] = [];

    let currentPoint = '';

    content.forEach((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('•')) {
            if (currentPoint) points.push(...emojiSplit(currentPoint.trim()));
            currentPoint = trimmedLine;
        } else if (!trimmedLine) {
            if (currentPoint) points.push(...emojiSplit(currentPoint.trim()));
            currentPoint = '';
        } else {
            currentPoint += ' ' + trimmedLine;
        }
    });

    if (currentPoint) points.push(...emojiSplit(currentPoint.trim()));

    return {
        title: cleanTitle,
        points: points.filter(
            (point) =>
                point &&
                !point.startsWith('#') &&
                !point.startsWith('[Choose') &&
                !/^[-•\s]*$/.test(point)
        )

    };
};


export function parsePoint(point: string) {
    const isNumbered = /^\d+\./.test(point);
    const isMainPoint = /^•/.test(point);

    const emogiRegix = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u
    const hasEmogi = emogiRegix.test(point);
    const isEmpty = !point.trim();

    return { isNumbered, isMainPoint, hasEmogi, isEmpty }
}

export function parseEmojiPoint(content: string) {
    const cleanContent = content.replace(/^[•]\s*/, '').trim();

    const matches = cleanContent.match(/^(\p{Emoji}+)(.+)$/u);
    if (!matches || matches.length < 3) return null;

    const [, emoji, text] = matches;
    return {
        emoji: emoji.trim(),
        text: text.trim()
    }
}
