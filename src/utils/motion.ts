import { createApp } from 'vue'
const app = createApp({})
import TWEEN from "@tweenjs/tween.js";

app.directive('motion', {
    mounted(el,{value}) {
        const coords = {x: 0, y: 0}
        new TWEEN.Tween(coords)
        .to({x: value.x, y: value.y}, value.time)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
            el.style.setProperty('transform', `translate(${coords.x}px, ${coords.y}px)`)
        })
        .start()

        const animate = function () {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
        animate();
    }
})