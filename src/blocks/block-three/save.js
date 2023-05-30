import {
    useBlockProps,
    RichText,
    getColorClassName,
} from '@wordpress/block-editor';
// classNameを取得するのに必要
// npm i classnames
import classnames from 'classnames';

export default function save( { attributes } ) {
    // custom~はカラーパレットの自由選択で選ばれたとき
    const {
        text,
        alignment,
        backgroundColor,
        textColor,
        customBackgroundColor,
        customTextColor,
    } = attributes;

    // backgroundClassは指定色ならクラスあり、自由選択で選ばれたときはclass名はundefinedになる
    const backgroundClass = getColorClassName(
        'background-color',
        backgroundColor
    );
    const textClass = getColorClassName( 'color', textColor );

    // classnamesは左辺がtrueなら、右辺のクラスを追加できる
    // 追加したい要素がすでにclassNameが指定されている場合、第一引数に指定して、第二引数にclassnamesで判定したいものをいれる。
    const classes = classnames( `text-box-align-${ alignment }`, {
        [ backgroundClass ]: backgroundClass,
        [ textClass ]: textClass,
    } );
    return (
        // RichTextは編集可能なものだけどsave画面では不要なのでContentにする
        <RichText.Content
            { ...useBlockProps.save( {
                className: classes,
                style: {
                    backgroundColor: backgroundClass
                        ? undefined
                        : customBackgroundColor,
                    color: textColor ? undefined : customTextColor,
                },
            } ) }
            tagName="h4"
            value={ text }
        />
    );
}
