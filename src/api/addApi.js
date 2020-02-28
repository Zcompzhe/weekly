import request from "./requestAUD";

//添加周报
export const addProjectWeeklyInfo = data => {
  return request.post(`/projectWeeklyManagement/addProjectWeeklyInfo`, data);
};

//添加项目
export const addProjectInfo = data => {
  return request.post(`/projectWeeklyManagement/addProjectInfo`, data);
};

//安排督查
export const arrangeInspection = data => {
  return request.post(`/inspectionManagement/arrangeInspection`, data);
};

//给督察队分配任务
export const setInspectTeam = data => {
  return request.post(`/inspectionManagement/setInspectTeam`, data);
};

//添加督查发现问题的照片
export const addInspectPhotos = data => {
  return request.post(`/inspectionManagement/addInspectPhotos`, data);
};

//添加督查结果通知单所有信息
export const addInspectionJobOrderInfo = data => {
  return request.post(`/inspectionManagement/addInspectionJobOrderInfo`, data);
};

//添加督查问题责任人
export const addProblemResponsiblePerson = data => {
  return request.post(
    `/assessmentManagement/addProblemResponsiblePerson`,
    data
  );
};

//添加新的新的监理项目部
export const addAdminProjectDept = name => {
  return request.get(`/baseInfoManagement/addAdminProjectDept`, {
    params: {
      name: name
    }
  });
};

//添加新的建设管理单位
export const addAdministrativeDept = name => {
    return request.get(`/baseInfoManagement/addAdministrativeDept`, {
      params: {
        name: name
      }
    });
  };
  //添加新的施工单位
export const addConstructDept = name => {
    return request.get(`/baseInfoManagement/addConstructDept`, {
      params: {
        name: name
      }
    });
  };
  //添加新的施工项目部
export const addConstructProjectDept = name => {
    return request.get(`/baseInfoManagement/addConstructProjectDept`, {
      params: {
        name: name
      }
    });
  };
  //添加新的监理单位
export const addSupervisionDept = name => {
    return request.get(`/baseInfoManagement/addSupervisionDept`, {
      params: {
        name: name
      }
    });
  };
  //添加新的区域名称
export const addDistrict = name => {
    return request.get(`/baseInfoManagement/addDistrict`, {
      params: {
        name: name
      }
    });
  };
  //添加新的业主项目部
export const addOwnerProjectDept = name => {
    return request.get(`/baseInfoManagement/addOwnerProjectDept`, {
      params: {
        name: name
      }
    });
  };
//添加整改通知反馈
export const addRectificationFeedback = data => {
  return request.post(`/rectificationManagement/addRectificationFeedback`, data);
};

//添加督查发现问题的照片
export const uploadRectifyPhoto = data => {
  return request.post(`/rectificationManagement/uploadRectifyPhoto`, data);
};

