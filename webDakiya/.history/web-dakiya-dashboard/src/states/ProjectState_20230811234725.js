import { create } from 'zustand'

const useProjectStore = create((set) => ({
    selectedProject: null,
    setSelectedProject:(project)=>set(selectedProject(project))    
}))

export default useProjectStore;