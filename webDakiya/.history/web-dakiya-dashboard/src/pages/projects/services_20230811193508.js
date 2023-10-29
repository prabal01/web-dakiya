const { authRequest } = require("../../utils/api")

export const getProjectApi = () => {
    return authRequest({method:'get',url:'/projects'})
}

export const createProjectApi = (projectName) => {
    return authRequest({method:'post',url:"/projects", data:{projectName}})
}

export const deleteProjectApi = (projectId) => {
    return authRequest({method:'delete', url:'/projects', data:{projectId}})
}