import request from "./requestAUD"

//删除ID的项目
export const deleteProjectInfoById = (id) => {
    return request.delete(`/projectWeeklyManagement/deleteProjectInfoById`,
        {
            params:{
                id:id
            }
        }
    )
}

//删除ID的周报
export const deleteProjectWeeklyInfoById = (id) => {
    return request.delete(`/projectWeeklyManagement/deleteProjectWeeklyInfoById`,
        {
            params:{
                id:id
            }
        }
    )
}

//取消安排督查
export const cancelInspection = (id) => {
    return request.get(`/inspectionManagement/cancelInspection`,
        {
            params:{
                id:id
            }
        }
    )
}

