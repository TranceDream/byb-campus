import { Button, Flex } from 'antd-mobile'
import Taro from '@tarojs/taro'
import { useState } from 'react'

import styles from './new-post.module.sass'
import { Image, ScrollView, Textarea } from '@tarojs/components'

export default function NewPost() {
	const temp: string[] = []
	const [content, setContent] = useState('')
	const [imageSrc, setImageSrc] = useState(temp)

	return (
		<div className={styles.wrapper}>
			<Textarea
				className={styles.input}
				placeholder='填写内容'
				value={content}
				onInput={e => {
					setContent(e.detail.value)
				}}
				autoFocus
				autoHeight
				maxlength={-1}
			/>
			<ScrollView className={styles.imageList} scrollX>
				{imageSrc.map(img => {
					return <Image className={styles.image} src={img} />
				})}
				{imageSrc.length <= 8 ? (
					<Flex className={styles.addImageWrapper}>
						<Flex
							className={styles.addImage}
							onClick={() => {
								Taro.chooseImage({
									count: 9, // 默认9
									sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
									sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
									success: function (res) {
										// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
										var tempFilePaths = res.tempFilePaths
										setImageSrc(imageSrc.concat(tempFilePaths))
									},
								})
							}}
						>
							+
						</Flex>
					</Flex>
				) : (
					<></>
				)}
			</ScrollView>
			<Button className={styles.button} onClick={() => {
				console.log({
					content: content,
					image: imageSrc
				})
			}}>发帖</Button>
		</div>
	)
}
