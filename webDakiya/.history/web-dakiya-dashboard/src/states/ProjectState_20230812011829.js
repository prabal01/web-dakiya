
import { create } from 'zustand';

const useProjectStore = create((set) => ({
    projects: [],
    selectedProjectId: (() => {
        console.log("🚀 ~ file: ProjectState.js:8 ~ useProjectStore ~ localStorage.getItem('selectedProjectId'):", localStorage.getItem('selectedProjectId'))
        return localStorage.getItem('selectedProjectId') || null
    })(),
    setProjects:(projects) => set({ projects }),
    setSelectedProject: (selectedProject) => {
        localStorage.setItem('selectedProjectId',selectedProject?.id)
        set({ selectedProjectId:selectedProject.id })
    },
}));

export default useProjectStore;