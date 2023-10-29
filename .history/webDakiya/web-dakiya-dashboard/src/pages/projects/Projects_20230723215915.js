import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Grid } from '@mui/material';
import { authRequest } from '../../utils/api';
// import Button from '../../theme/overrides/Button';
// import { AppWidgetSummary } from '../../sections/@dashboard/app';
import ProjectCard from './components/ProjectCard';
import { createProjectApi, getProjectApi } from './services';
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
  
  return <>
    {isProjectLoading && <CircularProgress />}

    {!isProjectLoading && projects.length <= 3 && <CreateProject creatingProject={creatingProject} createProjectHandler={createProject} />}
    
      <Grid container>
    {!isProjectLoading && projects.length > 0 &&
    
        projects.map(project => <Grid item xs={12} md={4}><ProjectCard createdAt={new Date(createdAt)} vapidKey={project.publicVAPID} icon="eos-icons:project" sx={{ margin: '10px' }} title={project.name} /></Grid>)}

</Grid>
  </>

}
