import request from "./request";
import * as cascader from "./dataChange";

//该API下的请求会弹窗提示

//根据条件搜索项目信息
export const getProjectInfoByCondition = list => {
  return request.post(
    `/projectWeeklyManagement/getProjectInfoByCondition`,
    list
  );
};

//根据条件搜索周报
export const getProjectWeeklyByCondition = list => {
  return request.post(
    `/projectWeeklyManagement/getProjectWeeklyByCondition`,
    list
  );
};

//根据条件获得督查周报
export const getProjectWeeklyInspectionPageShowRespWithOrder = list => {
  return request.post(
    `/projectWeeklyManagement/getProjectWeeklyInspectionPageShowRespWithOrder`,
    list
  );
};

//获取督查队伍数和动态风险
export const getCurrentInspectWeekInspectionTeamCount = () => {
  return request.get(
    `/inspectionManagement/getCurrentInspectWeekInspectionTeamCount`
  );
};

//获取安监队项目
export const getThisWeekInspectTeamProjectInspectionByCondition = list => {
  return request.post(
    `/inspectionManagement/getThisWeekInspectTeamProjectInspectionByCondition`,
    list
  );
};

//根据条件获取督查结果
export const getProjectInspectionResultByCondition = list => {
  return request.post(
    `/inspectionManagement/getProjectInspectionResultByCondition`,
    list
  );
};

//根据督查信息id获取通知单内容
export const getInspectJobOrderInfoByInspectionId = list => {
  return request.get(
    `/inspectionManagement/getInspectJobOrderInfoByInspectionId`,
    {
      params: list
    }
  );
};

//根据通知单内容id获取照片资源
export const getInspectPhotoResourceByContentId = list => {
  return request.get(
    `/inspectionManagement/getInspectPhotoResourceByContentId`,
    {
      params: list
    }
  );
};

//获取天气值
export const getWeeklyWeatherDynamicCoefficient = id => {
  return request.get(
    `/externalRiskManagement/getWeeklyWeatherDynamicCoefficient`,
    {
      params: {
        weeklyId: id
      }
    }
  );
};

//计算风险
export const calculateExternalRisk = data => {
  return request.post(`/externalRiskManagement/calculateExternalRisk`, data);
};

//计算风险
export const getWeeklyAccuracyShowRespByCondition = data => {
  return request.post(
    `/weeklyAccuracyManagement/getWeeklyAccuracyShowRespByCondition`,
    data
  );
};

//根据条件搜索日工作内容检验数据
export const getWeeklyDayWorkCheckShowByCondition = data => {
  return request.post(
    `/weeklyAccuracyManagement/getWeeklyDayWorkCheckShowByCondition`,
    data
  );
};

//根据条件搜索督查问题责任人设置展示信息
export const getProblemResponsibleSetShowRespByCondition = data => {
  return request.post(
    `/assessmentManagement/getProblemResponsibleSetShowRespByCondition`,
    data
  );
};

//根据条件搜索考核成绩展示信息
export const getAssessScoreShowRespByCondition = data => {
  return request.post(
    `/assessmentManagement/getAssessScoreShowRespByCondition`,
    data
  );
};
//根据条件搜索考核成绩展示信息
export const getRectificationFeedbackInspectionByCondition = data => {
  return request.post(
    `/inspectionManagement/getRectificationFeedbackInspectionByCondition`,
    data
  );
};

//根据通知单内容id获取照片资源
export const getRectificationPhotoResourceByFeedbackId = id => {
  return request.get(
    `/rectificationManagement/getRectificationPhotoResourceByFeedbackId`,
    {
      params: {
        rectificationFeedbackId: id
      }
    }
  );
};
//添加督查结果通知单所有信息
export const addInspectionJobOrderInfo = data => {
  return request.post(`/inspectionManagement/addInspectionJobOrderInfo`, data);
};
//更新督查结果通知单所有信息
export const updateInspectionJobOrderInfo = data => {
  return request.post(
    `/inspectionManagement/updateInspectionJobOrderInfo`,
    data
  );
};
//根据条件获取周报风险作业内容详情展示信息
export const getWeeklyRiskContentDetailShowRespByCondition = data => {
  return request.post(
    `/projectWeeklyManagement/getWeeklyRiskContentDetailShowRespByCondition`,
    data
  );
};
//根据条件导出周报信息
export const exportProjectWeeklyAsExcel = data => {
  return request({
    url: `/projectWeeklyManagement/exportProjectWeeklyAsExcel`,
    method: "post",
    data: data,
    "Content-Type": "application/json;charset=UTF-8",
    responseType: "blob"
  });
};

//查找用户个人信息
export const me = () => {
  return request.get(`/me`);
};

//根据条件导出督查通知单信息
export const exportJobOrderInfoAsWord = data => {
  return request({
    url: `/inspectionManagement/exportJobOrderInfoAsWord`,
    method: "get",
    params: data,
    "Content-Type": "application/json;charset=UTF-8",
    responseType: "blob"
  });
};

//根据条件导出整改反馈单
export const exportRectificationFeedbackInfoAsWord = data => {
  return request({
    url: `/rectificationManagement/exportRectificationFeedbackInfoAsWord`,
    method: "get",
    params: data,
    "Content-Type": "application/json;charset=UTF-8",
    responseType: "blob"
  });
};


//获取督查队伍数和动态风险
export const getTodayExceptionInfoStatistics = () => {
  return request.get(
    `/baseInfoManagement/getTodayExceptionInfoStatistics`
  );
};

//获取核准方式
export const getCurrentWeekWithoutWeeklyProjectInfo = () => {
  return request.get(`/projectWeeklyManagement/getCurrentWeekWithoutWeeklyProjectInfo`);
};


//获取准确度报告
export const exportWeeklyAccuracyAsExcel = data => {
  return request({
    url: `/weeklyAccuracyManagement/exportWeeklyAccuracyAsExcel`,
    method: "post",
    data: data,
    "Content-Type": "application/json;charset=UTF-8",
    responseType: "blob"
  });
};
