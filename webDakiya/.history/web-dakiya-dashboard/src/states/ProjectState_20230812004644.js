
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    selectedProject: null,
    projects:[],
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        console.log("updateing state",selectedProject)
        set({ selectedProject })
    },
}));

export default useProjectStore;