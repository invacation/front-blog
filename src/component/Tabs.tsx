/*
 * @Descripttion: 个人博客--Tabs
 * @version: 
 * @Author: yiping.liu<yiping.liu@hand-china.com>
 * @Date: 2021-06-08 14:39:48
 * @LastEditors: yiping.liu
 */
import React, { FC, useState } from 'react';

import styles from './tabs.less';
import IconFont from '../utils/icon';

interface Tab {
	id: number;
	name: string;
}

interface Props<T> {
	tabList: Array<T>;
}

const Tabs: FC<Props<Tab>> = (props: Props<Tab>) => {
	const { tabList } = props;
	const [active, setActive] = useState(0);

	const handleTabs = (index: number): void => {
		setActive(index);
	}
	return (
		<React.Fragment>
			<div className={styles.tabs}>
				{tabList.map((ele, index) => <div className={`${styles.everyTabs} ${active === index ? styles.active : ''}`} onClick={() => handleTabs(index)}>
					{ele.id === 1 && <IconFont type="icon-compass" />}<span>{ele.name}</span></div>)}
			</div>
		</React.Fragment>
	)
}

export default Tabs;