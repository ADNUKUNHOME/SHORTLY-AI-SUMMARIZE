'use client';

import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary, storePdfSummaryAction } from "@/actions/upload-actions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSkeleton from "./loading-skeleton";


const schema = z.object({
    file: z
        .instanceof(File, { message: 'Invalid File' })
        .refine((file) => file.size <= 20 * 1024 * 1024,
            'File size must be less than 20MB'
        )
        .refine((file) => file.type.startsWith('application/pdf'),
            'File must be a PDF'
        )
})

export default function UploadForm() {

    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
        onClientUploadComplete: () => {
            console.log('Uploaded Successfully!');
            toast('Uploaded Successfully');
        },
        onUploadError: (err) => {
            console.error('Error occured while uploading', err);
            toast('❌Error occured while uploading');
        },
        onUploadBegin: (data) => {
            console.log('upload has begun for', data);
        }
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            const file = formData.get('file') as File;

            //validating the fields
            const validatedFields = schema.safeParse({ file });
            console.log(validatedFields);
            if (!validatedFields.success) {
                toast('❌Something went wrong!')
                setIsLoading(false);
                return;
            }

            toast('📃Uploading PDF! We are Uploading your PDF!')

            //upload the file to uploadthing
            const uploadResponse = await startUpload([file]);
            if (!uploadResponse) {
                toast('Something went wrong! Please use a defferent file.')
                setIsLoading(false);
                return;
            }

            toast('📃Processing PDF! Hang on tight! Our AI is reading your document.')

            //parse the PDF using lang chain
            const uploadFileUrl = uploadResponse[0].serverData.fileUrl;
            const result = await generatePdfSummary({
                fileUrl: uploadFileUrl,
                fileName: file.name
            });

            const { data = null, message = null } = result || {};

            if (data) {
                let storeResult: any;
                toast('📃Saving PDF! We are saving your summary');
                if (data?.summary) {
                    storeResult = await storePdfSummaryAction({
                        fileUrl: uploadResponse[0].serverData.fileUrl,
                        summary: data.summary,
                        title: data.title,
                        fileName: file.name
                    })
                    toast('✨Your PDF has been successfully summarized and saved!');
                    formRef.current?.reset();
                    router.push(`/summaries/${storeResult.data.id}`);
                }
            }


        } catch (error) {
            setIsLoading(false);
            console.log('Error Occured', error);
            formRef.current?.reset();
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput
                isLoading={isLoading}
                ref={formRef}
                onSubmit={handleSubmit} />
            {isLoading && (
                <>
                    <div className="relative">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true">
                            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                            <div className="relative flex justify-center">
                                <span className="bg-background text-muted-foreground px-3 text-sm">
                                    Processing
                                </span>
                            </div>
                        </div>
                    </div>
                    <LoadingSkeleton />
                </>
            )}
        </div>
    )
}