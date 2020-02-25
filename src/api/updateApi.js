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

//更新督查结果通知单所有信息
export const updateInspectionJobOrderInfo = (data) => {
    return request.post(`/inspectionManagement/updateInspectionJobOrderInfo`,
        data
    )
}

//更新日工作内容检验数据
export const updateWeeklyDayWorkCheck = (data) => {
    return request.post(`/weeklyAccuracyManagement/updateWeeklyDayWorkCheck`,
        data
    )
}

//添加督查问题责任人
export const updateProblemResponsiblePerson = (data) => {
    return request.post(`/assessmentManagement/updateProblemResponsiblePerson`,
        data
    )
}




