import { Flex, Text } from 'antd-mobile'
import { Component } from 'react'

import styles from './confession.module.sass'

export default class Confession extends Component {
    render() {
        return (
            <>
                <Flex className={styles.wrapper}>
                    <Text>
                        Confession here
                    </Text>
                </Flex>
            </>
        )
    }
}
