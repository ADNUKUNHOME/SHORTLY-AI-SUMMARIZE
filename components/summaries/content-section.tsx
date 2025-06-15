import { parseEmojiPoint, parsePoint } from "@/utils/summary-helper";

const EmojiPoint = ({ point }: { point: string }) => {
    const parsed = parseEmojiPoint(point);
    const emoji = parsed?.emoji || '•';
    const text = parsed?.text || point;
    return (
        <div
            className="group relative bg-linear-to-br from-gray-200/[0.08] to-gray-400/[0.03] p-4 rounded-2xl border border-gray-500/10 shadow transition-all"
        >
            <div className="relative flex items-start gap-3">
                <span className="text-lg lg:text-xl shrink-0 pt-1">{emoji}</span>
                <p className="text-lg lg:text-xl text-muted-foreground/90 leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

const RegularPoint = ({ point }: { point: string }) => {
    return (
        <div
            className="group relative bg-linear-to-br from-gray-200/[0.08] to-gray-400/[0.03] p-4 rounded-2xl border border-gray-500/10 shadow transition-all"
        >
            <p className="relative text-lg lg:text-xl text-muted-foreground/90 leading-relaxed text-left">{point}</p>

        </div>
    )
}


export default function ContentSection({ title, points }: { title: string; points: string[] }) {
    return (
        <div className="space-y-4">
            {points.map((point, index) => {
                const { isMainPoint, hasEmogi } = parsePoint(point);
                if (hasEmogi || isMainPoint) {
                    return (
                        <EmojiPoint key={`point-${index}`} point={point} />
                    )
                }

                return (
                    <RegularPoint key={`point-${index}`} point={point} />
                )
            })}
        </div>
    );
}
