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
