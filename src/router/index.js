import Config from "../config/index";

const Login = r =>
  require.ensure([], () => r(require("../page/user/login")), "login");
const Layout = r =>
  require.ensure([], () => r(require("../page/layout")), "layout");

// 快速入门
const Quick = r =>
  require.ensure([], () => r(require("../page/quick/quick")), "quick");

//周报数据管理
const weeklyData = r =>
  require.ensure(
    [],
    () => r(require("../page/weekly/weeklyDataManage")),
    "weeklyDataManage"
  );

//周报数据管理
// const addWeekly = r => require.ensure([], () => r(require('../page/weekly/addWeeklyData')), 'addWeeklyData');
const addWeekly = r =>
  require.ensure([], () => r(require("../page/weekly/addWeekly")), "addWeekly");
const exportWeekly = r =>
  require.ensure(
    [],
    () => r(require("../page/weekly/exportWeekly")),
    "exportWeekly"
  );
const updateWeekly = r =>
  require.ensure(
    [],
    () => r(require("../page/weekly/updateWeekly")),
    "updateWeekly"
  );

//异常管理
const exception = r =>
  require.ensure(
    [],
    () => r(require("../page/exception/exception")),
    "exception"
  );

//周报数据管理
const weeklyApproved = r =>
  require.ensure(
    [],
    () => r(require("../page/weeklyCheck/weeklyApproved")),
    "weeklyApproved"
  );
const dayWorkCheck = r =>
  require.ensure(
    [],
    () => r(require("../page/weeklyCheck/dayWorkCheck")),
    "dayWorkCheck"
  );

//周报数据管理
const personCharge = r =>
  require.ensure(
    [],
    () => r(require("../page/safetyResponsibility/personCharge")),
    "personCharge"
  );
const quantitative = r =>
  require.ensure(
    [],
    () => r(require("../page/safetyResponsibility/quantitative")),
    "quantitative"
  );

//基本信息管理
const addPerson = r =>
  require.ensure([], () => r(require("../page/back/addPerson")), "addPerson");
const personInfoMana = r =>
  require.ensure(
    [],
    () => r(require("../page/back/personInfoMana")),
    "personInfoMana"
  );
const infoMana = r =>
  require.ensure([], () => r(require("../page/back/infoMana")), "infoMana");

//风险管理
const riskMana = r =>
  require.ensure(
    [],
    () => r(require("../page/risk/externalRiskMana")),
    "externalRiskMana"
  );
const dynamicRisk = r =>
  require.ensure(
    [],
    () => r(require("../page/risk/dynamicRisk")),
    "dynamicRisk"
  );

//项目信息管理
const addProject = r =>
  require.ensure(
    [],
    () => r(require("../page/project/addProjectInfo")),
    "addProjectInfo"
  );
const updateProject = r =>
  require.ensure(
    [],
    () => r(require("../page/project/updateProjectInfo")),
    "updateProjectInfo"
  );
const projectMana = r =>
  require.ensure(
    [],
    () => r(require("../page/project/projectInfoMana")),
    "projectInfoMana"
  );
const projectPerson = r =>
  require.ensure(
    [],
    () => r(require("../page/project/projectPerson")),
    "projectPerson"
  );

//督查方案管理
const supervisionMana = r =>
  require.ensure(
    [],
    () => r(require("../page/supervision/supervisionMana")),
    "supervisionMana"
  );
const recommendation = r =>
  require.ensure(
    [],
    () => r(require("../page/supervision/recommendation")),
    "recommendation"
  );
const addSupervision = r =>
  require.ensure(
    [],
    () => r(require("../page/supervision/addSupervision")),
    "addSupervision"
  );
const supervisionResult = r =>
  require.ensure(
    [],
    () => r(require("../page/supervision/supervisionResult")),
    "supervisionResult"
  );
const rectificationFeedback = r =>
  require.ensure(
    [],
    () => r(require("../page/rectification/rectificationFeedback")),
    "rectificationFeedback"
  );

