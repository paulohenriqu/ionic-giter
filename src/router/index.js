import Vue from 'vue'
import {IonicVueRouter} from '@modus/ionic-vue'


import HelloWorld from '@/components/HelloWorld'
import Page2 from '@/components/Page2'
import PageMenu from '@/components/PageMenu'
import Tabs from '@/components/Tabs'
import Gps from '@/components/Gps'
import Camera from '@/components/Camera'
import FileTransfer from '@/components/FileTransfer'
import Sqlite from '@/components/Sqlite'


//import Tab1 from '@/components/Tab1'
//import Tab2 from '@/components/Tab2'


/*
const HelloWorld = () => import('@/components/HelloWorld')
const Page2 = () => import('@/components/Page2')
const PageMenu = () => import('@/components/PageMenu')
const Tabs = () => import('@/components/Tabs')
const Gps = () => import('@/components/Gps')
const Camera = () => import('@/components/Camera')
*/


Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/pageMenu',
      name: 'PageMenu',
      component: PageMenu
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs,    
    
    },
    {
      path: '/gps',
      name: 'Gps',
      component: Gps,    
    
    },
    {
      path: '/camera',
      name: 'Camera',
      component: Camera,    
    
    },
    {
      path: '/file',
      name: 'file',
      component: FileTransfer,    
    
    },
    {
      path: '/sqlite',
      name: 'sqlite',
      component: Sqlite,    
    
    },

    /*
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs,
      children: [
        { path: "/", redirect: "tab-one" },
        {
          path: "tab-one",
          components: { tab1: Tab1 }
        }  
      ]
    }*/
  ]
})
