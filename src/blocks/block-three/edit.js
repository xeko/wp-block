import { __ } from '@wordpress/i18n';

import { 
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

import {
    ToolbarGroup, 
    ToolbarButton,
    ToolbarDropdownMenu,
} from '@wordpress/components';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const {text} = attributes;

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

            <RichText
                { ...useBlockProps() }
                onChange={(value) => setAttributes({text: value})}
                value = {text}
                placeholder = {__('入力してください。', 'block-three')}
                tagName="h4"
                // allowedFormats={['core/bold']}
            />
        </>
	);
}
