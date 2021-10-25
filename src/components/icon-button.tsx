import { Image } from '@tarojs/components'
import { Text } from 'antd-mobile'

import styles from './icon-button.module.sass'

export default function IconButton(props): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<Image className={styles.icon} src={props.src} mode='aspectFit' />
			{props.text ? <Text className={styles.label}>{props.text}</Text> : <></>}
		</div>
	)
}
