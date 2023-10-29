import { Button, CircularProgress, Input } from '@mui/material'
import React, { useState } from 'react'

export default function CreateProject({createProjectHandler,creatingProject}) {
    const [projectName, setProjectName] = useState("");
  return (
      <div style={{display:'flex', justifyContent:"space-between", width:'100%', marginBottom:'20px'}}>
          <Input style={{width:"70%"}} variant="outlined" onChange={(e) => setProjectName(e.target.value)} value={projectName} />
          <Button variant='contained' disabled={creatingProject} endIcon={creatingProject && <CircularProgress/>} onClick={()=>createProjectHandler(projectName)}>Create New Project</Button>
    </div>
  )
}
