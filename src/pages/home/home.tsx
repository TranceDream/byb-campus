import { Flex, Text } from 'antd-mobile'
import { Component } from 'react'
import PostCard from '../../components/post-card'

import styles from './home.module.sass'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    <PostCard />
                </div>
            </>
        )
    }
}
