export default [{
  path: '/',
  name: '',
  meta: {
    name: '首页'
  },
  component: resolve => require(['../views/Index.vue'], resolve)
}, {
  path: '/Home',
  name: 'Home',
  meta: {
    name: '主页'
  },
  component: resolve => require(['../views/Home.vue'], resolve)
}, {
  path: '/Detail',
  name: 'Detail',
  meta: {
    name: '详情页'
  },
  component: resolve => require(['../views/Detail.vue'], resolve)
}]



