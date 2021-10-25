import { Flex, Text } from 'antd-mobile'
import { Component } from 'react'

import styles from './profile.module.sass'

export default class Profile extends Component {
	render() {
		return (
			<>
				<Flex className={styles.wrapper}>
					<Text>
						Profile here
					</Text>
				</Flex>
			</>
		)
	}
}
