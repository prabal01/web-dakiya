const { authRequest } = require("../../utils/api")

const getProjectApi = () => {
    return authRequestt().get('/project')
}