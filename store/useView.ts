import { create } from 'zustand'

interface VIEWTYPES {
    view: "Grid" | "Column"
    SetView: (view: "Grid" | "Column") => void
}

export const useView = create<VIEWTYPES>((set) => ({
  view: "Grid",
  SetView: (view) => set({view})
}))

