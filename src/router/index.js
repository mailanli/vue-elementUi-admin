/**
 * 路由配置
 *1.hidden: true; // (默认 false)  当设置 true 的时候该路由不会再侧边栏出现
 *2.redirect: noredirect; //当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 *3.alwaysShow: true; //若你想不管路由下面的 children 声明的个数都显示你的根路由，你可以设置 alwaysShow: true
 *4.name: "router-name"; //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 *5.meta: {
    roles: ["admin", "editor"]; //设置该路由进入的权限，支持多个权限叠加
    title: "title"; //设置该路由在侧边栏和面包屑中展示的名字
    icon: "svg-name"; //设置该路由的图标
    noCache: true; //如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
  }
 **/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/views/layout/Layout'
// 不需要动态判断权限的路由
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    children: [
      { path: '/', component: () => import('@/views/login/components/logining'), name: 'logining', meta: { title: 'logining', noCache: true, hidden: true }},
      { path: '/forgetPassword', component: () => import('@/views/login/components/forgetPassword'), name: 'forgetPassword', meta: { title: 'forgetPassword', noCache: true, hidden: true }},
      { path: '/register', component: () => import('@/views/login/components/register'), name: 'register', meta: { title: 'register', noCache: true, hidden: true }},
      { path: '/authenticat', component: () => import('@/views/login/components/authenticat'), name: 'authenticat', meta: { title: 'authenticat', noCache: true, hidden: true }}
    ]
  },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true, hidden: true }
    }]
  },
  {
    path: '/user',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: 'userManage',
      icon: 'ion-home'
    },
    children: [
      { path: 'accountManage', component: () => import('@/views/user/accountManage'), name: 'accountManage', meta: { title: 'accountManage' }},
      { path: 'accountInfo/:id(\\d+)', component: () => import('@/views/user/accountInfo'), name: 'accountInfo', meta: { title: 'accountInfo', noCache: true }, hidden: true },
      { path: 'userMonitorManage', component: () => import('@/views/user/userMonitorManage'), name: 'userMonitorManage', meta: { title: 'userMonitorManage' }}
    ]
  }
]
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
// 需动态判断权限并通过 addRouters 动态添加的页面
export const asyncRouterMap = [
  {
    path: '/components',
    component: Layout,
    meta: {
      title: 'components',
      icon: 'ion-android-earth'
    },
    children: [
      { path: 'panel', component: () => import('@/views/components/panel/demo'), name: 'panel', meta: { title: '面板组件' }},
      { path: 'complexTable', component: () => import('@/views/components/complexTable'), name: 'complexTable', meta: { title: '列表组件' }},
      { path: 'form', component: () => import('@/views/components/form'), name: 'form', meta: { title: '表单组件' }},
      { path: 'articleForm', component: () => import('@/views/components/articleForm'), name: 'articleForm', meta: { title: '文章组件' }},
      { path: 'searchForm', component: () => import('@/views/components/searchForm'), name: 'searchForm', meta: { title: '搜索组件' }},
      { path: 'selects', component: () => import('@/views/components/selectLevel/index'), name: 'selects', meta: { title: '下拉联动' }},
      { path: 'tree', component: () => import('@/views/components/tree'), name: 'tree', meta: { title: '目录树' }},
      { path: 'dialog', component: () => import('@/views/components/dialog'), name: 'dialog', meta: { title: '弹窗' }},
      { path: 'messageBox', component: () => import('@/views/components/messageBox'), name: 'messageBox', meta: { title: '消息提示' }}

    ]
  }, {
    path: '/workorder',
    component: Layout,
    redirect: '/workorder/index',
    alwaysShow: true,
    meta: {
      title: 'workorder',
      icon: 'ion-document-text',
      roles: ['admin', 'editor']
    },
    children: [{
      path: 'workOrderAdd',
      component: () => import('@/views/workorder/workOrderAdd'),
      name: 'workOrderAdd',
      meta: {
        title: 'workOrderAdd',
        roles: ['admin']
      }
    }, {
      path: 'toDoList',
      component: () => import('@/views/workorder/toDoList'),
      name: 'toDoList',
      meta: {
        title: 'toDoList'
      }
    }, {
      path: 'myWorkOrder',
      component: () => import('@/views/workorder/myWorkOrder'),
      name: 'myWorkOrder',
      meta: {
        title: 'myWorkOrder'
      }
    }, {
      path: 'itemWorkOrder',
      component: () => import('@/views/workorder/itemWorkOrder'),
      name: 'itemWorkOrder',
      meta: {
        title: 'itemWorkOrder'
      }
    }, {
      path: 'processConfig',
      component: () => import('@/views/workorder/processConfig'),
      name: 'processConfig',
      meta: {
        title: 'processConfig'
      }
    }, {
      path: 'nodeConfig',
      component: () => import('@/views/workorder/nodeConfig'),
      name: 'nodeConfig',
      meta: {
        title: 'nodeConfig'
      }
    }]
  },
  {
    path: '/materieluse',
    component: Layout,
    meta: {
      title: 'materieluse',
      icon: 'ion-flask'
    },
    children: [{
      path: 'materielList',
      component: () => import('@/views/materieluse/materielList'),
      name: 'materielList',
      meta: { title: 'materielList' }
    }, {
      path: 'itemDbList',
      component: () => import('@/views/materieluse/itemDbList'),
      name: 'itemDbList',
      meta: { title: 'itemDbList' }
    }]
  },
  {
    path: '/customer',
    component: () => import('@/views/customer/customerList'),
    redirect: 'noredirect',
    name: 'customerList',
    alwaysShow: true,
    meta: {
      title: 'customerList',
      icon: 'ion-ios7-people-outline'
    }
  },
  {
    path: '/notice',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'notice',
      icon: 'ion-ios7-photos-outline'
    },
    children: [
      { path: 'noticeList', component: () => import('@/views/notice/noticeList'), name: 'noticeList', meta: { title: 'noticeList' }},
      { path: 'index', component: () => import('@/views/notice/editNotice'), name: 'editNotice', meta: { title: 'editNotice' }}
    ]
  },
  {
    path: '/message',
    component: Layout,
    meta: {
      title: 'message',
      icon: 'ion-ios7-chatboxes-outline'
    },
    children: [{
      path: 'messageList',
      component: () => import('@/views/message/messageList'),
      name: 'messageList',
      meta: { title: 'messageList' }
    }, {
      path: 'messageEdit',
      component: () => import('@/views/message/messageEdit'),
      name: 'messageEdit',
      meta: { title: 'messageEdit' }
    }]
  },
  {
    path: '/knowledgebase',
    component: Layout,
    meta: {
      title: 'knowledgebase',
      icon: 'ion-ios7-lightbulb-outline'
    },
    children: [
      { path: 'knowledgebaseList', component: () => import('@/views/knowledgebase/knowledgebaseList'), name: 'knowledgebaseList', meta: { title: 'knowledgebaseList' }},
      { path: 'editKnowledgebase', component: () => import('@/views/knowledgebase/editKnowledgebase'), name: 'editKnowledgebase', meta: { title: 'editKnowledgebase' }}
    ]
  },
  {
    path: '/question',
    component: Layout,
    redirect: '/question/index',
    name: 'question',
    meta: {
      title: 'question',
      icon: 'ion-ios7-help-outline'
    },
    children: [
      { path: 'labelManage', component: () => import('@/views/question/labelManage'), name: 'labelManage', meta: { title: 'labelManage' }},
      { path: 'contentManage', component: () => import('@/views/question/contentManage'), name: 'contentManage', meta: { title: 'contentManage', noCache: true }}
    ]
  },
  {
    path: '/integral',
    component: Layout,
    redirect: '/integral/index',
    name: 'integral',
    meta: {
      title: 'integral',
      icon: 'ion-ios7-paperplane-outline'
    },
    children: [
      {
        path: 'commodityManage',
        component: () => import('@/views/integral/commodityManage'), // Parent router-view
        name: 'commodityManage',
        meta: { title: 'commodityManage' }
      },
      {
        path: 'orderManage',
        name: 'orderManage',
        component: () => import('@/views/integral/orderManage'),
        meta: { title: 'orderManage' }
      }
    ]
  },
  {
    path: '/problem',
    component: Layout,
    name: 'problem',
    alwaysShow: true,
    meta: {
      title: 'problem',
      icon: 'ion-compose'
    },
    children: [
      { path: 'problemList', component: () => import('@/views/problem/problemList'), name: 'problemList', meta: { title: 'problemList', icon: '404' }}
    ]
  },
  {
    path: '/trainings',
    component: Layout,
    name: 'trainings',
    meta: {
      title: 'trainings',
      icon: 'ion-social-foursquare-outline'
    },
    children: [
      { path: 'trainingsManage', component: () => import('@/views/trainings/trainingsManage'), name: 'trainingsManage', meta: { title: 'trainingsManage' }},
      { path: 'academicRecord', component: () => import('@/views/trainings/academicRecord'), name: 'academicRecord', meta: { title: 'academicRecord' }}
    ]
  },
  {
    path: '/system',
    component: Layout,
    meta: { title: 'system', icon: 'ion-settings' },
    children: [
      { path: 'skillClassify', component: () => import('@/views/system/skillClassify'), name: 'skillClassify', meta: { title: 'skillClassify' }},
      { path: 'reportType', component: () => import('@/views/system/reportType'), name: 'reportType', meta: { title: 'reportType' }},
      { path: 'projectSet', component: () => import('@/views/system/projectSet'), name: 'projectSet', meta: { title: 'projectSet' }},
      { path: 'teamUser', component: () => import('@/views/system/teamUser'), name: 'teamUser', meta: { title: 'teamUser' }},
      { path: 'jurisdictionSet', component: () => import('@/views/system/jurisdictionSet'), name: 'jurisdictionSet', meta: { title: 'jurisdictionSet' }},
      { path: 'menuSet', component: () => import('@/views/system/menuSet'), name: 'menuSet', meta: { title: 'menuSet' }},
      { path: 'roleSet', component: () => import('@/views/system/roleSet'), name: 'roleSet', meta: { title: 'roleSet' }},
      { path: 'regInvCode', component: () => import('@/views/system/regInvCode'), name: 'regInvCode', meta: { title: 'regInvCode' }},
      { path: 'dataDictionary', component: () => import('@/views/system/dataDictionary'), name: 'dataDictionary', meta: { title: 'dataDictionary' }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
