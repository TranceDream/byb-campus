import { Component } from 'react'
import CommentCard from '../../components/comment-card'
import PostCard from '../../components/post-card'

import styles from './home.module.sass'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    <PostCard overview />
                    <CommentCard />
                </div>
            </>
        )
    }
}
