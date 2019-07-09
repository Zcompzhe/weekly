import Config from '../config/index';

const Login = r => require.ensure([], () => r(require('../page/user/login')), 'login');
const Layout = r => require.ensure([], () => r(require('../page/layout')), 'layout');

// 快速入门
const Quick = r => require.ensure([], () => r(require('../page/quick/quick')), 'quick');





//周报数据管理
const weeklyData = r => require.ensure([], () => r(require('../page/weekly/weeklyDataManage')), 'weeklyDataManage');

//周报数据管理
const addWeekly = r => require.ensure([], () => r(require('../page/weekly/addWeeklyData')), 'addWeeklyData');

//周报数据管理
const importWeekly = r => require.ensure([], () => r(require('../page/weekly/importWeeklyData')), 'importWeeklyData');

export default [{
  path: Config.route.login,
  name: 'Login',
  component: Login
}, {
  path: '/',
  name: 'Layout',
  component: Layout,
  children: [{ // 快速入门
    path: '/quick',
    name: 'Quick',
    component: Quick,
    meta: {
      bcrumd: ['快速入门']
    }
  }, 

  { // 周报数据管理
    path: '/weekly/weeklyDataManage',
    name: 'weeklyData',
    component: weeklyData,
    meta: {
      activePath: '/weekly/weeklyDataManage',
      bcrumd: ['周报管理', '周报数据管理'],
    }
  }, 
  
  
  { // 添加周报信息
    path: '/weekly/addWeeklyData',
    name: 'addWeekly',
    component: addWeekly,
    meta: {
      activePath: '/weekly/addWeeklyData',
      bcrumd: ['周报管理', '添加周报信息'],
    }
  }, 

  
  { // 导入周报数据
    path: '/weekly/importWeeklyData',
    name: 'importWeekly',
    component: importWeekly,
    meta: {
      activePath: '/weekly/importWeeklyData',
      bcrumd: ['周报管理', '导入周报'],
    }
  }, 
  ]
}, {
  path: '*',
  redirect: Config.route.login,
  //name: 'Login',
  component: Login,
}]
