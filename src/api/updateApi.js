import request from "./requestAUD"

//修改项目信息
export const updateProject = (data) => {
    return request.post(`/projectWeeklyManagement/updateProject`,
        data
    )
}


//修改周报
export const updateProjectWeeklyInfo = (data) => {
    return request.post(`/projectWeeklyManagement/updateProjectWeeklyInfo`,
        data
    )
}


