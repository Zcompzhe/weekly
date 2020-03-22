import request from "./requestAUD";

//修改项目信息
export const updateProject = data => {
  return request.post(`/projectWeeklyManagement/updateProject`, data);
};

//修改周报
export const updateProjectWeeklyInfo = data => {
  return request.post(`/projectWeeklyManagement/updateProjectWeeklyInfo`, data);
};

//完成督查
export const updateProjectInspection = data => {
  return request.post(`/inspectionManagement/updateProjectInspection`, data);
};


//更新日工作内容检验数据
export const updateWeeklyDayWorkCheck = data => {
  return request.post(
    `/weeklyAccuracyManagement/updateWeeklyDayWorkCheck`,
    data
  );
};

//添加督查问题责任人
export const updateProblemResponsiblePerson = data => {
  return request.post(
    `/assessmentManagement/updateProblemResponsiblePerson`,
    data
  );
};
//添加督查问题责任人
export const updateRectificationFeedbackList = data => {
  return request.post(
    `/rectificationManagement/updateRectificationFeedbackList`,
    data
  );
};

//添加督查问题责任人
export const updateExceptionInfo = data => {
  return request.post(
    `/baseInfoManagement/updateExceptionInfo`,
    data
  );
};
//取消安排已完成的督查
export const cancelInspection = id => {
  return request.get(
    `/inspectionManagement/cancelInspection`,
    {
      params: {
        id: id
      }
    }
  );
};
//取消安排已完成的督查
export const cancelHasCheckInspection = id => {
  return request.get(
    `/inspectionManagement/cancelHasCheckInspection`,
    {
      params: {
        id: id
      }
    }
  );
};