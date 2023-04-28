import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import zhiweishenqing from '@/views/modules/zhiweishenqing/list'
    import news from '@/views/modules/news/list'
    import shetuanhuodong from '@/views/modules/shetuanhuodong/list'
    import zhuanyexinxi from '@/views/modules/zhuanyexinxi/list'
    import discussshetuanxinxi from '@/views/modules/discussshetuanxinxi/list'
    import shetuanxinxi from '@/views/modules/shetuanxinxi/list'
    import yuanxixinxi from '@/views/modules/yuanxixinxi/list'
    import menu from '@/views/modules/menu/list'
    import shetuanleixing from '@/views/modules/shetuanleixing/list'
    import zhiweixinxi from '@/views/modules/zhiweixinxi/list'
    import shetuan from '@/views/modules/shetuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huiyuanshenqing from '@/views/modules/huiyuanshenqing/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import messages from '@/views/modules/messages/list'
    import banjixinxi from '@/views/modules/banjixinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/zhiweishenqing',
        name: '职位申请',
        component: zhiweishenqing
      }
      ,{
	path: '/news',
        name: '社团公告',
        component: news
      }
      ,{
	path: '/shetuanhuodong',
        name: '社团活动',
        component: shetuanhuodong
      }
      ,{
	path: '/zhuanyexinxi',
        name: '专业信息',
        component: zhuanyexinxi
      }
      ,{
	path: '/discussshetuanxinxi',
        name: '社团信息评论',
        component: discussshetuanxinxi
      }
      ,{
	path: '/shetuanxinxi',
        name: '社团信息',
        component: shetuanxinxi
      }
      ,{
	path: '/yuanxixinxi',
        name: '院系信息',
        component: yuanxixinxi
      }
      ,{
	path: '/menu',
        name: '菜单列表',
        component: menu
      }
      ,{
	path: '/shetuanleixing',
        name: '社团类型',
        component: shetuanleixing
      }
      ,{
	path: '/zhiweixinxi',
        name: '职位信息',
        component: zhiweixinxi
      }
      ,{
	path: '/shetuan',
        name: '社团',
        component: shetuan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huiyuanshenqing',
        name: '会员申请',
        component: huiyuanshenqing
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/banjixinxi',
        name: '班级信息',
        component: banjixinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
