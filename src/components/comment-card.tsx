import { Image } from '@tarojs/components'
import { Text } from 'antd-mobile'

import avatarImage from '../images/avatar.jpg'
import likeButton from '../images/good.png'
import commentButton from '../images/comment.png'
import favoriteButton from '../images/favorite.png'

import styles from './comment-card.module.sass'
import IconButton from './icon-button'

export default function CommentCard() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				<Image className={styles.avatar} src={avatarImage} />
				<div>
					<Text className={styles.name}>TranceDream</Text>
					<Text className={styles.time}>2021年10月32日</Text>
				</div>
			</div>
			<Text className={styles.content}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum bibendum eros
				non pellentesque. Mauris ac nisi ut elit rutrum malesuada non sed lorem.
			</Text>
			<div className={styles.buttongroup}>
				<IconButton src={commentButton} text='12' />
				<IconButton src={likeButton} text='34' />
			</div>
		</div>
	)
}
