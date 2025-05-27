'use client';

import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface uploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: uploadFormInputProps) {
    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex justify-end items-center gap-2">
                <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
                    required
                    className=""
                />
                <Button>Uplaod</Button>
            </div>
        </form>
    )
}