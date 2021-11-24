import { Component } from 'react'
import CommentCard from '../../components/comment-card'
import PostCard from '../../components/post-card'
import Taro from '@tarojs/taro'

import styles from './home.module.sass'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
            openId: ''
        }
        Taro.getStorage({
            key: 'open_id',
            success: (res) => {
                this.state = {openId: res.data}
            }
        })
	}

	render() {
		return (
			<>
				<div className={styles.wrapper}>
					<div></div>
					<PostCard overview />
					<CommentCard />
				</div>
			</>
		)
	}
}
