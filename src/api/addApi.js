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


