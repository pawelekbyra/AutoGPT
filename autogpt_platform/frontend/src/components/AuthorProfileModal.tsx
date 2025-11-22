"use client";

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { X, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface AuthorProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    authorId: string | null;
}

const AuthorProfileModal: React.FC<AuthorProfileModalProps> = ({ isOpen, onClose, authorId }) => {
    const { data: profile, isLoading: loadingProfile } = useQuery({
        queryKey: ['user', authorId],
        queryFn: async () => {
            if (!authorId) return null;
            // Mock API call
            await new Promise(r => setTimeout(r, 500));
            return {
                id: authorId,
                name: 'Jane Doe',
                handle: '@janedoe',
                bio: 'AI Enthusiast & Creator. Building the future of agents.',
                avatar: 'https://boring-avatars-api.vercel.app/api/variants/beam/Jane%20Doe',
                location: 'San Francisco, CA',
                website: 'janedoe.com',
                joined: 'January 2024'
            };
        },
        enabled: !!authorId && isOpen,
    });

    const { data: slides, isLoading: loadingSlides } = useQuery({
        queryKey: ['slides', authorId],
        queryFn: async () => {
            if (!authorId) return [];
            // Mock API call
            await new Promise(r => setTimeout(r, 500));
            return Array.from({ length: 5 }).map((_, i) => ({
                id: `slide-${i}`,
                title: `Awesome Agent ${i + 1}`,
                description: 'This agent does amazing things.',
                image: `https://picsum.photos/seed/${i}/300/200`
            }));
        },
        enabled: !!authorId && isOpen,
    });

    if (!isOpen || !authorId) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                onClick={e => e.stopPropagation()}
            >
                <div className="relative h-32 bg-gradient-to-r from-pink-500 to-violet-600">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="px-8 pb-8 flex-1 overflow-y-auto">
                    <div className="relative -mt-12 mb-4 flex justify-between items-end">
                        <Avatar className="w-24 h-24 border-4 border-white dark:border-zinc-900 shadow-lg">
                            <AvatarImage src={profile?.avatar} />
                            <AvatarFallback>{profile?.name?.[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex gap-2 mb-1">
                            <Button variant="outline">Follow</Button>
                            <Button>Hire Me</Button>
                        </div>
                    </div>

                    {loadingProfile ? (
                         <div className="space-y-3 animate-pulse">
                            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
                            <div className="h-16 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                         </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{profile?.name}</h2>
                                <p className="text-zinc-500 dark:text-zinc-400 font-medium">{profile?.handle}</p>
                            </div>

                            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                {profile?.bio}
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                                {profile?.location && (
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>{profile.location}</span>
                                    </div>
                                )}
                                {profile?.website && (
                                    <div className="flex items-center gap-1">
                                        <LinkIcon size={14} />
                                        <a href={`https://${profile.website}`} target="_blank" rel="noreferrer" className="hover:underline text-pink-600">{profile.website}</a>
                                    </div>
                                )}
                                {profile?.joined && (
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>Joined {profile.joined}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="mt-8">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Published Agents</h3>
                        {loadingSlides ? (
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[1,2].map(i => <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />)}
                             </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {slides?.map((slide: any) => (
                                    <div key={slide.id} className="group relative aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-all">
                                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-white font-bold truncate">{slide.title}</p>
                                            <p className="text-white/80 text-xs line-clamp-1">{slide.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorProfileModal;
