"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { IconDashboardLayout } from "../ui/icons";
import { useStore } from "@/store/useStore";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useGetV2GetUserProfile } from "@/app/api/__generated__/endpoints/store/store";

export interface SidebarLink {
  text: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SidebarLinkGroup {
  links: SidebarLink[];
}

export interface SidebarProps {
  linkGroups: SidebarLinkGroup[];
  authorId?: string;
  username?: string;
  avatarSrc?: string;
}

// Helper function to get the default icon component based on link text
const getDefaultIconForLink = () => {
  // Default icon
  return <IconDashboardLayout className="h-6 w-6" />;
};

export const Sidebar: React.FC<SidebarProps> = ({ linkGroups, authorId, username, avatarSrc }) => {
  const openAuthorProfileModal = useStore(state => state.openAuthorProfileModal);

  const { data: profileResponse } = useGetV2GetUserProfile({
      query: {
          enabled: !authorId,
      }
  });
  const currentUser = profileResponse?.data;

  const displayId = authorId || currentUser?.user_id;
  const displayName = username || currentUser?.username || currentUser?.name;
  const displayAvatar = avatarSrc || currentUser?.avatar_url;

  // Extract all links from linkGroups
  const allLinks = linkGroups.flatMap((group) => group.links);

  // Function to render link items
  const renderLinks = () => {
    return allLinks.map((link, index) => (
      <Link
        key={`${link.href}-${index}`}
        href={link.href}
        className="inline-flex w-full items-center gap-2.5 rounded-xl px-3 py-3 text-neutral-800 hover:bg-neutral-800 hover:text-white dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white transition-colors"
      >
        {link.icon || getDefaultIconForLink()}
        <div className="p-ui-medium text-base font-medium leading-normal">
          {link.text}
        </div>
      </Link>
    ));
  };

  const ProfileSection = () => {
      if (!displayId || !displayName) return null;
      return (
          <div
            className="flex items-center gap-3 p-3 mb-2 w-full rounded-xl hover:bg-neutral-800/5 dark:hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
            onClick={() => openAuthorProfileModal(displayId)}
          >
              <Avatar className="w-10 h-10 border border-neutral-300 dark:border-neutral-600">
                  <AvatarImage src={displayAvatar || undefined} />
                  <AvatarFallback>{displayName[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-bold text-neutral-900 dark:text-white truncate">{displayName}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">View Profile</p>
              </div>
          </div>
      );
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            aria-label="Open sidebar menu"
            className="fixed left-4 top-4 z-50 flex h-14 w-14 items-center justify-center rounded-lg border border-neutral-500 bg-neutral-200 hover:bg-gray-200/50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-gray-700/50 md:block lg:hidden"
          >
            <Menu className="h-8 w-8 stroke-black dark:stroke-white" />
            <span className="sr-only">Open sidebar menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="z-50 w-[280px] border-none p-0 dark:bg-neutral-900 sm:w-[280px]"
        >
          <div className="h-full w-full rounded-2xl bg-zinc-200 dark:bg-zinc-800 overflow-y-auto">
            <div className="flex flex-col items-start justify-start gap-2 p-3">
              <ProfileSection />
              {renderLinks()}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="relative hidden h-[912px] w-[234px] border-none lg:block">
        <div className="h-full w-full rounded-2xl bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <div className="flex h-full flex-col items-start justify-start gap-2 p-3">
             <ProfileSection />
             {renderLinks()}
          </div>
        </div>
      </div>
    </>
  );
};
