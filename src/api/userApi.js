import request from "./requestUser";
import * as cascader from "./dataChange";

//该API下的请求会弹窗提示

//根据条件更新个人信息
export const updateSGCCStaff = list => {
  return request.post(`/userManagement/updateSGCCStaff`, list);
};

//根据条件搜索用户名
export const findUsername = list => {
  return request.post(`/userManagement/findUsername`, list);
};
//根据条件搜索人员
export const getStaffInfoByCondition = list => {
  return request.post(`/userManagement/getStaffInfoByCondition`, list);
};

//获取所有部门信息
export const getAllSGCCDept = () => {
  return request.get(`/userManagement/getAllSGCCDept`);
};

//获取所有职位信息
export const getAllSGCCPosition = () => {
  return request.get(`/userManagement/getAllSGCCPosition`);
};

//根据id删除人员
export const deleteSGCCStaffById = id => {
  return request.delete(`/userManagement/deleteSGCCStaffById`, {
    params: {
      id: id
    }
  });
};
//根据条件添加个人信息
export const addSGCCStaff = list => {
  return request.post(`/userManagement/addSGCCStaff`, list);
};

//根据id删除人员
export const initUserPassById = id => {
  return request.get(`/userManagement/initUserPassById`, {
    params: {
      id: id
    }
  });
};