export default [
  {
    path: Config.route.login,
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        // 快速入门
        path: "/quick",
        name: "Quick",
        component: Quick,
        meta: {
          bcrumd: ["快速入门"]
        }
      },

      {
        // 周报数据管理
        path: "/weekly/weeklyDataManage",
        name: "weeklyData",
        component: weeklyData,
        meta: {
          activePath: "/weekly/weeklyDataManage",
          bcrumd: ["周报管理", "周报数据管理"]
        }
      },
      {
        // 周报数据管理
        path: "/rectification/rectificationFeedback",
        name: "rectificationFeedback",
        component: rectificationFeedback,
        meta: {
          activePath: "/rectification/rectificationFeedback",
          bcrumd: ["整改通知反馈"]
        }
      },
      {
        // 周报数据管理
        path: "/exception/exception",
        name: "exception",
        component: exception,
        meta: {
          activePath: "/exception/exception",
          bcrumd: ["异常反馈"]
        }
      },

      {
        // 量化考核
        path: "/safetyResponsibility/quantitative",
        name: "quantitative",
        component: quantitative,
        meta: {
          activePath: "/safetyResponsibility/quantitative",
          bcrumd: ["量化考核排名"]
        }
      },
      {
        // 量化考核
        path: "/safetyResponsibility/personCharge",
        name: "personCharge",
        component: personCharge,
        meta: {
          activePath: "/safetyResponsibility/personCharge",
          bcrumd: ["问题责任人设置"]
        }
      },

      {
        // 量化考核
        path: "/back/infoMana",
        name: "infoMana",
        component: infoMana,
        meta: {
          activePath: "/back/infoMana",
          bcrumd: ["单位/部门信息管理"]
        }
      },

      // { // 添加周报信息
      //   path: '/weekly/addWeeklyData',
      //   name: 'addWeekly',
      //   component: addWeekly,
      //   meta: {
      //     activePath: '/weekly/addWeeklyData',
      //     bcrumd: ['周报管理', '添加周报信息'],
      //   }
      // },
      {
        // 添加周报信息
        path: "/weekly/addWeekly",
        name: "addWeekly",
        component: addWeekly,
        meta: {
          activePath: "/weekly/addWeekly",
          bcrumd: ["周报管理", "添加周报信息"]
        }
      },
      {
        // 添加周报信息
        path: "/weekly/exportWeekly",
        name: "exportWeekly",
        component: exportWeekly,
        meta: {
          activePath: "/weekly/exportWeekly",
          bcrumd: ["周报管理", "周报导出"]
        }
      },

      {
        // 修改周报信息
        path: "/weekly/updateWeekly",
        name: "updateWeekly",
        component: updateWeekly,
        meta: {
          activePath: "/weekly/updateWeekly",
          bcrumd: ["周报管理", "添加周报信息"]
        }
      },

      {
        // 添加周报信息
        path: "/weeklyCheck/weeklyApproved",
        name: "weeklyApproved",
        component: weeklyApproved,
        meta: {
          activePath: "/weeklyCheck/weeklyApproved",
          bcrumd: ["周报管理", "周报信息核准"]
        }
      },
      {
        // 添加周报信息
        path: "/weeklyCheck/dayWorkCheck",
        name: "dayWorkCheck",
        component: dayWorkCheck,
        meta: {
          activePath: "/weeklyCheck/dayWorkCheck",
          bcrumd: ["当日作业进度核准"]
        }
      },

      {
        // 导入周报数据
        path: "/back/personInfoMana",
        name: "personInfoMana",
        component: personInfoMana,
        meta: {
          activePath: "/back/personInfoMana",
          bcrumd: ["人员信息管理"]
        }
      },
      {
        // 导入周报数据
        path: "/back/addPerson",
        name: "addPerson",
        component: addPerson,
        meta: {
          activePath: "/back/addPerson",
          bcrumd: ["添加人员信息"]
        }
      },

      {
        // 外部风险管理
        path: "/risk/externalRiskMana",
        name: "riskMana",
        component: riskMana,
        meta: {
          activePath: "/risk/externalRiskMana",
          bcrumd: ["外部风险管理"]
        }
      },
      {
        // 外部风险管理
        path: "/risk/dynamicRisk",
        name: "dynamicRisk",
        component: dynamicRisk,
        meta: {
          activePath: "/risk/dynamicRisk",
          bcrumd: ["计算动态风险"]
        }
      },

      {
        // 添加项目信息
        path: "/project/addProjectInfo",
        name: "addProject",
        component: addProject,
        meta: {
          activePath: "/project/addProjectInfo",
          bcrumd: ["添加项目信息"]
        }
      },
      {
        // 添加项目管理人员
        path: "/project/projectPerson",
        name: "projectPerson",
        component: projectPerson,
        meta: {
          activePath: "/project/projectPerson",
          bcrumd: ["添加项目管理人员"]
        }
      },

      {
        // 修改项目信息
        path: "/project/updateProjectInfo",
        name: "updateProject",
        component: updateProject,
        meta: {
          activePath: "/project/updateProjectInfo",
          bcrumd: ["修改项目信息"]
        }
      },
      {
        // 项目信息管理
        path: "/project/projectInfoMana",
        name: "projectMana",
        component: projectMana,
        meta: {
          activePath: "/project/projectInfoMana",
          bcrumd: ["项目信息管理"]
        }
      },
      {
        // 督查方案管理
        path: "/supervision/supervisionMana",
        name: "supervisionMana",
        component: supervisionMana,
        meta: {
          activePath: "/supervision/supervisionMana",
          bcrumd: ["督查方案管理"]
        }
      },
      {
        // 督查方案管理
        path: "/supervision/supervisionResult",
        name: "supervisionResult",
        component: supervisionResult,
        meta: {
          activePath: "/supervision/supervisionResult",
          bcrumd: ["督查结果查询"]
        }
      },
      {
        // 督查方案推荐
        path: "/supervision/recommendation",
        name: "recommendation",
        component: recommendation,
        meta: {
          activePath: "/supervision/recommendation",
          bcrumd: ["督查方案推荐"]
        }
      },
      {
        // 添加督查方案
        path: "/supervision/addSupervision",
        name: "addSupervision",
        component: addSupervision,
        meta: {
          activePath: "/supervision/addSupervision",
          bcrumd: ["添加督查方案"]
        }
      }
    ]
  },
  {
    path: "*",
    redirect: Config.route.login,
    //name: 'Login',
    component: Login
  }
];
