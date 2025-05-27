'use client';

import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";

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

    const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
        onClientUploadComplete: () => {
            console.log('Uploaded Successfully!')
        },
        onUploadError: (err) => {
            console.error('Error occured while uploading', err);
        },
        onUploadBegin: ({ file }) => {
            console.log('upload has begun for', file);
        }
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');

        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        //validating the fields
        const validatedFields = schema.safeParse({ file });
        console.log(validatedFields);
        if (!validatedFields.success) {
            console.log(validatedFields.error.issues ?? 'Invalid fields');
            return;
        }

        //upload the file to uploadthing
        const resp = await startUpload([file]);
        if (!resp) {
            return;
        }

    }
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}