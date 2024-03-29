import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

// import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	// const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name]

	if (!IconComponent) {
		// Handle the case where the specified icon name is not valid
		return null
	}

	return <IconComponent />
}

export default MaterialIcon
