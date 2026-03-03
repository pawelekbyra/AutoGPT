"use client";

import * as React from "react";
import { useUIStore } from "@/store/ui";
import { AuthorProfileModal } from "./AuthorProfileModal";

export function GlobalModalWrapper() {
  const { isAuthorProfileModalOpen, activeAuthorId, closeAuthorProfileModal } =
    useUIStore();

  return (
    <AuthorProfileModal
      authorId={activeAuthorId}
      isOpen={isAuthorProfileModalOpen}
      onClose={closeAuthorProfileModal}
    />
  );
}
