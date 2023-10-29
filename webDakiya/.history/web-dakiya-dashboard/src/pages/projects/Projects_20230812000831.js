import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Button, CircularProgress, Grid, Container,Typography } from '@mui/material';
import { authRequest } from '../../utils/api';
// import Button from '../../theme/overrides/Button';
// import { AppWidgetSummary } from '../../sections/@dashboard/app';
import ProjectCard from './components/ProjectCard';
import { createProjectApi, deleteProjectApi, getProjectApi } from './services';
import CreateProject from './components/createProject';
import StyledModal from 'src/components/styled-modal';
import useProjectStore from 'src/states/ProjectState';
// import { authRequest } from 'src/utils/api';

export default function Projects() {
  const [creatingProject, setCreatingProject] = useState(false);

  const [isProjectLoading, setIsProjectLoading] = useState(false);
  const { selectedProject, setSelectedProject } = useProjectStore((state => ({
    // states
    _selectedProject: state.selectedProject,
    _projects:state.projects,
    // handlers
    _setSelectedProject: state.setSelectedProject,
    _setProjects:state.setProjects,

  })))
    useEffect(() => {
        getProjectApi().then(res=>_setProjects(res.data.projects)).catch(err=>console.log(err))
    }, []);

  const createProject = (projectName) => {
    setCreatingProject(true)
    createProjectApi(projectName).then(res=>{
      _setProjects(_projects)
      setCreatingProject(false)
    }).catch(e=>{console.log(e); setCreatingProject(false)})
  }
  
  const deleteProjectHandler = (projectId) => {
    deleteProjectApi(projectId).then(res => {
      const deletedProject = res.data.projectId
      const newProjectArr = _projects.filter(project=>project.id!==deletedProject)
      console.log({newProjectArr,deletedProject})
      _setProjects(newProjectArr)
    }).catch(e=>console.log(e))
}
  return <>
        <Helmet>
        <title> Projects</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
         Projects
        </Typography>
    {isProjectLoading && <CircularProgress />}

    {!isProjectLoading && _projects.length <= 3 && <CreateProject creatingProject={creatingProject} createProjectHandler={createProject} />}
          <Grid container>
    { _projects.length > 0 &&
    
        _projects.map(project => <Grid item xs={12} md={4}><ProjectCard deleteProjectHandler={()=>deleteProjectHandler(project.id)} createdAt={project.createdAt} vapidKey={project.publicVAPID} icon="mdi:push-notification" sx={{ margin: '10px' }} title={project.name} /></Grid>)}

<div style={{display:'flex',width:'100%', justifyContent:"center", alignItems:"center", height:"30vh"}}>
{
  !isProjectLoading && _projects.length===0 && <Typography variant="h5"> No Project Found! </Typography>
}
  </div>
</Grid>
</Container>
  </>

}
