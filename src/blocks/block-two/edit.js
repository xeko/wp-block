/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps({
        tagName: "div",
        className: "my-richtext",
        value: attributes.content,
        placeholder: "テキストを入力...",
        style: {color: attributes.color || null},
        onChange: (newContent) => {
            setAttributes({content: newContent});
        }
    });
    
	return (
        <>
            <RichText {...blockProps} />
            <InspectorControls>
                <PanelBody title="Chon mau">
                    <SelectControl
                    value = {attributes.color}
                    options={[
                        {value: '', label: "Chon mau"},
                        {value: 'red', label: "Mau do"},
                        {value: 'blue', label: "Mau xanh"},
                    ]}
                    onChange={(newColor) => {
                        setAttributes({color: newColor});
                    }}
                />
                </PanelBody>
            </InspectorControls>            
        </>		
	);
}
