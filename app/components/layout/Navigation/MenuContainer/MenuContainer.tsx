import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './Menu'
import { firstMenu } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu'), {
	ssr: false,
})

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* <DynamicGenreMenu />
			<Menu menu={{ title: 'General', items: [] }} /> */}
		</div>
	)
}

export default MenuContainer
