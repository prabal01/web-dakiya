const getAuthHeaders = () => {
    return {
        Authorization: `bearer ${localStorage.getItem("authToken")}`
    }
};