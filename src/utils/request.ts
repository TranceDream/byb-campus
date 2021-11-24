import { General, request } from '@tarojs/taro'

const BASE_URL = 'https://beiyangbei.club/BYBSchool'

interface SuccessCallbackResult<T extends string | General.IAnyObject | ArrayBuffer = any | any>
	extends General.CallbackResult {
	/** 开发者服务器返回的数据 */
	data: T
	/** 开发者服务器返回的 HTTP Response Header */
	header: General.IAnyObject
	/** 开发者服务器返回的 HTTP 状态码 */
	statusCode: number
	/** 调用结果 */
	errMsg: string
	/** cookies */
	cookies?: string[]
}

interface SuccessCallBack {
	(res: SuccessCallbackResult): void
}

interface FailCallBack {
	(res: General.CallbackResult): void
}

interface RequestOptions {
	method?: 'GET' | 'POST'
	data?: any
	success?: SuccessCallBack
	fail?: FailCallBack
}

const fetch = (url: string, options?: RequestOptions) => {
	console.log(options?.data)
	request({
		url: BASE_URL + url,
		data: options?.data,
		success: options?.success,
		fail: options?.fail,
		method: options?.method,
		header: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

export default fetch
