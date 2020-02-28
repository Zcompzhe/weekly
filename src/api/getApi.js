import request from "./requestGetN";
import * as cascader from "./dataChange";

//该api下的请求不会弹窗提示

//获取所有项目名称
export const getAllProjectName = () => {
  return request.get(`/projectWeeklyManagement/getAllProjectName`);
};

//获取所有建设管理单位
export const getAllAdministrativeDeptName = () => {
  return request.get(`/baseInfoManagement/getAllAdministrativeDeptName`);
};

//获取所有监理单位
export const getAllSupervisionDeptName = () => {
  return request.get(`/baseInfoManagement/getAllSupervisionDeptName`);
};

//获取所有区域
export const getAllDistrictName = () => {
  return request.get(`/baseInfoManagement/getAllDistrictName`);
};

//获取所有项管部门
export const getAllProjectAdminDeptEnum = () => {
  return request.get(`/baseInfoManagement/getAllProjectAdminDeptEnum`);
};

//获取所有人员
export const getAllStaffName = () => {
  return request.get(`/baseInfoManagement/getAllStaffName`);
};

//获取工程编号级联选择器
export const getJobNumber = () => {
  return cascader.getJobNumber();
};

//获取工序级联选择器
export const getWorkProcess = () => {
  return cascader.getWorkProcess();
};

//获取管控内状态
export const getAllProjectControlledStateEnum = () => {
  return request.get(`/baseInfoManagement/getAllProjectControlledStateEnum`);
};

//获取实际状态
export const getAllProjectActualStateEnum = () => {
  return request.get(`/baseInfoManagement/getAllProjectActualStateEnum`);
};

//根据项目名称ID获取项目信息
export const getProjectInfoDetailPageShowRespById = id => {
  return request.get(
    `/projectWeeklyManagement/getProjectInfoDetailPageShowRespById`,
    {
      params: {
        id: id
      }
    }
  );
};

//根据周报ID获取周报详细信息
export const getProjectWeeklyDetailById = id => {
  return request.get(`/projectWeeklyManagement/getProjectWeeklyDetailById`, {
    params: {
      id: id
    }
  });
};

//修改周报时获取周报详情
export const getProjectWeeklyInfoShowRespById = id => {
  return request.get(
    `/projectWeeklyManagement/getProjectWeeklyInfoShowRespById`,
    {
      params: {
        id: id
      }
    }
  );
};

//获取本周督查信息
export const getThisWeekProjectInspectionArrangePageShowResp = id => {
  return request.get(
    `/inspectionManagement/getThisWeekProjectInspectionArrangePageShowResp`,
    {
      params: {
        id: id
      }
    }
  );
};

//获取安监队项目
export const getThisWeekInspectTeamProjectInspectionByCondition = list => {
  return request.post(
    `/inspectionManagement/getThisWeekInspectTeamProjectInspectionByCondition`,
    list
  );
};

//获取通知单类型
export const getAllJobOrderTypeEnum = () => {
  return request.get(`/baseInfoManagement/getAllJobOrderTypeEnum`);
};

//获取业主项目部
export const getAllOwnerProjectDeptName = () => {
  return request.get(`/baseInfoManagement/getAllOwnerProjectDeptName`);
};

//获取施工项目部
export const getAllConstructProjectDeptName = () => {
  return request.get(`/baseInfoManagement/getAllConstructProjectDeptName`);
};

//获取监理项目部
export const getAllAdminProjectDeptName = () => {
  return request.get(`/baseInfoManagement/getAllAdminProjectDeptName`);
};

//获取整改项目部
export const getAllRectification = () => {
  return request.get(`/baseInfoManagement/getAllRectification`);
};

//获取部门枚举
export const getAllResponsibleDeptEnum = () => {
  return request.get(`/baseInfoManagement/getAllResponsibleDeptEnum`);
};

//获取施工单位
export const getAllConstructDeptName = () => {
  return request.get(`/baseInfoManagement/getAllConstructDeptName`);
};

//获取责任单位名称
export const getAllResponsibleCompany = () => {
  return request.get(`/baseInfoManagement/getAllResponsibleCompany`);
};
//获取责任人
export const getResponsiblePersonByResponsibleCompany = name => {
  return request.get(
    `/baseInfoManagement/getResponsiblePersonByResponsibleCompany`,
    {
      params: {
        responsibleCompanyName: name
      }
    }
  );
};

//获取责任人
export const getProblemResponsiblePersonByProblemResponsibleSetId = id => {
  return request.get(
    `/assessmentManagement/getProblemResponsiblePersonByProblemResponsibleSetId`,
    {
      params: {
        problemResponsibleSetId: id
      }
    }
  );
};
//获取天气值
export const getRectificationAddFeedbackShowRespByJobOrderId = id => {
  return request.get(
    `/rectificationManagement/getRectificationAddFeedbackShowRespByJobOrderId`,
    {
      params: {
        jobOrderId: id
      }
    }
  );
};

//根据jobOrderId获取整改反馈内容展示模型
export const getRectificationFeedbackShowRespByJobOrderId = id => {
  return request.get(
    `/rectificationManagement/getRectificationFeedbackShowRespByJobOrderId`,
    {
      params: {
        jobOrderId: id
      }
    }
  );
};
