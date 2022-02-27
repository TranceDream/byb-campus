/**
 * @file post-card.jsx 主页和表白墙展示的帖子卡片样式
 * @todo 完成点击事件及逻辑
 */

import React from 'react';
import styles from './post-card.module.scss'
import { FontAwesome } from 'taro-icons';

/**
 * 帖子卡片样式
 *
 * @param {Object} props
 * @param {Object} props.post 传入贴子信息，由后端返回的JSON
 * @example <PostCard post={obj} />
 * @todo 添加正确的点击事件
 */
export default function PostCard({ post }) {
	function onContentClick() {

	}

	function onFavoriteClick() {

	}

	function onCommentClick() {

	}

	function onLikeClick() {

	}

	return <div className={styles.container}>
		<div className={styles.userinfo}>
			<img className={styles.avatar} src={post.avatarurl} />
			<span className={styles.username}>{post.username}</span>
		</div>
		{/* <span className={styles.title}>{title}</span> */}
		<span className={styles.content} onClick={onContentClick}>{post.content}</span>
		<div className={styles.imagegroup}>
			{post.picUrlList.map((img, index) => {
				if (img === '') { return }
				return index < 3 ? <div className={styles.image} style={{ backgroundImage: `url(${img})` }}></div> : (null)
			})}
		</div>
		<div className={styles.buttongroup}>
			<div className={styles.button} onClick={onFavoriteClick}>
				<FontAwesome family={'regular'} name='star' size={12} color={''} />
				<span className={styles.label}>{'收藏'}</span>
			</div>
			<div className={styles.button} onClick={onCommentClick}>
				<FontAwesome family='regular' name='comment-alt' size={12} />
				<span className={styles.label}>{post.comment_num}</span>
			</div>
			<div className={styles.button} onClick={onLikeClick}>
				<FontAwesome family={'regular'} name='thumbs-up' size={12} color={''} />
				<span className={styles.label}>{post.thumbs_up_num}</span>
			</div>
		</div>
	</div>;
}
