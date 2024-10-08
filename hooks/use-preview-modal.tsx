import { Product } from '@/types';
import React from 'react'
import { create } from 'zustand';

interface PreviewModalProps{
    isOpen: boolean;
    data?: Product
    onOpen: (data: Product) => void;
    onClose: () => void;
}

export const usePreviewModal = create<PreviewModalProps>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({data, isOpen: true}),
    onClose: () => set({isOpen: false})
}));