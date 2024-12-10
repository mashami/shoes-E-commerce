"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { Dispatch, SetStateAction } from "react";

interface TestDialogProps {
  openTest: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}
const TestDialog = ({ openTest, setOpenDialog }: TestDialogProps) => {
  return (
    <Dialog defaultOpen={true} open={openTest} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TestDialog;
