
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    selectedProject: null,
    projects:[],
    setProjects:(projects) => set({ projects }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));

export default useProjectStore;