import React from 'react';
import { useState, useEffect } from 'react';
import PostCard from '../../components/post-card';
import { searchPost } from '../../utils/request';
import styles from './index.module.sass';

/**
 * 主页布局
 *
 * @todo 功能修改，主页不应该显示帖子列表
 */
export default function Home() {
	// 帖子列表，本页数据源
	const [posts, updatePosts] = useState([])

	// 组件挂载期间进行网络请求，拿到数据更新状态
	useEffect(async () => {
		const result = await searchPost()
		updatePosts(result)
	}, [])

	return (
		<div>
			{posts.map(post => {
				return (
					<PostCard post={post} />
				)
			})}
		</div>
	)
}
