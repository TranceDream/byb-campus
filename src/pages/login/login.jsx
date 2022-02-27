import { Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import styles from './login.module.sass'

/**
 * 登录页面
 *
 * @todo 待定
 */
export default class Login extends Component {
	constructor () {
		super()
		this.state = {
			userInfo: null,
			hasUserInfo: false
		}
	}

	componentDidMount() {

	}

	getUserProfile = () => {
		Taro.getUserProfile({
			desc: '用于完善会员资料',
			success: (res) => {
			  this.setState({
				userInfo: res.userInfo,
				hasUserInfo: true
			  })
			  console.log(res.userInfo)
			}
		  })
	}

	render() {
		return <div className={styles.container}>
			<div className={styles.userinfo}>
				<img className={styles.avatar} src={this.state.hasUserInfo ? this.state.userInfo.avatarUrl : ''} />
				<span className={styles.username}>{this.state.hasUserInfo ? this.state.userInfo.nickName : 'hello'}</span>
			</div>
			<button className={styles.button}>
				登录
			</button>
		</div>;
	}
}
