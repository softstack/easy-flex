export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare type Falsifiable<T> = T | false;
export declare type GlobalValue = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
export declare type Deg = `${number}deg`;
export declare type Percent = `${number}%`;
export declare type Px = `${number}px`;
export declare type Rem = `${number}rem`;
export declare type Turn = `${number}turn`;
export declare type Vh = `${number}vh`;
export declare type Vw = `${number}vw`;
export declare type AbsoluteSize = Px | Rem | Vh | Vw;
export declare type Size = AbsoluteSize | Percent;
export declare type ElementSize = GlobalValue | Size | 'fit-content';
export declare type AlignItems = GlobalValue | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type AlignSelf = GlobalValue | 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export declare type BorderStyle = GlobalValue | 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'inset' | 'none' | 'outset' | 'ridge' | 'solid';
export declare type HslName = 'hsl' | 'hsla';
export declare type RgbName = 'rgb' | 'rgba';
export declare type RgbPlain = `${number} ${number} ${number}` | `${Percent} ${Percent} ${Percent}`;
export declare type RgbComma = `${number}, ${number}, ${number}` | `${Percent}, ${Percent}, ${Percent}`;
export declare type ColorCode = `#${string}` | `${HslName}(${number | Deg | Turn} ${Percent} ${Percent})` | `${HslName}(${number | Deg | Turn} ${Percent} ${Percent} / ${number | Percent})` | `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent})` | `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent}, ${number | Percent})` | `${RgbName}(${RgbPlain})` | `${RgbName}(${RgbPlain} / ${number | Percent})` | `${RgbName}(${RgbComma})` | `${RgbName}(${RgbComma}, ${number | Percent})`;
export declare type ColorKeyword = 'currentColor' | 'transparent';
export declare type ColorName = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
export declare type CssColor = ColorCode | ColorKeyword | ColorName | GlobalValue;
export declare type Flex = GlobalValue | AbsoluteSize | Percent | number | 'auto' | 'none';
export declare type FlexBasis = GlobalValue | AbsoluteSize | Percent | 'auto';
export declare type FlexDirection = GlobalValue | 'column' | 'column-reverse' | 'row' | 'row-reverse';
export declare type CssFontWeight = GlobalValue | number | 'bold' | 'bolder' | 'lighter' | 'normal';
export declare type JustifyContent = GlobalValue | 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';
export declare type CssLineHeight = GlobalValue | Percent | number | 'normal';
export declare type ObjectFit = GlobalValue | 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export declare type Overflow = GlobalValue | 'auto' | 'hidden' | 'scroll' | 'visible';
export declare type TextAlign = GlobalValue | 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';
export declare type WhiteSpace = GlobalValue | 'break-spaces' | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
export declare type WordBreak = GlobalValue | 'break-all' | 'break-word' | 'keep-all' | 'normal';
export declare type CustomName = `_${string}`;
export declare type ThemeSizeX = '8xs' | '7xs' | '6xs' | '5xs' | '4xs' | '3xs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
export declare type ThemeSize<T extends CustomName> = ThemeSizeX | T;
export declare type BaseFlexElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type BaseGridElement = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section' | 'summary';
export declare type BorderRadius = Size | ThemeSizeX;
export declare type BorderWidth = AbsoluteSize | ThemeSizeX;
export declare type Color<T extends CustomName> = CssColor | T;
export declare type Distance = AbsoluteSize | ThemeSizeX;
export declare type FlipDirection = 'flip' | 'flip-reverse' | 'reverse';
export declare type FontFamily<T extends CustomName> = T;
export declare type FontSize = Size | ThemeSizeX;
export declare type FontStyle = 'italic' | 'normal';
export declare type FontWeight = 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black' | 'extraBlack';
export declare type Height<CustomHeight extends CustomName> = ElementSize | ThemeSize<CustomHeight>;
export declare type LineHeight = CssLineHeight | ThemeSizeX;
export declare type StyleElement = 'b' | 'cite' | 'code' | 'em' | 'i' | 'kbd' | 'mark' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'u' | 'var';
export declare type TextDecoration = 'none' | 'underline';
export declare type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export declare type ViewportThreshold = ThemeSizeX | number;
export declare type Width<CustomWidth extends CustomName> = ElementSize | ThemeSize<CustomWidth>;
export interface EasyFlexTheme<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> {
    border: {
        defaultStyle: BorderStyle;
        radius: Record<ThemeSizeX, AbsoluteSize>;
        width: Record<ThemeSizeX, AbsoluteSize>;
    };
    color: Record<CustomColor, CssColor>;
    distance: Record<ThemeSizeX, AbsoluteSize>;
    font: {
        family: Record<FontFamily<CustomFontFamily>, string>;
        lineHeight: Record<ThemeSizeX, CssLineHeight>;
        size: Record<ThemeSizeX, Size>;
        weight: Record<FontWeight, CssFontWeight>;
    };
    modal: {
        backgroundColor: CssColor;
        blur: AbsoluteSize;
        blurElementId: string;
        containerElementId: string;
    };
    size: {
        height: Record<ThemeSize<CustomHeight>, ElementSize>;
        width: Record<ThemeSize<CustomWidth>, ElementSize>;
    };
    viewport: {
        defaultThreshold: number;
        threshold: Record<ThemeSizeX, number>;
    };
}
export declare type PartialEasyFlexTheme<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> = DeepPartial<EasyFlexTheme<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>>;
