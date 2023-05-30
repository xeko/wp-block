import { __ } from '@wordpress/i18n';
// InspectorControlsはブロック選択したときのサイドバー部分
import {
    useBlockProps,
    RichText,
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    ContrastChecker,
    withColors,
} from '@wordpress/block-editor';

import './editor.scss';

function Edit( props ) {
    const {
        attributes,
        setAttributes,
        backgroundColor,
        textColor,
        setBackgroundColor,
        setTextColor,
    } = props;
    // console.log( attributes,props );
    
    // attributesはblock.jsonで定義したattributes
    const { text, alignment } = attributes;
    const onChangeText = ( newText ) => {
        setAttributes( { text: newText } );
    };
    const onChangeAlignment = ( newAligment ) => {
        setAttributes( { alignment: newAligment } );
    };

    return (
        <>
            <InspectorControls>
                { /* functions.phpで設定したeditor-color-paletteから色を取得する */ }
                <PanelColorSettings
                    title={ __( '色の設定', 'text-box' ) }
                    icon="admin-appearance"
                    initialOpen
                    disableCustomColors={ false }
                    colorSettings={ [
                        {
                            value: backgroundColor.color,
                            onChange: setBackgroundColor,
                            label: __( '背景色', 'text-box' ),
                        },
                        {
                            value: textColor.color,
                            onChange: setTextColor,
                            label: __( '文字色', 'text-box' ),
                        },
                    ] }
                >
                    <ContrastChecker
                        textColor={ textColor.color }
                        backgroundColor={ backgroundColor.color }
                    />
                </PanelColorSettings>
            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar
                    onChange={ onChangeAlignment }
                    value={ alignment }
                />
            </BlockControls>
            <RichText
                { ...useBlockProps( {
                    className: `text-box-align-${ alignment }`,
                    style: {
                        backgroundColor: backgroundColor.color,
                        color: textColor.color,
                    },
                } ) }
                onChange={ onChangeText }
                value={ text }
                placeholder={ __( '入力してください。', 'text-box' ) }
                tagName="h4"
            />
        </>
    );
}


export default withColors( {
    backgroundColor: 'backgroundColor',
    textColor: 'color',
} )( Edit );
