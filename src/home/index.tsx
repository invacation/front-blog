/*
 * @Descripttion: 个人博客--首页
 * @version: 
 * @Author: yiping.liu<yiping.liu@hand-china.com>
 * @Date: 2021-06-08 14:03:34
 * @LastEditors: yiping.liu
 */
import React, { FC, useState, useEffect, useCallback } from 'react';
import { Switch } from 'antd';

import styles from './index.less';
import Tabs from '../component/Tabs';
import Content from '../component/Content';
import Modal from '../component/Modal';
import IconFont from '../utils/icon';

const Home: FC = () => {
	const [content, setCotent] = useState([
		{
			title: 'React中配置less',
			content: '在React项目中配置less需要改配置文件，所以我们需要找到webpack.config.js文件。现在creat-react-app创建的r...',
			comment: 0,
			star: 4,
			author: '以晓寒',
			image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F7330570062%2F0&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625898229&t=e4be1b0696670ec8e014c5ea631dbc64'
		},
	]);
	const [visible, setVisible] = useState(false);
	const [checked, setChecked] = useState<boolean>(Boolean(Number(localStorage.getItem("checked"))) || false);

	useEffect(() => {
		window.addEventListener('click', handleClose);
		if (Boolean(Number(localStorage.getItem("checked")))) {
			changeTheme("#3f3f3f", "black", 'white');
		}
		return () => {
			window.removeEventListener('click', handleClose);
		}
	}, []);


	/**
	 * @description: 鼠标移进事件
	 * @param {MouseEvent} e
	 */
	const handleOver = useCallback((e: MouseEvent) => {
		const target = e.target as HTMLDivElement;
		if (checked) {
			target!.style.backgroundColor = 'transparent';
			target!.style.border = '1px solid red';
		} else {
			target!.style.backgroundColor = '#f7f3f3';
			target!.style.border = '1px solid #ea6f5a';
		}
	}, [checked]);

	/**
	 * @description: 鼠标移出事件
	 * @param {MouseEvent} e
	 */
	const handleOut = useCallback((e: MouseEvent) => {
		const target = e.target as HTMLDivElement;
		if (checked) {
			target!.style.backgroundColor = 'transparent';
			target!.style.border = '1px solid #ea6f5a';
		} else {
			target!.style.backgroundColor = 'transparent';
			target!.style.border = '1px solid #ea6f5a';
		}
	}, [checked]);

	/**
	 * @description: 关闭弹框
	 * @param {*} void
	 */
	const handleClose = (): void => {
		setVisible(false);
	}


	/**
	 * @description: 主题切换弹框
	 * @param {*}
	 */
	const handleSwitch = (e: React.MouseEvent): void => {
		e.stopPropagation();
		// document.getElementsByTagName('body')[0].style.opacity = '0.3';
		// document.getElementsByTagName('body')[0].style.zIndex = '100';
		// console.log(document.getElementById('modal1'))
		setVisible(!visible);
	}

	/**
	 * @description: 开关控制
	 * @param {*}
	 */
	const handleMode = (checked: boolean, e: Event): void => {
		e.stopPropagation();
		if (checked) {
			localStorage.setItem("checked", '1');
			changeTheme("#3f3f3f", "black", 'white');
		} else {
			localStorage.setItem("checked", '0');
			changeTheme("white", "#f0f0f0", 'black');
		}
		setChecked(Boolean(Number(localStorage.getItem("checked"))) || false);
	}

	const changeTheme = (body: string, borderBottom: string, color: string) => {
		document.querySelector("body")!.style.backgroundColor = body;
		document.getElementById("header")!.style.borderBottomColor = borderBottom;
		document.getElementById("content")!.style.borderBottomColor = borderBottom;
		document.getElementById("title")!.style.color = color;
	}

	useEffect(() => {
		document.getElementById("register")!.addEventListener("mouseover", handleOver);
		document.getElementById("register")!.addEventListener("mouseout", handleOut);
		setTimeout(() => {
			setVisible(false);
		}, 200);
		return ()=>{
			document.getElementById("register")!.removeEventListener("mouseover", handleOver);
			document.getElementById("register")!.removeEventListener("mouseout", handleOut);
		}
	}, [checked, handleOver, handleOut]);

	return (
		<React.Fragment>
			<div className={styles.header} id="header">
				<div className={styles['header-name']}>
					<div className={styles.text}>
						<p>峰萍浪静</p>
					</div>
				</div>
				<div className={styles['header-tab']}>
					<Tabs tabList={[{ id: 1, name: '首页' }]} />
				</div>
				<div className={styles['header-info']}>
					<div className={styles['header-icon']} onClick={handleSwitch}>
						<IconFont type="icon-aa" />
					</div>
					<div className={styles['header-login-btn']}>登录</div>
					<div className={styles['header-register-btn']} id="register">注册</div>
					<div className={styles['header-write-btn']}><IconFont type="icon-feather-" />写文章</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles['content-middle']}>
					<Content contentList={content} />
				</div>
			</div>
			{visible && <Modal visible={visible}>
				<div className={styles['modal-switch']}>
					<span className={styles['modal-word']}><IconFont type="icon-yueliang" />夜间模式</span><Switch checked={checked} onClick={handleMode} checkedChildren="开" unCheckedChildren="关" />
				</div></Modal>}
		</React.Fragment>
	)
}

export default Home;