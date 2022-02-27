export default {
	pages: [
		'pages/home/index',
		'pages/community/index',
		'pages/profile/index',
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: '校园微服务',
		navigationBarTextStyle: 'black'
	},
	tabBar: {
		selectedColor: '#1E90FF',
		list: [
			{
				iconPath: 'images/home.png',
				selectedIconPath: 'images/home-fill.png',
				pagePath: 'pages/home/index',
				text: '主页'
			},
			{
				iconPath: 'images/favorites.png',
				selectedIconPath: 'images/favorites-fill.png',
				pagePath: 'pages/community/index',
				text: '表白墙'
			},
			{
				iconPath: 'images/bussiness-man.png',
				selectedIconPath: 'images/bussiness-man-fill.png',
				pagePath: 'pages/profile/index',
				text: '个人中心'
			}
		]
	}
}
