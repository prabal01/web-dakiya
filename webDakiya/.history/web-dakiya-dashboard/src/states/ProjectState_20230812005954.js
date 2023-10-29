
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    projects:[],
    selectedProject: projects.filter(project=>project.id===localStorage.getItem('selectedProjectId'))[0] || null,
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        localStorage.setItem('selectedProjectId',selectedProject?.id)
        set({ selectedProject })
    },
}));

export default useProjectStore;