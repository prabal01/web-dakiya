import React, { useEffect, useState } from 'react'
import { authRequest } from '../../utils/api';
// import { authRequest } from 'src/utils/api';

export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        authRequest().get('/project').then(res=>console.log(res)).catch(err=>console.log(err))
    }, []);

  return <h1>Projects</h1>

}
