import request from "./requestAUD"

//修改项目信息
export const updateProject = (data) => {
    return request.post(`/projectWeeklyManagement/updateProject`,
        data
    )
}



