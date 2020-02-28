import request from "./requestAUD";

//删除ID的项目
export const deleteProjectInfoById = id => {
  return request.delete(`/projectWeeklyManagement/deleteProjectInfoById`, {
    params: {
      id: id
    }
  });
};

//删除ID的周报
export const deleteProjectWeeklyInfoById = id => {
  return request.delete(
    `/projectWeeklyManagement/deleteProjectWeeklyInfoById`,
    {
      params: {
        id: id
      }
    }
  );
};

//取消安排督查
export const cancelInspection = id => {
  return request.get(`/inspectionManagement/cancelInspection`, {
    params: {
      id: id
    }
  });
};

//删除图片
export const deleteInspectPhotoPathByPathId = list => {
  return request.delete(
    `/inspectionManagement/deleteInspectPhotoPathByPathId`,
    {
      params: list
    }
  );
};
//删除图片
export const deleteInspectionJobOrderInfoById = id => {
  return request.delete(
    `/inspectionManagement/deleteInspectionJobOrderInfoById`,
    {
      params: {
        id: id
      }
    }
  );
};

//根据id删除监理项目部
export const deleteAdminProjectDeptById = id => {
  return request.delete(`/baseInfoManagement/deleteAdminProjectDeptById`, {
    params: {
      id: id
    }
  });
};
//根据id删除建设管理单位
export const deleteAdministrativeDeptById = id => {
  return request.delete(`/baseInfoManagement/deleteAdministrativeDeptById`, {
    params: {
      id: id
    }
  });
};
//根据id删除施工单位
export const deleteConstructDeptById = id => {
  return request.delete(`/baseInfoManagement/deleteConstructDeptById`, {
    params: {
      id: id
    }
  });
};
//根据id删除施工项目部
export const deleteConstructProjectDeptById = id => {
  return request.delete(`/baseInfoManagement/deleteConstructProjectDeptById`, {
    params: {
      id: id
    }
  });
};
//根据id删除区域名称
export const deleteDistrictById = id => {
  return request.delete(`/baseInfoManagement/deleteDistrictById`, {
    params: {
      id: id
    }
  });
};

//根据id删除业主项目部
export const deleteOwnerProjectDeptById = id => {
  return request.delete(`/baseInfoManagement/deleteOwnerProjectDeptById`, {
    params: {
      id: id
    }
  });
};

//根据id删除监理单位
export const deleteSupervisionDeptById = id => {
  return request.delete(`/baseInfoManagement/deleteSupervisionDeptById`, {
    params: {
      id: id
    }
  });
};

//根据id删除人员信息
export const deleteStaffInfoById = id => {
  return request.delete(`/baseInfoManagement/deleteStaffInfoById`, {
    params: {
      id: id
    }
  });
};
//根据id删除人员信息
export const deleteRectificationFeedbackInfoById = id => {
  return request.delete(
    `/rectificationManagement/deleteRectificationFeedbackInfoById`,
    {
      params: {
        id: id
      }
    }
  );
};
//删除图片
export const deleteRectificationPhotoPathByPathId = id => {
  return request.delete(
    `/rectificationManagement/deleteRectificationPhotoPathByPathId`,
    {
      params: {
        id: id
      }
    }
  );
};
