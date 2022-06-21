import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { resultType, AxiosHttpError, RequestMethods, AxiosHttpResponse, AxiosHttpRequestConfig } from './types.d'
import NProgress from "../progress";
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
        instance.interceptors.response.use(
            (response: AxiosHttpResponse) => {
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