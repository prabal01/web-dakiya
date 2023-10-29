import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Grid } from '@mui/material';
import { authRequest } from '../../utils/api';
// import Button from '../../theme/overrides/Button';
// import { AppWidgetSummary } from '../../sections/@dashboard/app';
import ProjectCard from './components/ProjectCard';
import { createProjectApi, deleteProjectApi, getProjectApi } from './services';
import CreateProject from './components/createProject';
// import { authRequest } from 'src/utils/api';

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [creatingProject, setCreatingProject] = useState(false);

  const [isProjectLoading, setIsProjectLoading] = useState(false);
    useEffect(() => {
        getProjectApi().then(res=>setProjects(res.data.projects)).catch(err=>console.log(err))
    }, []);

  const createProject = (projectName) => {
    setCreatingProject(true)
    createProjectApi(projectName).then(res=>setProjects(res.data.projects)).catch(e=>console.log(e))
    setCreatingProject(false)
  }
  
  const deleteProjectHandler = (projectId) => {
    deleteProjectApi(projectId).then(res => {
      const deletedProject = res.data.projectId
      setProjects(projects.filter(project=>projectId!=deletedProject))
    }).catch(e=>console.log(e))
}
  return <>
    {isProjectLoading && <CircularProgress />}

    {!isProjectLoading && projects.length <= 3 && <CreateProject creatingProject={creatingProject} createProjectHandler={createProject} />}
    
      <Grid container>
    {!isProjectLoading && projects.length > 0 &&
    
        projects.map(project => <Grid item xs={12} md={4}><ProjectCard deleteProjectHandler={()=>deleteProjectHandler(project.id)} createdAt={project.createdAt} vapidKey={project.publicVAPID} icon="eos-icons:project" sx={{ margin: '10px' }} title={project.name} /></Grid>)}

</Grid>
  </>

}
