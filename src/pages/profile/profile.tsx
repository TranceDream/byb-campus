import { Flex, Text } from 'antd-mobile'
import { Component } from 'react'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

import userIcon from '../../images/user.png'

import styles from './profile.module.sass'


export default class Profile extends Component {

    toP1(){
        Taro.navigateTo({
            url:'../edit-profile/edit-profile'
        })
    }
    toP2(){
        Taro.navigateTo({
            url:'../profile2/profile2'
        })
    }

	render() {
		return (<>
            <Flex className={styles.wrapper}>
                <div className={styles.user}>
                    <Image className={styles.pic} src={userIcon} />
                    <Text className={styles.userName}>
                        用户名
                    </Text>

                </div>
                
                <div className={styles.divLine0}></div>
 
                <Text className={styles.box1} onClick={this.toP1}>
                    Edit your profile
                </Text>

                <div className={styles.divLine}></div>

                <Text className={styles.box1} onClick={this.toP2}>
                    Profile2
                </Text>

                <div className={styles.divLine}></div> 

            </Flex>
                
        </>)
	}
}
