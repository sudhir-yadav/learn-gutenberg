/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const MyCustomButton = ( { isActive, onChange, value } ) => {
	return (
		<RichTextToolbarButton
			icon="editor-code"
			title={ __( 'Sample output' ) }
			onClick={ () => {
				onChange(
					toggleFormat( value, {
						type: 'learn-gutenberg/sample-output',
					} )
				);
			} }
			isActive={ isActive }
		/>
	);
};

registerFormatType( 'learn-gutenberg/sample-output', {
	title: __( 'Sample output' ),
	tagName: 'samp',
	className: null,
	edit: MyCustomButton,
} );
