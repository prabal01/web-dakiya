import { Button, Input } from '@mui/material'
import React, { useState } from 'react'

export default function CreateProject({projectName,createProjectHandler}) {
    const [projectName, setProjectName] = useState(projectName);
  return (
      <div>
          <Input onChange={(e) => setProjectName(e.target.value)} value={projectName} />
          <Button onClick={()=>createProjectHandler(projectName)}>Create New Project</Button>
    </div>
  )
}
