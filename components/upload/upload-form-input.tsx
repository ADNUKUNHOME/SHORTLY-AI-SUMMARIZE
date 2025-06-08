'use client';

import { forwardRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface uploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

export const UploadFormInput = forwardRef<HTMLFormElement, uploadFormInputProps>(({ onSubmit, isLoading }, ref) => {
    return (
        <form ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex justify-end items-center gap-2">
                <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
                    required
                    className={cn(isLoading && 'opacity-50 cursor-not-allowed')}
                    disabled={isLoading}
                />
                <Button disabled={isLoading}>{
                    isLoading ? (
                        <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Processing...
                        </>
                    ) : (
                        'Uplaod Your PDF'
                    )
                }</Button>
            </div>
        </form>
    )
})

UploadFormInput.displayName = 'UploadFormInput';

export default UploadFormInput;