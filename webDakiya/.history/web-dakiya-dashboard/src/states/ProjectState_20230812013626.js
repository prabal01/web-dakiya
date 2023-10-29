
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    projects: [],
    selectedProjectId:localStorage.getItem('selectedProjectId') || null,
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        localStorage.setItem('selectedProjectId',selectedProject?.id)
        return set({ selectedProjectId:selectedProject.id })
    },
}));

export default useProjectStore;