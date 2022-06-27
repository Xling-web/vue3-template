import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { resultType, AxiosHttpError, RequestMethods, AxiosHttpResponse, AxiosHttpRequestConfig } from './types.d'
import NProgress from "../progress";
import { useRouter } from "vue-router";
const router = useRouter()
const defaultConfig = {
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? VITE_PROXY_DOMAIN_REAL
  //     : VITE_PROXY_DOMAIN,
  // 当前使用mock模拟请求，将baseURL制空，如果你的环境用到了http请求，请删除下面的baseURL启用上面的baseURL
    baseURL: "",
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }, 
  // 数组格式参数序列化
  // paramsSerializer: params => qs.stringify(params, { indices: false })
};

class AxiosHttp {
    // public     公有的(默认属性)
    // private    私有的(实例和继承它的子类都访问不到)
    // static     静态的(实例不能访问)
    // protected  受保护的(子类可以访问，实例不能访问)
    
    instance: AxiosInstance
    initConfig: AxiosHttpRequestConfig
    constructor(config: AxiosRequestConfig) {
        //1.创建axios实例
        this.instance = axios.create(config)
        //2.初始化配置对象
        this.initConfig = {}
        // 请求响应拦截器
        this.httpInterceptorsRequest();
        this.httpInterceptorsResponse();
    }

    // 请求拦截
    private httpInterceptorsRequest(): void {
        this.instance.interceptors.request.use(
            (config: AxiosHttpRequestConfig) => {
                const $config = config;
                // 开启进度条动画
                NProgress.start();
                // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
                if (typeof config.beforeRequestCallback === "function") {
                    config.beforeRequestCallback($config);
                    return $config;
                }
                if (this.initConfig.beforeRequestCallback) {
                    this.initConfig.beforeRequestCallback($config);
                    return $config;
                }
                return $config;
            },
            error => {
                return Promise.reject(error);
            }
        );
    }

    // 响应拦截
    private httpInterceptorsResponse(): void {
        const instance = this.instance;
        instance.interceptors.response.use((response: AxiosHttpResponse) => {
            const $config = response.config;
            // 关闭进度条动画
            NProgress.done();
            // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
            if (typeof $config.beforeResponseCallback === "function") {
                $config.beforeResponseCallback(response);
                return response.data;
            }
            if (this.initConfig.beforeResponseCallback) {
                this.initConfig.beforeResponseCallback(response);
                return response.data;
            }
                return response.data;
            },
            (error: AxiosHttpError) => {
                const $error = error;
                $error.isCancelRequest = axios.isCancel($error);
                console.log('$error.isCancelRequest',$error)
                
                if ($error && $error.response) {
                    // 1.公共错误处理
                    // 2.根据响应码具体处理
                    switch ($error.response.status) {
                      case 400:
                        $error.message = '错误请求(400)'
                        break;
                      case 401:
                        $error.message = '未授权，请重新登录(401)'
                        break;
                      case 403:
                        $error.message = '拒绝访问(403)'
                        break;
                      case 404:
                        $error.message = '请求网址域名错误,未找到该网页资源(404 not found)'
                        // window.location.href = "/error"
                        break;
                      case 405:
                        $error.message = '请求类型未允许(405 Method not allowed)'
                        break;
                      case 406:
                        $error.message = '(请求不接受 406)无法使用请求的内容特性响应请求的网页'
                        break;
                      case 407:
                        $error.message = '该IP服务被禁止(407),请开启代理授权'
                        break;
                      case 408:
                        $error.message = '请求超时(408)'
                        break;
                      case 409:
                        $error.message = '(服务器冲突 409) 服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息'
                        break;
                      case 410:
                        $error.message = '（服务器资源不存在 410）请求的资源已永久删除'
                        break;
                      case 411:
                        $error.message = '(需要有效长度 411） 服务器不接受不含有效内容长度标头字段的请求'
                        break;
                      case 412:
                        $error.message = '(未满足前提条件 412） 服务器未满足请求者在请求中设置的其中一个前提条件'
                        break;
                      case 413:
                        $error.message = '（请求实体过大 413） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力'
                        break;
                      case 414:
                        $error.message = '（请求的URI过长 414） 请求的URI过长，服务器无法处理。'
                        break;
                      case 415:
                        $error.message = '（不支持的媒体类型 415） 请求的格式不受请求页面的支持'
                        break;
                      case 416:
                        $error.message = '（请求范围不符合要求 416） 如果页面无法提供请求的范围，则服务器会返回此状态代码'
                        break;
                      case 417:
                        $error.message = '（未满足期望值 417） 服务器未满足”期望”请求标头字段的要求'
                        break;
                      case 500:
                        $error.message = '服务器端出错(500)'
                        break;
                      case 501:
                        $error.message = '服务器不具备完成请求的功能(501)'
                        break;
                      case 502:
                        $error.message = '网络错误,服务器端无响应(502)'
                        break;
                      case 503:
                        $error.message = '服务不可用(503)'
                        break;
                      case 504:
                        $error.message = '网关超时(504)'
                        break;
                      case 505:
                        $error.message = '（HTTP版本不受支持 505)服务器不支持请求中所用的HTTP协议版本'
                        break;
                      default:
                        $error.message = `连接错误${$error.response.status}`
                    }
                  }
                // 关闭进度条动画
                NProgress.done();
                // 所有的响应异常 区分来源为取消请求/非取消请求
                return Promise.reject($error);
            }
        );
    }

    // 通用请求工具函数
    public request<T>(
        method: RequestMethods,
        url: string,
        param?: AxiosRequestConfig,
        axiosConfig?: AxiosHttpRequestConfig
    ): Promise<T> {
        const config = { method, url, ...param, ...axiosConfig } as AxiosHttpRequestConfig;

        // 单独处理自定义请求/响应回掉
        return new Promise((resolve, reject) => {
            this.instance.request(config)
            .then((response:undefined) => resolve(response))
            .catch(error => {
                reject(error);
            });
        });
    }

    // 单独抽离的post工具函数
    public post<T, P>(
            url: string,
            params?: T,
            config?: AxiosHttpRequestConfig
        ): Promise<P> {
        return this.request<P>("post", url, params, config);
    }

    // 单独抽离的get工具函数
    public get<T, P>(
            url: string,
            params?: T,
            config?: AxiosHttpRequestConfig
        ): Promise<P> {
        return this.request<P>("get", url, params, config);
    }
}

export const http = new AxiosHttp(defaultConfig);