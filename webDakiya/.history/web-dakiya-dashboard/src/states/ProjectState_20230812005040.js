
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    selectedProject: localstorage.setItem('selectedProject',selectedProject),
    projects:[],
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        localstorage.setItem('selectedProject',selectedProject)
        set({ selectedProject })
    },
}));

export default useProjectStore;