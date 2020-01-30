import request from "./request"
import * as cascader from"./dataChange"


//根据条件搜索项目信息
export const getProjectInfoByCondition = (list) => {
    return request.post(`/projectWeeklyManagement/getProjectInfoByCondition`,list
    )
}

//根据条件搜索周报
export const getProjectWeeklyByCondition = (list) => {
    return request.post(`/projectWeeklyManagement/getProjectWeeklyByCondition`,list
    )
}



