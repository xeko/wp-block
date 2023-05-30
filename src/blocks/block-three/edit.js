import { __ } from '@wordpress/i18n';

import { 
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    PanelColorSettings,
    ContrastChecker,
} from '@wordpress/block-editor';

import {
    ToolbarGroup, 
    ToolbarButton,
    ToolbarDropdownMenu,
    PanelBody,
    TextControl,
    TextareaControl,
    ToggleControl,
    ColorPalette,
    AnglePickerControl,
    ColorPicker,
} from '@wordpress/components';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const {
        text, 
        alignment, 
        backgroundColor, 
        textColor,
    } = attributes;

    const onChangeText = (newText) => {
        setAttributes({text : newText});
    };

    const onChangeAlignment = (newAlignment) => {
        setAttributes({alignment: newAlignment});
    };
    const onBackgroundColorChange = (newBgColor) => {
        setAttributes({backgroundColor: newBgColor});
    };

    const onTextColorChange = (newTextColor) => {
        setAttributes({textColor: newTextColor});
    };

	return (
        <>
            <BlockControls group="inline">
                <p>inline Control</p>
            </BlockControls>

            <BlockControls group="block">
                <p>block Control</p>
            </BlockControls>

            <BlockControls
                group="other"
                controls = {[
                    {
                        title: 'ボタン１',
                        icon: 'admin-generic',
                        isActive: true,
                        onClick: ()=> console.log('ボタン１ click')
                    },
                    {
                        title: 'ボタン２',
                        icon: 'admin-collapse',
                        onClick: () => console.log("ボタン２ click")
                    },
                ]}
            >
                {text && (
                    <ToolbarGroup>
                        <ToolbarButton
                            title="左揃え"
                            icon="editor-alignleft"
                            onClick={() => console.log("左揃え")}
                        />
                        <ToolbarButton
                            title="中央揃え"
                            icon="editor-aligncenter"
                            onClick={() => console.log("中央揃え")}
                        />
                        <ToolbarButton
                            title="右揃え"
                            icon="editor-alignright"
                            onClick={() => console.log("右揃え")}
                        />
                        <ToolbarDropdownMenu
                            icon="arrow-down-alt2"
                            label="他のオペション"
                            controls={[
                                {
                                    title:"幅広",
                                    icon: 'align-wide',
                                },
                                {
                                    title: "全幅",
                                    icon: 'align-full-width',
                                }
                            ]}
                        />
                    </ToolbarGroup>
                )}
                <ToolbarGroup>
                    <p>Text text 1</p>
                </ToolbarGroup>
            </BlockControls>

            <BlockControls>
                <AlignmentToolbar/>
            </BlockControls>            

            <InspectorControls>
                <PanelColorSettings
                    title={ __( '色の設定', 'text-box' ) }
                    icon="admin-appearance"
                    initialOpen
                    disableCustomColors={ false }
                    colorSettings={ [
                        {
                            value: backgroundColor,
                            onChange: onBackgroundColorChange,
                            label: __( '背景色', 'text-box' ),
                        },
                        {
                            value: textColor,
                            onChange: onTextColorChange,
                            label: __( '文字色', 'text-box' ),
                        },
                    ] }
                >
                {/* コントラストがうすすぎないかチェック */}
                <ContrastChecker
                    textColor={ textColor }
                    backgroundColor={ backgroundColor }
                />
                </PanelColorSettings>
            </InspectorControls>

            <RichText
                { ...useBlockProps( {
                    className: `text-box-align-${ alignment }`,
                    style: {
                        backgroundColor,
                        color: textColor,
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
