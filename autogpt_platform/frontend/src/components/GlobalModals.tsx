"use client";
import { useStore } from '@/store/useStore';
import AuthorProfileModal from '@/components/AuthorProfileModal';
import TippingModal from '@/components/TippingModal';
import NotificationPopup from '@/components/NotificationPopup';

export default function GlobalModals() {
    const isAuthorProfileModalOpen = useStore((state) => state.isAuthorProfileModalOpen);
    const activeAuthorId = useStore((state) => state.activeAuthorId);
    const closeAuthorProfileModal = useStore((state) => state.closeAuthorProfileModal);

    const isTippingModalOpen = useStore((state) => state.isTippingModalOpen);
    const closeTippingModal = useStore((state) => state.closeTippingModal);

    const isNotificationPopupOpen = useStore((state) => state.isNotificationPopupOpen);
    const closeNotificationPopup = useStore((state) => state.closeNotificationPopup);

    return (
        <>
            <AuthorProfileModal
                isOpen={isAuthorProfileModalOpen}
                onClose={closeAuthorProfileModal}
                authorId={activeAuthorId}
            />
            <TippingModal
                isOpen={isTippingModalOpen}
                handleClose={closeTippingModal}
            />
            <NotificationPopup
                isOpen={isNotificationPopupOpen}
                onClose={closeNotificationPopup}
            />
        </>
    );
}
