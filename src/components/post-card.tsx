/* eslint-disable react/jsx-indent-props */
import { Image } from '@tarojs/components'
import { Text } from 'antd-mobile'

import avatarImage from '../images/avatar.jpg'
import likeButton from '../images/good.png'
import commentButton from '../images/comment.png'
import favoriteButton from '../images/favorite.png'

import styles from './post-card.module.sass'
import IconButton from './icon-button'

export default function PostCard(): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				<Image className={styles.avatar} src={avatarImage} />
				<div>
					<Text className={styles.name}>TranceDream</Text>
					<Text className={styles.time}>2021年10月32日</Text>
				</div>
			</div>
			<Text className={styles.title}>标题测试</Text>
			<Text className={styles.content}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum bibendum eros
				non pellentesque. Mauris ac nisi ut elit rutrum malesuada non sed lorem. Ut eu nisl
				et mauris facilisis vestibulum. Praesent a fringilla nisi, in ultrices erat.
				Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
				curae; Etiam ut orci quis lacus aliquam porttitor vitae id purus. Proin in augue
				nunc. Nunc et tellus et nisl fermentum pharetra. Aenean ligula velit, fermentum vel
				tortor ac, laoreet condimentum nunc. Mauris tincidunt lorem sit amet condimentum
				commodo. Suspendisse ipsum turpis, efficitur a varius sed, euismod a nibh. Praesent
				nec accumsan arcu. Aliquam viverra nisl ac libero venenatis vulputate.
			</Text>
			<div className={styles.imagewrapper} style={{ height: '28vw' }}>
				<Image
					className={styles.image}
					style={{ height: '28vw' }}
					mode='aspectFill'
					src='https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg'
				/>
				<Image
					className={styles.image}
					style={{ height: '28vw' }}
					mode='aspectFill'
					src='https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg'
				/>
				<Image
					className={styles.image}
					style={{ height: '28vw' }}
					mode='aspectFill'
					src='https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg'
				/>
			</div>
			<div className={styles.buttongroup}>
				<IconButton src={favoriteButton} />
				<IconButton src={commentButton} text='12' />
				<IconButton src={likeButton} text='34' />
			</div>
		</div>
	)
}
