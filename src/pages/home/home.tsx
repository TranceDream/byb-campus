import { Flex, Text } from 'antd-mobile'
import { Component } from 'react'

import styles from './home.module.sass'

export default class Home extends Component {
    render() {
        return (
            <>
                <Flex className={styles.wrapper}>
                    <Text>
                        Home here
                    </Text>
                </Flex>
            </>
        )
    }
}
