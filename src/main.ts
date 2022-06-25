import { createApp, useAttrs, createVNode,h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@pureadmin/components/dist/index.css";
import "@pureadmin/components/dist/theme.css";
import * as Icons from '@element-plus/icons-vue'
import TWEEN from "@tweenjs/tween.js";
import './assets/icons' 
import './assets/style/index.scss'
import "./assets/iconfont/iconfont.css";
require('./utils/mock');
const app = createApp(App)

store.dispatch('getServerConfig')

const Icon = (props:{icon:string,size:18}) => {
    const {icon,size} = props;
    // 创建icon标签
    return h('i',{class:"el-icon",style:`font-size:${size}px;`},[createVNode(Icons[icon as keyof typeof Icons])])
}
app.component('Icon',Icon)

app.directive('motion', {
    mounted(el,{value}) {
        const {initial,enter,time} = value
        new TWEEN.Tween(initial)
        .to(enter, time)
        .easing(TWEEN.Easing.Elastic.InOut)
        .onUpdate(() => {
            el.style.setProperty('opacity', initial.opacity)
            el.style.setProperty('transform', `translate(0px, ${initial.y}px)`)
        })
        .start()

        const animate = function () {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
        animate();
    }
})

app.use(store).use(router).mount('#app')