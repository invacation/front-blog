/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Descripttion: 个人博客--列表组件
 * @version: 
 * @Author: yiping.liu<yiping.liu@hand-china.com>
 * @Date: 2021-06-08 17:11:19
 * @LastEditors: yiping.liu
 */
import React, { FC } from 'react';

import styles from './content.less';
import IconFont from '../utils/icon';

interface List {
	title: string;
	content: string;
	image?: string;
	comment: number;
	star: number;
	author?: string;
	reads?: number;
}

interface Props<T> {
	contentList: Array<T>;
}

const Content: FC<Props<List>> = (props: Props<List>) => {
	const { contentList } = props;
	return (
		<React.Fragment>
			{contentList.map(ele =>
				<div className={styles.content} id="content">
					<div className={styles.noImage}>
						<a href="http://360.cn" target="view_window" className={styles.title} id="title">{ele.title}</a>
						<div className={styles['main-content']}>{ele.content}</div>
						<div className={styles['person-info']}>
							<span className={styles['person-info-content']}>{ele.author}</span>
							<span className={styles['person-info-content']}><IconFont type="icon-pinglun2"/>  {ele.comment}</span>
							<span className={styles['person-info-content']}><IconFont type="icon-aixin"/>  {ele.star}</span>
						</div>
					</div>
					{ele.image && <div className={styles.image}>
						<img className={styles.img} src={ele.image} alt="" />
					</div>}
				</div>)
			}
		</React.Fragment>
	)
}

export default Content;
