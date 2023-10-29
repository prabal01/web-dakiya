import { create } from 'zustand'

const useProjectStore = create((set) => ({
    selectedProject: null,
    setSelectedProject:(project)=>set((state)=>selectedProject(project))    
}))

export default useProjectStore;