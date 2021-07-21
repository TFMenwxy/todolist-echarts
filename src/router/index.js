import Vue from 'vue'
import Router from 'vue-router'
import List from "@/components/List";
import DoneList from "@/components/DoneList";
import UnDoneList from "@/components/UnDoneList";
Vue.use(Router)
const routes = [
    {
        path:'/',
        redirect: '/list'
    },
    {
        path:'/list',
        component: List
    },
    {
        path:'/donelist',
        component: DoneList
    }
    ,
    {
        path:'/undonelist',
        component: UnDoneList
    }
]
const router = new Router({
    routes,
})
export default router