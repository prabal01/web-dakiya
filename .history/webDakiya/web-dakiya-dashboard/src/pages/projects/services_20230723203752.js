const { authRequest } = require("../../utils/api")

const getProjectApi = () => {
    authRequestt().get('/project')
}