
import { create } from 'zustand';

const useProjectStore = create((set) => {
    const projectFromLocalStorage = localStorage.getItem('selectedProject')
    const selectedProject = projectFromLocalStorage?.id || null 
    return {
    selectedProject: selectedProject,
    projects:[],
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        localStorage.setItem('selectedProject',JSON.stringify(selectedProject)|| null)
        set({ selectedProject })
    },
}));

export default useProjectStore;