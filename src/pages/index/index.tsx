/* eslint-disable react/jsx-indent-props */
import { Component } from 'react'
import { Flex, Text } from 'antd-mobile'
import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'

import homeIcon from '../../images/home.png'
import homeActiveIcon from '../../images/home-fill.png'
import confessionIcon from '../../images/favorites.png'
import confessionActiveIcon from '../../images/favorites-fill.png'
import profileIcon from '../../images/bussiness-man.png'
import profileActiveIcon from '../../images/bussiness-man-fill.png'

import Home from '../home/home'
import Confession from '../confession/confession'
import Profile from '../profile/profile'

import styles from './index.module.sass'

export default class Index extends Component {
	state = {
		activeKey: 'home',
	}

	tabs = [
		{
			key: 'home',
			icon: homeIcon,
			activeIcon: homeActiveIcon,
			title: '首页',
		},
		{
			// 真的是这个英译吗
			key: 'confession',
			icon: confessionIcon,
			activeIcon: confessionActiveIcon,
			title: '表白墙',
		},
		{
			key: 'profile',
			icon: profileIcon,
			activeIcon: profileActiveIcon,
			title: '个人资料',
		},
	]

	content = () => {
		if (this.state.activeKey == 'home') {
			return <Home />
		} else if (this.state.activeKey == 'confession') {
			return <Confession />
		} else if (this.state.activeKey == 'profile') {
			return <Profile />
		} else {
			return <Flex />
		}
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.content}>{this.content()}</div>
				<div className={styles.tabbar}>
					{this.tabs.map(item => (
						<Flex
							className={styles.tabbarItem}
							key={item.key}
							onClick={() => {
								Taro.getUserProfile(
									{
										desc: '拿来吧你',
										success: res => {
											console.log(res)
										}
									}
								)
								this.setState({ activeKey: item.key })
							}}
							direction='column'
						>
							<Image
								className={styles.icon}
								src={this.state.activeKey == item.key ? item.activeIcon : item.icon}
							/>
							<Text
								className={
									this.state.activeKey == item.key
										? styles.activeTitle
										: styles.title
								}
							>
								{item.title}
							</Text>
						</Flex>
					))}
				</div>
			</div>
		)
	}
}
