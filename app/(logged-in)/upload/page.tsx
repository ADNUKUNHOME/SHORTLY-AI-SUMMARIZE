import { MotionDiv } from "@/components/common/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import UploadForm from "@/components/upload/upload-form";
import { containerVarients, itemsVarients } from "@/utils/constants";
import { hasReachedUploadLimit } from "@/utils/user";
import { currentUser } from "@clerk/nextjs/server";
import { Sparkle } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Page() {

    const user = await currentUser();
    if (!user?.id) {
        redirect('/sign-in');
    }
    const userId = user?.id;
    const { hasReachedLimit } = await hasReachedUploadLimit(userId);
    if (hasReachedLimit) {
        redirect('/dashboard');
    }

    return (
        <section className="min-h-screen">
            <MotionDiv
                variants={containerVarients}
                initial="hidden"
                animate="visible"
                className="mx-auto min-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <MotionDiv
                        variants={itemsVarients}
                        className="flex rounded-full p-1 bg-gradient-to-r from-violet-900 to-violet-500">
                        <Badge className="flex items-center justify-center gap-2 px-2 py-1 rounded-full hover:bg-gradient-to-r hover:from-violet-200 hover:to-violet-500 transition-colors duration-200" variant="secondary">
                            <Sparkle className="animate-pulse text-violet-500" />
                            <p className="text-lg font-bold text-violet-500 hover:text-white">Powered by AI</p>
                        </Badge>
                    </MotionDiv>
                    <MotionDiv
                        variants={itemsVarients}
                        className="capitalize text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                        Start Uploading Your PDFs
                    </MotionDiv>
                    <MotionDiv
                        variants={itemsVarients}>
                        <p className="capilize text-xl font-bold tracking-tight text-gray-600">Upload your PDF and let AI do the magic!</p>
                    </MotionDiv>
                    <UploadForm />
                </div>
            </MotionDiv>
        </section>
    )
}