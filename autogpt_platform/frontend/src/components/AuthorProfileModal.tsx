"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AuthorProfileModalProps {
  authorId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AuthorProfileModal({
  authorId,
  isOpen,
  onClose,
}: AuthorProfileModalProps) {
  // Mock data loading based on authorId
  // In a real application, this would be a query using authorId
  const authorData = React.useMemo(() => {
    if (!authorId) return null;

    return {
      name: authorId, // Using ID as name for mock since we passed creatorName as ID
      bio: "This is a mock bio for the author. They are a top creator in the AutoGPT Marketplace.",
      avatarUrl: "", // We don't have the URL here unless we pass it or fetch it
      stats: {
        agents: Math.floor(Math.random() * 20) + 1,
        runs: Math.floor(Math.random() * 5000) + 100,
        rating: (4 + Math.random()).toFixed(1),
      },
    };
  }, [authorId]);

  if (!authorData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Author Profile</DialogTitle>
          <DialogDescription>
            View details about this creator.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={authorData.avatarUrl} />
              <AvatarFallback>{authorData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{authorData.name}</h3>
              <p className="text-sm text-neutral-500">{authorData.bio}</p>
            </div>
            <div className="flex w-full justify-around border-t pt-4">
              <div className="text-center">
                <div className="font-bold">{authorData.stats.agents}</div>
                <div className="text-xs text-neutral-500">Agents</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{authorData.stats.runs}</div>
                <div className="text-xs text-neutral-500">Runs</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{authorData.stats.rating}</div>
                <div className="text-xs text-neutral-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
