import { __ } from '@wordpress/i18n';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	const { content, alignment, checkboxField, radioField, textField, toggleField, selectField, } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<RichText.Content
				className={ `lg-align-${ alignment }` }
				tagName="p"
				value={ content }
			/>
			<h4>Inspector Control Fields</h4>
			<ul>
				<li>Checkbox Field: { checkboxField ? 'Checked' : 'Unchecked' }</li>
				<li>Radio Field: { radioField }</li>
				<li>Text Field: { textField }</li>
				<li>Toggle Field: { toggleField ? 'ON' : 'OFF' }</li>
				<li>Select Field: { selectField }</li>
			</ul>
		</div>
	);
}
