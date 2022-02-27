/**
 * @file request.js 包含了网络请求用到的各种方法
 * @author TranceDream
 * @todo Add more methods
 */

import Taro, { getStorage, request } from "@tarojs/taro"
import FormData from "./form-data"

const base = 'https://beiyangbei.club/'

/**
 * 登录方法，调用后弹出用户授权框，确定后调用 Taro.login 获取 code ，使用code发起请求，拿到 JSessionId
 *
 * @method login
 * @async
 * @param {Object} option 回调
 * @param {Function} option.success 获取 JSessionId 后的回调
 * @param {Function} option.fail 执行失败的回调
 * @param {Function} option.complete 登录流程结束的回调
 */
export async function login({ success, fail, complete }) {
	// 获取用户档案
	await Taro.getUserProfile({
		desc: '登录或注册',
		success: res => {
			// 获取 code
			Taro.login({
				success: c => {
					// 发起请求
					request({
						url: base + 'user/login.action',
						method: 'post',
						data: {
							'code': `${c.code}`,
							'user': res.userInfo
						},
						success: response => {
							if (response.data.JSessionId) {
								Taro.setStorageSync('token', response.data.JSessionId)
								if (success) { success.call() }
							} else {
								if (fail) { fail.call() }
							}
						},
						fail: error => {
							console.error('Failed to request :(')
							console.error(error)
							if (fail) { fail.call() }
						},
					})
				},
				fail: error => {
					console.error('Failed to get the login code :(')
					console.error(error)
					if (fail) { fail.call() }
				}
			})
		},
		fail: err => {
			console.error('Failed to get profile :(')
			console.error(err)
			if (fail) { fail.call() }
		}
	})
	if (complete) { complete.call() }
}

/**
 * 主页查贴方法，使用时传入关键字，返回一个帖子列表
 *
 * @method searchPost
 * @async
 * @param {string} keyword 查询用关键字
 * @returns {Array | undefined} 查询成功返回帖子列表，否则返回undefined
 */
export async function searchPost(keyword) {
	try {
		// 获取 token
		const token = await getStorage({ key: 'token' })

		if (token) {
			// 发起请求
			const res = await request({
				url: base + 'post/showPostList.action',
				method: 'post',
				data: {
					method: 'home',
					keyword: '',
				},
				header: {
					'JSessionId': token.data
				}
			})
			console.log(res.data.data)
			return res.data.data ?? []
		} else {
			console.error("Failed to get token :(")
			return undefined
		}
	} catch (e) {
		console.error(e)
		return undefined
	}
}

/**
 * 用户查贴方法，使用时传入关键字和分页参数，返回一个帖子列表
 *
 * @method searchPost
 * @async
 * @param {string} keyword 查询用关键字
 * @param {number} pageSize 分页大小
 * @param {number} pageNo 分页索引
 * @returns {Array | undefined} 查询成功返回帖子列表，否则返回undefined
 */
export async function searchUserPost(keyword) {
	try {
		// 获取 token
		const token = await getStorage({ key: 'token' })
		if (token) {
			// 发起请求
			const res = await request({
				url: base + 'post/showPostList.action',
				method: 'post',
				data: {
					method: 'home',
					keyword: keyword ?? '',
				},
				header: {
					'JSessionId': token.data
				}
			})
			console.log(res.data.data)
			return res.data.data ?? []
		} else {
			console.error("Failed to get token :(")
			return undefined
		}
	} catch (e) {
		console.error(e)
		return undefined
	}
}

/**
 * 弹出图像选择器
 *
 * @method chooseImage
 * @async
 * @returns {Array} 返回图片路径数组
 */
export async function chooseImage() {
	let images = []
	await Taro.chooseImage({
		count: 9
	}).then(res => {
		images = res.tempFilePaths
	}).catch(e => {
		console.error(e)
	})
	return images
}

/**
 * 发帖请求，传入内容和图片列表进行发帖
 *
 * @method launchPost
 * @async
 * @param {string} content 帖子内容
 * @param {Array} images 图片路径列表，由 chooseImage 方法返回，没有图片请传入空数组
 */
export async function launchPost(content, images) {
	try {
		// 获取 token
		const token = await getStorage({ key: 'token' })
		if (token) {
			let rawData = new FormData();

			// 放入内容，内容为 JSONObject
			rawData.append('post', JSON.stringify({
				content: content
			}))

			// 向原始数据结构添加图片路径
			images.map(image => {
				data.appendFile('images', image)
			})

			// 生成 FormData 数据
			let data = rawData.getData()

			// 发起请求
			const res = await request({
				url: base + 'post/launchPost.action',
				method: 'post',
				data: data.buffer,
				header: {
					'content-type': data.contentType,
					'JSessionId': token.data
				}
			})
		}
	} catch (e) {
		console.error(e)
		return undefined
	}
}
