export declare type IDeepPartial<T> = T extends object ? {
    [P in keyof T]?: IDeepPartial<T[P]>;
} : T;
export declare type IAlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type IAlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type IColorCode = `#${string}` | `hsl(${number}, ${number}%, ${number}%)` | `hsl(${number}deg, ${number}%, ${number}%)` | `hsl(${number}turn, ${number}%, ${number}%)` | `hsl(${number}, ${number}%, ${number}%, ${number})` | `hsl(${number}deg, ${number}%, ${number}%, ${number})` | `hsl(${number}turn, ${number}%, ${number}%, ${number})` | `hsl(${number}, ${number}%, ${number}%, ${number}%)` | `hsl(${number}deg, ${number}%, ${number}%, ${number}%)` | `hsl(${number}turn, ${number}%, ${number}%, ${number}%)` | `hsl(${number} ${number}% ${number}%)` | `hsl(${number}deg ${number}% ${number}%)` | `hsl(${number}turn ${number}% ${number}%)` | `hsl(${number} ${number}% ${number}% / ${number})` | `hsl(${number}deg ${number}% ${number}% / ${number})` | `hsl(${number}turn ${number}% ${number}% / ${number})` | `hsl(${number} ${number}% ${number}% / ${number}%)` | `hsl(${number}deg ${number}% ${number}% / ${number}%)` | `hsl(${number}turn ${number}% ${number}% / ${number}%)` | `hsla(${number}, ${number}%, ${number}%)` | `hsla(${number}deg, ${number}%, ${number}%)` | `hsla(${number}turn, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})` | `hsla(${number}deg, ${number}%, ${number}%, ${number})` | `hsla(${number}turn, ${number}%, ${number}%, ${number})` | `hsla(${number}, ${number}%, ${number}%, ${number}%)` | `hsla(${number}deg, ${number}%, ${number}%, ${number}%)` | `hsla(${number}turn, ${number}%, ${number}%, ${number}%)` | `hsla(${number} ${number}% ${number}%)` | `hsla(${number}deg ${number}% ${number}%)` | `hsla(${number}turn ${number}% ${number}%)` | `hsla(${number} ${number}% ${number}% / ${number})` | `hsla(${number}deg ${number}% ${number}% / ${number})` | `hsla(${number}turn ${number}% ${number}% / ${number})` | `hsla(${number} ${number}% ${number}% / ${number}%)` | `hsla(${number}deg ${number}% ${number}% / ${number}%)` | `hsla(${number}turn ${number}% ${number}% / ${number}%)` | `rgb(${number}, ${number}, ${number})` | `rgb(${number}%, ${number}%, ${number}%)` | `rgb(${number}, ${number}, ${number}, ${number})` | `rgb(${number}, ${number}, ${number}, ${number}%)` | `rgb(${number}%, ${number}%, ${number}%, ${number})` | `rgb(${number}%, ${number}%, ${number}%, ${number}%)` | `rgb(${number} ${number} ${number})` | `rgb(${number}% ${number}% ${number}%)` | `rgb(${number} ${number} ${number} / ${number})` | `rgb(${number} ${number} ${number} / ${number}%)` | `rgb(${number}% ${number}% ${number}% / ${number})` | `rgb(${number}% ${number}% ${number}% / ${number}%)` | `rgba(${number}, ${number}, ${number})` | `rgba(${number}%, ${number}%, ${number}%)` | `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number}%)` | `rgba(${number}%, ${number}%, ${number}%, ${number})` | `rgba(${number}%, ${number}%, ${number}%, ${number}%)` | `rgba(${number} ${number} ${number})` | `rgba(${number}% ${number}% ${number}%)` | `rgba(${number} ${number} ${number} / ${number})` | `rgba(${number} ${number} ${number} / ${number}%)` | `rgba(${number}% ${number}% ${number}% / ${number})` | `rgba(${number}% ${number}% ${number}% / ${number}%)`;
export declare type IColorKeyword = 'currentColor' | 'inherit' | 'transparent';
export declare type IColorName = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
export declare type IFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
export declare type ICssFontWeight = 'bold' | 'bolder' | 'lighter' | 'normal';
export declare type IJustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';
export declare type IObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export declare type IOverflow = 'auto' | 'hidden' | 'scroll' | 'visible';
export declare type IPercent = `${number}%`;
export declare type IPx = `${number}px`;
export declare type IRem = `${number}rem`;
export declare type ITextAlign = 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';
export declare type IVh = `${number}vh`;
export declare type IVw = `${number}vw`;
export declare type IWordBreak = 'break-all' | 'break-word' | 'keep-all' | 'normal';
export declare type ICssColor = IColorCode | IColorKeyword | IColorName;
export declare type IAbsoluteSize = IPx | IRem | IVh | IVw;
export declare type ISize = IPercent | IAbsoluteSize;
export declare type ICssLineHeight = 'normal' | IPercent | number;
export declare type IThemeSize = '8xs' | '7xs' | '6xs' | '5xs' | '4xs' | '3xs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
export declare type IBaseFlexElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type IBorderRadius = IThemeSize;
export declare type IBorderWidth = IThemeSize;
export declare type IThemeColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'warning' | 'error' | 'header' | 'footer' | 'modal' | 'primaryText' | 'secondaryText' | 'tertiaryText' | 'quaternaryText' | 'quinaryText' | 'senaryText' | 'warningText' | 'errorText' | 'headerText' | 'footerText' | 'modalText' | 'primaryBackground' | 'secondaryBackground' | 'tertiaryBackground' | 'quaternaryBackground' | 'quinaryBackground' | 'senaryBackground' | 'warningBackground' | 'errorBackground' | 'headerBackground' | 'footerBackground' | 'modalBackground' | 'onPrimary' | 'onSecondary' | 'onTertiary' | 'onQuaternary' | 'onQuinary' | 'onSenary' | 'onWarning' | 'onError' | 'onHeader' | 'onFooter' | 'onModal' | 'primaryBorder' | 'secondaryBorder' | 'tertiaryBorder' | 'quaternaryBorder' | 'quinaryBorder' | 'senaryBorder' | 'warningBorder' | 'errorBorder' | 'headerBorder' | 'footerBorder' | 'modalBorder';
export declare type IColor = IThemeColor | ICssColor;
export declare type IDistance = IThemeSize;
export declare type IFlipDirection = 'flip' | 'flip-reverse' | 'reverse';
export declare type IFontFamily = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'warning' | 'error' | 'header' | 'footer' | 'modal';
export declare type IFontSize = IThemeSize;
export declare type IFontStyle = 'italic' | 'normal';
export declare type IFontWeight = 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black' | 'extraBlack';
export declare type IHeight = IThemeSize;
export declare type ILineHeight = IThemeSize;
export declare type IStyleElement = 'b' | 'cite' | 'code' | 'em' | 'i' | 'kbd' | 'mark' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'u' | 'var';
export declare type ITextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export declare type IViewportThreshold = IThemeSize;
export declare type IWidth = IThemeSize;
export interface IEasyFlexTheme {
    border: {
        radius: Record<IThemeSize, IAbsoluteSize>;
        width: Record<IThemeSize, IAbsoluteSize>;
    };
    color: Record<IThemeColor, ICssColor>;
    distance: Record<IThemeSize, IAbsoluteSize>;
    font: {
        family: Record<IFontFamily, string>;
        lineHeight: Record<IThemeSize, ICssLineHeight>;
        size: Record<IThemeSize, ISize>;
        weight: Record<IFontWeight, ICssFontWeight | number>;
    };
    modal: {
        backgroundColor: ICssColor;
        blur: IAbsoluteSize;
        blurElementId: string;
        containerElementId: string;
    };
    size: {
        height: Record<IThemeSize, IAbsoluteSize>;
        width: Record<IThemeSize, IAbsoluteSize>;
    };
    viewport: {
        fallbackThreshold: number;
        threshold: Record<IThemeSize, number>;
    };
}
export declare type IPartialEasyFlexTheme = IDeepPartial<IEasyFlexTheme>;
