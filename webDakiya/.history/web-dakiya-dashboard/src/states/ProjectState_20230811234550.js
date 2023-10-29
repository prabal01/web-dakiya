import { create } from 'zustand'

const useProjectStore = create((set) => ({
    projects: [],
    selectedProject:[],
}))

export default useProjectStore;