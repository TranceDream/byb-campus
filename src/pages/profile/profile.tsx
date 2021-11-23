import { Flex, Text, View } from 'antd-mobile'
import { Component } from 'react'
import { Image } from '@tarojs/components'

import userIcon from '../../images/mg.png'

import styles from './profile.module.sass'

export default class Profile extends Component {

	render() {
		return (<>
            <Flex className={styles.wrapper}>
                <div className={styles.user}>
                    <Image className={styles.pic} src={userIcon} />
                    <Text className={styles.userName}>
                        用户名
                    </Text> 
                </div>
                
                <Text className={styles.box1}>
                    Profile
                </Text>    
                
                <div className={styles.divLine}></div>

               <Text className={styles.box1}>
                    Profile
                </Text>    

                <div className={styles.divLine}></div> 

            </Flex>
                
            
        </>)
	}
}
