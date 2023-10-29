import { Button, CircularProgress, Input } from '@mui/material'
import React, { useState } from 'react'

export default function CreateProject({createProjectHandler,creatingProject}) {
    const [projectName, setProjectName] = useState("");
  return (
      <div style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
          <Input fullWidth variant="outlined" onChange={(e) => setProjectName(e.target.value)} value={projectName} />
          <Button fullWidth variant='contained' disabled={creatingProject} endIcon={creatingProject && <CircularProgress/>} onClick={()=>createProjectHandler(projectName)}>Create New Project</Button>
    </div>
  )
}
