import { message } from "@pureadmin/components";


/**
 * 全局提示
 * Eg: success/error/info/warning/warn/loading
 */
export function xlMessage(content:string,type = 'success',duration = 3){
    message.destroy()
    message[type]({
        content,
        duration,
    })
}

/**
 * 函数防抖
 * @param {callback} fn 事件回调
 * @param {number} delay 每次推迟执行的等待时间
 * Eg:
 *    函数名:debounce(function(){
 *      console.log("函数输出");
 *    },1000)
 */
 export const debounce = function (fn, delay) {
    return function(args) {
      const _args = args
      clearTimeout(fn.id)
      fn.id = setTimeout(()=>{
        fn.call(this,_args)
      },delay)
    } 
};

/**
 * 函数节流
 * @param {*} fn 事件回调
 * @param {*} delay 时间间隔的阈值
 * Eg:
 *    函数名:throttle(function(){
 *      console.log("函数输出");
 *    },1000)
 */
export const throttle = function (fn, delay) {
    let flag = null;
    return function(){
        if(flag)return;
        flag = setTimeout(()=>{
            fn.apply(this,arguments)
            flag = null
        },delay)
    }
};