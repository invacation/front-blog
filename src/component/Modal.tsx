/*
 * @Descripttion: 个人博客--对话框
 * @version: 
 * @Author: yiping.liu<yiping.liu@hand-china.com>
 * @Date: 2021-06-10 15:54:04
 * @LastEditors: yiping.liu
 */
import React, { FC } from 'react';

import styles from './modal.less';

interface Props {
	children: React.ReactNode;
	visible?: boolean;
}

const Modal: FC<Props> = (props: Props) => {
	const { visible = false, children } = props;

	return (
		<React.Fragment>
			<div style={{ display: visible ? 'block' : '' }} className={styles['modal-content']}>
				{children}</div>
		</React.Fragment>
	)
}

export default Modal;

