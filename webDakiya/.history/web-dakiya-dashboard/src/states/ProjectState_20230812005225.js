
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    selectedProject: localStorage.setItem('selectedProject',selectedProject || null),
    projects:[],
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        localStorage.setItem('selectedProject',selectedProject|| null)
        set({ selectedProject })
    },
}));

export default useProjectStore;