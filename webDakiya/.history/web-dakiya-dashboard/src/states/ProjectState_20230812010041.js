
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    projects:[],
    selectedProjectId: localStorage.getItem('selectedProjectId'),
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        localStorage.setItem('selectedProjectId',selectedProject?.id)
        set({ selectedProject })
    },
}));

export default useProjectStore;