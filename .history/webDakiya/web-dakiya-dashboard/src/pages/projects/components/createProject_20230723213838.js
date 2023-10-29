import { Button, CircularProgress, Input } from '@mui/material'
import React, { useState } from 'react'

export default function CreateProject({createProjectHandler,creatingProject}) {
    const [projectName, setProjectName] = useState("");
  return (
      <div>
          <Input onChange={(e) => setProjectName(e.target.value)} value={projectName} />
          <Button disabled={creatingProject} endIcon={creatingProject && <CircularProgress/>} onClick={()=>createProjectHandler(projectName)}>Create New Project</Button>
    </div>
  )
}
