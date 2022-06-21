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