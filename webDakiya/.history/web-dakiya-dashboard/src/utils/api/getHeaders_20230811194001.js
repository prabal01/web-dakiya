export const getAuthHeaders = () => {
    const token = localStorage.getItem("authToken")
    console.log("🚀 ~ file: getHeaders.js:3 ~ getAuthHeaders ~ token:", token)

    
    return {
        Authorization: `bearer ${localStorage.getItem("authToken")}`
    }
};