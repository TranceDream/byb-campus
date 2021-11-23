import { Flex, Text } from 'antd-mobile'
import { Component } from 'react'

import styles from './profile2.module.sass'

export default class Confession extends Component {
    render() {
        return (
            <>
                <Flex className={styles.wrapper}>
                    <Text>
                        profile2 here
                    </Text>
                </Flex>
            </>
        )
    }
}
