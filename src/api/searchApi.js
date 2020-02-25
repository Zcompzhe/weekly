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
  return request.get(`/inspectionManagement/getCurrentInspectWeekInspectionTeamCount`)
}

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
export const calculateExternalRisk = (data) => {
  return request.post(`/externalRiskManagement/calculateExternalRisk`,
      data
  )
}

//计算风险
export const getWeeklyAccuracyShowRespByCondition = (data) => {
  return request.post(`/weeklyAccuracyManagement/getWeeklyAccuracyShowRespByCondition`,
      data
  )
}

//根据条件搜索日工作内容检验数据
export const getWeeklyDayWorkCheckShowByCondition = (data) => {
  return request.post(`/weeklyAccuracyManagement/getWeeklyDayWorkCheckShowByCondition`,
      data
  )
}

//根据条件搜索督查问题责任人设置展示信息
export const getProblemResponsibleSetShowRespByCondition = (data) => {
  return request.post(`/assessmentManagement/getProblemResponsibleSetShowRespByCondition`,
      data
  )
}

