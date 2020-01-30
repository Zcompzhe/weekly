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
