import  create  from 'zustand'

export const useStore = create((set) => ({
    embeddedController: null,
    setEmbeddedController: (embeddedController) => set((state) => ({embeddedController: embeddedController}))
}))