import { Button, Input } from '@mui/material'
import React, { useState } from 'react'

export default function CreateProject({createProjectHandler}) {
    const [projectName, setProjectName] = useState("");
  return (
      <div>
          <Input onChange={(e) => setProjectName(e.target.value)} value={projectName} />
          <Button onClick={()=>createProjectHandler(projectName)}>Create New Project</Button>
    </div>
  )
}
