import React, { useEffect, useState } from 'react'
import { Button, CircularProgress } from '@mui/material';
import { authRequest } from '../../utils/api';
// import Button from '../../theme/overrides/Button';
// import { AppWidgetSummary } from '../../sections/@dashboard/app';
import ProjectCard from './components/ProjectCard';
import { createProjectApi, getProjectApi } from './services';
import CreateProject from './components/createProject';
// import { authRequest } from 'src/utils/api';

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [isProjectLoading, setIsProjectLoading] = useState(false);
    useEffect(() => {
        getProjectApi().then(res=>setProjects(res.data.projects)).catch(err=>console.log(err))
    }, []);

  const createProject = (projectName) => {
    createProjectApi(projectName).then(res=>console.log(res)).catch(e=>console.log(e))
  }
  
  return <>
    {isProjectLoading && <CircularProgress />}

    {!isProjectLoading && projects.length <= 3 && <CreateProject createProjectHandler={createProject} />}
    {!isProjectLoading && projects.length > 0 && projects.map(project => <ProjectCard vapidKey={project.publicVAPID} icon="eos-icons:project" sx={{margin:'10px'}} title={project.name}/>)}
  </>

}
