import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'
import { Component } from 'react'
import { Text, Button } from 'antd-mobile'

import loginIcon from '../../images/login.png'
import styles from './login.module.sass'
import fetch from '../../utils/request'

export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			code: undefined,
		}
	}

	login = () => {
		Taro.getStorage({
			key: 'code',
			success: res => {
				fetch('/user/login.action', {
					method: 'POST',
					data: { code: res.data },
					success: val => {
						if (val.data.status == 'User_Not_Exist') {
							Taro.getUserProfile({
								desc: 'getUserProfile',
								success: res => {
									let info = {
										username: res.userInfo.nickName,
										nickname: res.userInfo.nickName,
										openid: val.data.openid,
									}
									fetch('/user/register.action', {
										method: 'POST',
										data: JSON.stringify({ user: info }),
										success: result => {
											console.log(result)
										},
									})
								},
							})
						}
					},
					fail: err => {
						console.error('登录失败\t' + err)
					},
				})
			},
		})
	}
	render() {
		return (
			<div>
				<div className={styles.header}>
					<Image className={styles.image} src={loginIcon} />
				</div>
				<div className={styles.content}>
					<div> 申请获得以下权限</div>
					<Text>获得你的公开权限（昵称，头像等）</Text>
				</div>
				<Button className={styles.bottom} type='primary' onClick={this.login}>
					授权登录
				</Button>
			</div>
		)
	}
}
