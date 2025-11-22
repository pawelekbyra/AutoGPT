import { create } from 'zustand';

interface UIState {
  activeAuthorId: string | null;
  isAuthorProfileModalOpen: boolean;
  openAuthorProfileModal: (authorId: string) => void;
  closeAuthorProfileModal: () => void;

  isTippingModalOpen: boolean;
  openTippingModal: () => void;
  closeTippingModal: () => void;

  isNotificationPopupOpen: boolean;
  toggleNotificationPopup: () => void;
  closeNotificationPopup: () => void;
}

export const useStore = create<UIState>((set) => ({
  activeAuthorId: null,
  isAuthorProfileModalOpen: false,
  openAuthorProfileModal: (authorId) => set({
    activeAuthorId: authorId,
    isAuthorProfileModalOpen: true,
  }),
  closeAuthorProfileModal: () => set({
    activeAuthorId: null,
    isAuthorProfileModalOpen: false,
  }),

  isTippingModalOpen: false,
  openTippingModal: () => set({ isTippingModalOpen: true }),
  closeTippingModal: () => set({ isTippingModalOpen: false }),

  isNotificationPopupOpen: false,
  toggleNotificationPopup: () => set((state) => ({ isNotificationPopupOpen: !state.isNotificationPopupOpen })),
  closeNotificationPopup: () => set({ isNotificationPopupOpen: false }),
}));
