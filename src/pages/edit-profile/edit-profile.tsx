import { Flex, Text } from 'antd-mobile'
import { Component } from 'react'

import styles from './edit-profile.module.sass'

export default class Confession extends Component {
    render() {
        return (
            <>
                <Flex className={styles.wrapper}>
                    <Text>
                        edit your profile here
                    </Text>
                </Flex>
            </>
        )
    }
}
