import request from "./requestGet"

//获取所有项目名称
export const addProjectWeeklyInfo = (data) => {
    return request.post(`/projectWeeklyManagement/addProjectWeeklyInfo`,
        data
    )
}
