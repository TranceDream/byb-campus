import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'
import React, { Component } from 'react'
import { Flex, Text, Button } from 'antd-mobile'
import loginIcon from '../../images/login.png'
import styles from './login.module.sass'

export default class Login extends Component {
	login = e => {
		console.log('temp to login')
		Taro.getUserProfile({
			desc: '拿来吧你',
			success: res => {
				console.log(res)
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
