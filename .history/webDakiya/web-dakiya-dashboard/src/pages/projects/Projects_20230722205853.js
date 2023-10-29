import React, { useEffect, useState } from 'react'
import { noAuthRequest } from 'src/utils/api';
// import { authRequest } from 'src/utils/api';

export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        noAuthRequest.get('/projects').then(res=>console.log(res)).catch(err=>console.log(err))
    }, []);

  return <h1>Projects</h1>

}
