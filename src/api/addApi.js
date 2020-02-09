import request from "./requestAUD"

//添加周报
export const addProjectWeeklyInfo = (data) => {
    return request.post(`/projectWeeklyManagement/addProjectWeeklyInfo`,
        data
    )
}


//添加项目
export const addProjectInfo = (data) => {
    return request.post(`/projectWeeklyManagement/addProjectInfo`,
        data
    )
}

//安排督查
export const arrangeInspection = (data) => {
    return request.post(`/inspectionManagement/arrangeInspection`,
        data
    )
}

//给督察队分配任务
export const setInspectTeam = (data) => {
    return request.post(`/inspectionManagement/setInspectTeam`,
        data
    )
}

//添加督查发现问题的照片
export const addInspectPhotos = (data) => {
    return request.post(`/inspectionManagement/addInspectPhotos`,
        data
    )
}

//添加督查结果通知单所有信息
export const addInspectionJobOrderInfo = (data) => {
    return request.post(`/inspectionManagement/addInspectionJobOrderInfo`,
        data
    )
}






