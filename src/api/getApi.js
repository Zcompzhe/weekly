import request from "./requestGet"
import * as cascader from"./dataChange"

//获取所有项目名称
export const getAllProjectName = () => {
    return request.get(`/projectWeeklyManagement/getAllProjectName`)
}

//获取所有建设管理单位
export const getAllAdministrativeDeptName = () => {
    return request.get(`/baseInfoManagement/getAllAdministrativeDeptName`)
}

//获取所有监理单位
export const getAllSupervisionDeptName = () => {
    return request.get(`/baseInfoManagement/getAllSupervisionDeptName`)
}

//获取所有区域
export const getAllDistrictName = () => {
    return request.get(`/baseInfoManagement/getAllDistrictName`)
}

//获取所有项管部门
export const getAllProjectAdminDeptEnum = () => {
    return request.get(`/baseInfoManagement/getAllProjectAdminDeptEnum`)
}

//获取所有人员
export const getAllStaffName = () => {
    return request.get(`/baseInfoManagement/getAllStaffName`)
}

//获取工程编号级联选择器
export const getJobNumber = () => {
    return cascader.getJobNumber();
}

//获取工序级联选择器
export const getWorkProcess = () => {
    return cascader.getWorkProcess();
}

//获取管控内状态
export const getAllProjectControlledStateEnum = () => {
    return request.get(`/baseInfoManagement/getAllProjectControlledStateEnum`)
}

//获取实际状态
export const getAllProjectActualStateEnum = () => {
    return request.get(`/baseInfoManagement/getAllProjectActualStateEnum`)
}

//根据项目名称ID获取项目信息
export const getProjectInfoDetailPageShowRespById = (id) => {
    return request.get(`/projectWeeklyManagement/getProjectInfoDetailPageShowRespById`,
    {
        params:{
            id:id
        }
    }
    )
}

//根据周报ID获取周报详细信息
export const getProjectWeeklyDetailById = (id) => {
    return request.get(`/projectWeeklyManagement/getProjectWeeklyDetailById`,
    {
        params:{
            id:id
        }
    }
    )
}
