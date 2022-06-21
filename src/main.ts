import { createApp, useAttrs } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@pureadmin/components/dist/index.css";
import "@pureadmin/components/dist/theme.css";
import TWEEN from "@tweenjs/tween.js";
import './assets/icons' 
require('./utils/mock');

const app = createApp(App)

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