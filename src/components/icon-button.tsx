import { Image } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { Text } from 'antd-mobile'

import styles from './icon-button.module.sass'

export default function IconButton(props): JSX.Element {
	const router = useRouter()
	return (
		<div
			className={styles.wrapper}
			onClick={() => {
				Taro.navigateTo({ url: '/pages/new-post/new-post' })
			}}
		>
			<Image className={styles.icon} src={props.src} mode='aspectFit' />
			{props.text ? <Text className={styles.label}>{props.text}</Text> : <></>}
		</div>
	)
}
