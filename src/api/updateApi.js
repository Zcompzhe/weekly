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


//完成督查
export const updateProjectInspection = (data) => {
    return request.post(`/inspectionManagement/updateProjectInspection`,
        data
    )
}
