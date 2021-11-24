import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.sass'

class App extends Component {
	componentDidMount() {
		// 登录测试哦
		Taro.login({
			success: res => {
				if (res.code) {
					// 发起网络请求
					Taro.setStorage({key: 'code', data: res.code})
					console.log(res.code)
				} else {
					console.log('登录失败！' + res.errMsg)
				}
			},
			fail: res => {
				console.log('登录失败！' + res.errMsg)
			},
		})
	}

	componentDidShow() {}

	componentDidHide() {}

	componentDidCatchError() {}

	// this.props.children 是将要会渲染的页面
	render() {
		return this.props.children
	}
}

export default App
