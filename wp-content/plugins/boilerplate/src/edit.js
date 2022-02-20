import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

const x = 0;

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Boil erplate – hello from the editor!', 'boilerplate' ) }
		</p>
	);
}
