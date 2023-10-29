const { authRequest } = require("../../utils/api")

export const getProjectApi = () => {
    return authRequest({method:'get',url:'/project'})
}

export const createProjectApi = (projectName) => {
    return authRequest({method:'post',url:"/project", data:{projectName}})
}

export const deleteProjectApi = (projectId) => {
    return authRequest({method:'delete', url:'/project', data:{projectId}})
}