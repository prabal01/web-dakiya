export const getAuthHeaders = () => {
    const token = localStorage.getItem("authToken")
    if (token) {
    
        return {
            Authorization: `bearer ${localStorage.getItem("authToken")}`
        }
    } else return ({})
    
};