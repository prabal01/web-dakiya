const { authRequest } = require("../../utils/api")

export const getProjectApi = () => {
    return authRequest().get('/project')
}