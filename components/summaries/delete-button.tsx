'use client'

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useTransition } from "react";
import { DeleteSummaryAction } from "@/actions/summary-actions";
import { toast } from "sonner";

interface DeleteButtonProps {
    summaryId: string;
}

export default function DeleteButton({ summaryId }: DeleteButtonProps) {
    const [open, setOpen] = useState(false);
    const [isPending, startTransitoin] = useTransition();

    const handleDelete = async () => {
        startTransitoin(async () => {
            const result = await DeleteSummaryAction({ summaryId });
            if (!result.success) {
                toast('Failed to delete Summary!');
            }
            setOpen(false);
        })

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={'ghost'} size='icon' className="text-gray-400 bg-gray-50 border border-gray-200 hover:text-violet-800 hover:bg-violet-50">
                    <Trash2 className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Summary</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this summary? this action connot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant={'ghost'}
                        className="text-gray-400 bg-gray-50 border border-gray-200 hover:text-gray-900 hover:bg-gray-100"
                        onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant={'destructive'}
                        className="text-gray-50 bg-gray-900 hover:bg-gray-950 hover:text-gray-50"
                        onClick={() => handleDelete()}>
                        {isPending ? 'Deleting...' : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}