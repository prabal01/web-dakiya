const { authRequest } = require("../../utils/api")

export const getProjectApi = () => {
    return authRequest().get('/project')
}

export const createProjectApi = (projectName) => {
    console.log("🚀 ~ file: services.js:8 ~ createProject ~ projectName:", projectName)
    authRequest.post({data:{projectName}}).
}