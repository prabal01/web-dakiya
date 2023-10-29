import React, { useState } from 'react'
import { authRequest } from 'src/utils/api';

export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        authRequest.get('/projects').then(res=>console.log(res)).catch(err=>console.log(err))
    }, []);

  return (
    
  )
}
