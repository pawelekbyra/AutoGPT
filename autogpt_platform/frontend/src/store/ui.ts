import { create } from "zustand";

interface UIState {
  isAuthorProfileModalOpen: boolean;
  activeAuthorId: string | null;
  openAuthorProfileModal: (authorId: string) => void;
  closeAuthorProfileModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isAuthorProfileModalOpen: false,
  activeAuthorId: null,
  openAuthorProfileModal: (authorId) =>
    set({ isAuthorProfileModalOpen: true, activeAuthorId: authorId }),
  closeAuthorProfileModal: () =>
    set({ isAuthorProfileModalOpen: false, activeAuthorId: null }),
}));
