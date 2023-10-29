const { authRequest } = require("../../utils/api")

export const getProjectApi = () => {
    return authRequestt().get('/project')
}