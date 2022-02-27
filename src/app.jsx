import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.sass'
import 'taro-icons/scss/FontAwesome.scss'

class App extends Component {
	componentDidMount() {
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
