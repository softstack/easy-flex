export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare type Deg = `${number}deg`;
export declare type Percent = `${number}%`;
export declare type Px = `${number}px`;
export declare type Rem = `${number}rem`;
export declare type Turn = `${number}turn`;
export declare type Vh = `${number}vh`;
export declare type Vw = `${number}vw`;
export declare type AbsoluteSize = Px | Rem | Vh | Vw;
export declare type Size = AbsoluteSize | Percent;
export declare type AlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type AlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type BorderStyle = 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'inset' | 'none' | 'outset' | 'ridge' | 'solid';
export declare type HslName = 'hsl' | 'hsla';
export declare type RgbName = 'rgb' | 'rgba';
export declare type RgbPlain = `${number} ${number} ${number}` | `${Percent} ${Percent} ${Percent}`;
export declare type RgbComma = `${number}, ${number}, ${number}` | `${Percent}, ${Percent}, ${Percent}`;
export declare type ColorCode = `#${string}` | `${HslName}(${number | Deg | Turn} ${Percent} ${Percent})` | `${HslName}(${number | Deg | Turn} ${Percent} ${Percent} / ${number | Percent})` | `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent})` | `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent}, ${number | Percent})` | `${RgbName}(${RgbPlain})` | `${RgbName}(${RgbPlain} / ${number | Percent})` | `${RgbName}(${RgbComma})` | `${RgbName}(${RgbComma}, ${number | Percent})`;
export declare type ColorKeyword = 'currentColor' | 'inherit' | 'transparent';
export declare type ColorName = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
export declare type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
export declare type CssFontWeight = number | 'bold' | 'bolder' | 'lighter' | 'normal';
export declare type JustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';
export declare type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export declare type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible';
export declare type TextAlign = 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';
export declare type WordBreak = 'break-all' | 'break-word' | 'keep-all' | 'normal';
export declare type CssColor = ColorCode | ColorKeyword | ColorName;
export declare type Flex = AbsoluteSize | Percent | number | 'auto' | 'none';
export declare type FlexBasis = AbsoluteSize | Percent | 'auto';
export declare type ElementSize = Size | 'fit-content';
export declare type CssLineHeight = Percent | number | 'normal';
export declare type ThemeSize = '8xs' | '7xs' | '6xs' | '5xs' | '4xs' | '3xs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
export declare type BaseFlexElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type BaseGridElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type BorderRadius = Size | ThemeSize;
export declare type BorderWidth = AbsoluteSize | ThemeSize;
export declare type ThemeColor = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'error' | 'header' | 'footer' | 'modal' | 'rise' | 'decline' | 'brand1' | 'brand2' | 'brand3' | 'brand4' | 'brand5' | 'brand6' | 'brand7' | 'brand8' | 'primaryText' | 'secondaryText' | 'tertiaryText' | 'warningText' | 'errorText' | 'headerText' | 'footerText' | 'modalText' | 'riseText' | 'declineText' | 'text1' | 'text2' | 'text3' | 'text4' | 'text5' | 'text6' | 'text7' | 'text8' | 'primaryBackground' | 'secondaryBackground' | 'tertiaryBackground' | 'warningBackground' | 'errorBackground' | 'headerBackground' | 'footerBackground' | 'modalBackground' | 'riseBackground' | 'declineBackground' | 'background1' | 'background2' | 'background3' | 'background4' | 'background5' | 'background6' | 'background7' | 'background8' | 'onPrimary' | 'onSecondary' | 'onTertiary' | 'onWarning' | 'onError' | 'onHeader' | 'onFooter' | 'onModal' | 'onRise' | 'onDecline' | 'onBrand1' | 'onBrand2' | 'onBrand3' | 'onBrand4' | 'onBrand5' | 'onBrand6' | 'onBrand7' | 'onBrand8' | 'primaryBorder' | 'secondaryBorder' | 'tertiaryBorder' | 'warningBorder' | 'errorBorder' | 'headerBorder' | 'footerBorder' | 'modalBorder' | 'riseBorder' | 'declineBorder' | 'border1' | 'border2' | 'border3' | 'border4' | 'border5' | 'border6' | 'border7' | 'border8';
export declare type Color = CssColor | ThemeColor;
export declare type Distance = AbsoluteSize | ThemeSize;
export declare type FlipDirection = 'flip' | 'flip-reverse' | 'reverse';
export declare type FontFamily = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary' | 'warning' | 'error' | 'header' | 'footer' | 'modal';
export declare type FontSize = Size | ThemeSize;
export declare type FontStyle = 'italic' | 'normal';
export declare type FontWeight = 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black' | 'extraBlack';
export declare type Height = ElementSize | ThemeSize;
export declare type LineHeight = CssLineHeight | ThemeSize;
export declare type StyleElement = 'b' | 'cite' | 'code' | 'em' | 'i' | 'kbd' | 'mark' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'u' | 'var';
export declare type TextDecoration = 'none' | 'underline';
export declare type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export declare type ViewportThreshold = ThemeSize | number;
export declare type Width = ElementSize | ThemeSize;
export interface EasyFlexTheme {
    border: {
        defaultStyle: BorderStyle;
        radius: Record<ThemeSize, AbsoluteSize>;
        width: Record<ThemeSize, AbsoluteSize>;
    };
    color: Record<ThemeColor, CssColor>;
    distance: Record<ThemeSize, AbsoluteSize>;
    font: {
        family: Record<FontFamily, string>;
        lineHeight: Record<ThemeSize, CssLineHeight>;
        size: Record<ThemeSize, Size>;
        weight: Record<FontWeight, CssFontWeight>;
    };
    modal: {
        backgroundColor: CssColor;
        blur: AbsoluteSize;
        blurElementId: string;
        containerElementId: string;
    };
    size: {
        height: Record<ThemeSize, AbsoluteSize>;
        width: Record<ThemeSize, AbsoluteSize>;
    };
    viewport: {
        defaultThreshold: number;
        threshold: Record<ThemeSize, number>;
    };
}
export declare type PartialEasyFlexTheme = DeepPartial<EasyFlexTheme>;
