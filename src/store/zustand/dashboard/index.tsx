import { create } from 'zustand';
import { MainTypeStore } from './type';

export const useMainStore = create<MainTypeStore>(
    (set) => ({
        openMenu: false,
        setOpenMenu: (openMenu) => {
            set((state) => ({ ...state, openMenu }));
        },

    }),
);
