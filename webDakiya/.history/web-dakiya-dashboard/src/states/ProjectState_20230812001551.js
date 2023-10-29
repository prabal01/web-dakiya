
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    selectedProject: null,
    projects:[],
    setProjects:(projects) => set({ projects }),
  setSelectedProject: (selectedProject) => set({ selectedProject }),
}));

export default useProjectStore;