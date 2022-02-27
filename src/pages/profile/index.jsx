import { request, setStorageSync, getStorage } from '@tarojs/taro';
import React, { Component } from 'react';
import { FontAwesome } from 'taro-icons';
import styles from './index.module.scss'
import avatar from '../../images/user.png'
import FormData from '../../utils/form-data'
import { chooseImage, login } from '../../utils/request';

/**
 * 个人中心页面设置项组件
 *
 * @param {Object} option 组件配置
 * @param {string} option.title 标签文本
 * @param {string} option.icon 头部图标名称，见 Font awesome 官方网站
 * @param {*} option.trailing 尾部元素(未添加)
 * @param {Function} option.onClick 点击事件
 */
let Item = ({ title, icon, trailing, onClick }) => (<div className={styles.item} onClick={onClick}>

	<div className={styles.icon}><FontAwesome family='solid' name={icon} /></div>
	<div className={styles.label}>
		{title}
	</div>
</div>)

/**
 * 个人中心页面(现在用于测试)
 *
 * @todo 去除测试功能
 */
export default class Profile extends Component {
	render() {
		// 测试用方法，待删除
		let onLaunchPost = () => {
			getStorage({
				key: 'token',
				success: token => {
					let data = new FormData();
					data.append('post', JSON.stringify({
						content: '测测文件',
					}))
					let formdata = data.getData()
					request({
						url: 'https://beiyangbei.club/post/launchPost.action',
						method: 'POST',
						data: formdata.buffer,
						header: {
							'content-type': formdata.contentType,
							'JSessionId': `${token.data}`
						},
						success: res => {
							console.log(res)
						}
					})
				}
			})
		}

		return <div className={styles.container}>
			<div className={styles.background}>
				<img className={styles.avatar} src={avatar} />
				<div className={styles.userinfo}>
					<div className={styles.username}>点击登录</div>
					<div className={styles.bio}>&zwnj;</div>
				</div>
			</div>
			<Item title='修改个人信息(chooseImage)' icon='pen' onClick={chooseImage} />
			<Item title='我的贴子(Launch)' icon='file-alt' onClick={onLaunchPost} />
			<Item title='我的收藏(Login)' icon='star' onClick={() => { login({}) }} />
			<Item title='退出登录' icon='sign-out-alt' onClick={
				// 将token清空
				setStorageSync('token', undefined)
			} />
		</div>;
	}
}
