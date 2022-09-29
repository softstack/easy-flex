export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

export type Falsifiable<T> = T | false;

// CSS start

export type GlobalValue = 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

export type Deg = `${number}deg`;

export type Percent = `${number}%`;

export type Px = `${number}px`;

export type Rem = `${number}rem`;

export type Turn = `${number}turn`;

export type Vh = `${number}vh`;

export type Vw = `${number}vw`;

export type AbsoluteSize = Px | Rem | Vh | Vw;

export type Size = AbsoluteSize | Percent;

export type ElementSize = GlobalValue | Size | 'fit-content';

export type AlignItems = GlobalValue | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type AlignSelf = GlobalValue | 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type BorderStyle =
	| GlobalValue
	| 'dashed'
	| 'dotted'
	| 'double'
	| 'groove'
	| 'hidden'
	| 'inset'
	| 'none'
	| 'outset'
	| 'ridge'
	| 'solid';

export type HslName = 'hsl' | 'hsla';

export type RgbName = 'rgb' | 'rgba';

export type RgbPlain = `${number} ${number} ${number}` | `${Percent} ${Percent} ${Percent}`;

export type RgbComma = `${number}, ${number}, ${number}` | `${Percent}, ${Percent}, ${Percent}`;

export type ColorCode =
	| `#${string}`
	| `${HslName}(${number | Deg | Turn} ${Percent} ${Percent})`
	| `${HslName}(${number | Deg | Turn} ${Percent} ${Percent} / ${number | Percent})`
	| `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent})`
	| `${HslName}(${number | Deg | Turn}, ${Percent}, ${Percent}, ${number | Percent})`
	| `${RgbName}(${RgbPlain})`
	| `${RgbName}(${RgbPlain} / ${number | Percent})`
	| `${RgbName}(${RgbComma})`
	| `${RgbName}(${RgbComma}, ${number | Percent})`;

export type ColorKeyword = 'currentColor' | 'transparent';

export type ColorName =
	| 'aliceblue' // #f0f8ff
	| 'antiquewhite' // #faebd7
	| 'aqua' // #00ffff
	| 'aquamarine' // #7fffd4
	| 'azure' // #f0ffff
	| 'beige' // #f5f5dc
	| 'bisque' // #ffe4c4
	| 'black' // #000000
	| 'blanchedalmond' // #ffebcd
	| 'blue' // #0000ff
	| 'blueviolet' // #8a2be2
	| 'brown' // #a52a2a
	| 'burlywood' // #deb887
	| 'cadetblue' // #5f9ea0
	| 'chartreuse' // #7fff00
	| 'chocolate' // #d2691e
	| 'coral' // #ff7f50
	| 'cornflowerblue' // #6495ed
	| 'cornsilk' // #fff8dc
	| 'crimson' // #dc143c
	| 'cyan' // #00ffff (synonym of aqua)
	| 'darkblue' // #00008b
	| 'darkcyan' // #008b8b
	| 'darkgoldenrod' // #b8860b
	| 'darkgray' // #a9a9a9
	| 'darkgreen' // #006400
	| 'darkgrey' // #a9a9a9
	| 'darkkhaki' // #bdb76b
	| 'darkmagenta' // #8b008b
	| 'darkolivegreen' // #556b2f
	| 'darkorange' // #ff8c00
	| 'darkorchid' // #9932cc
	| 'darkred' // #8b0000
	| 'darksalmon' // #e9967a
	| 'darkseagreen' // #8fbc8f
	| 'darkslateblue' // #483d8b
	| 'darkslategray' // #2f4f4f
	| 'darkslategrey' // #2f4f4f
	| 'darkturquoise' // #00ced1
	| 'darkviolet' // #9400d3
	| 'deeppink' // #ff1493
	| 'deepskyblue' // #00bfff
	| 'dimgray' // #696969
	| 'dimgrey' // #696969
	| 'dodgerblue' // #1e90ff
	| 'firebrick' // #b22222
	| 'floralwhite' // #fffaf0
	| 'forestgreen' // #228b22
	| 'fuchsia' // #ff00ff
	| 'gainsboro' // #dcdcdc
	| 'ghostwhite' // #f8f8ff
	| 'gold' // #ffd700
	| 'goldenrod' // #daa520
	| 'gray' // #808080
	| 'green' // #008000
	| 'greenyellow' // #adff2f
	| 'grey' // #808080
	| 'honeydew' // #f0fff0
	| 'hotpink' // #ff69b4
	| 'indianred' // #cd5c5c
	| 'indigo' // #4b0082
	| 'ivory' // #fffff0
	| 'khaki' // #f0e68c
	| 'lavender' // #e6e6fa
	| 'lavenderblush' // #fff0f5
	| 'lawngreen' // #7cfc00
	| 'lemonchiffon' // #fffacd
	| 'lightblue' // #add8e6
	| 'lightcoral' // #f08080
	| 'lightcyan' // #e0ffff
	| 'lightgoldenrodyellow' // #fafad2
	| 'lightgray' // #d3d3d3
	| 'lightgreen' // #90ee90
	| 'lightgrey' // #d3d3d3
	| 'lightpink' // #ffb6c1
	| 'lightsalmon' // #ffa07a
	| 'lightseagreen' // #20b2aa
	| 'lightskyblue' // #87cefa
	| 'lightslategray' // #778899
	| 'lightslategrey' // #778899
	| 'lightsteelblue' // #b0c4de
	| 'lightyellow' // #ffffe0
	| 'lime' // #00ff00
	| 'limegreen' // #32cd32
	| 'linen' // #faf0e6
	| 'magenta' // #ff00ff (synonym of fuchsia)
	| 'maroon' // #800000
	| 'mediumaquamarine' // #66cdaa
	| 'mediumblue' // #0000cd
	| 'mediumorchid' // #ba55d3
	| 'mediumpurple' // #9370db
	| 'mediumseagreen' // #3cb371
	| 'mediumslateblue' // #7b68ee
	| 'mediumspringgreen' // #00fa9a
	| 'mediumturquoise' // #48d1cc
	| 'mediumvioletred' // #c71585
	| 'midnightblue' // #191970
	| 'mintcream' // #f5fffa
	| 'mistyrose' // #ffe4e1
	| 'moccasin' // #ffe4b5
	| 'navajowhite' // #ffdead
	| 'navy' // #000080
	| 'oldlace' // #fdf5e6
	| 'olive' // #808000
	| 'olivedrab' // #6b8e23
	| 'orange' // #ffa500
	| 'orangered' // #ff4500
	| 'orchid' // #da70d6
	| 'palegoldenrod' // #eee8aa
	| 'palegreen' // #98fb98
	| 'paleturquoise' // #afeeee
	| 'palevioletred' // #db7093
	| 'papayawhip' // #ffefd5
	| 'peachpuff' // #ffdab9
	| 'peru' // #cd853f
	| 'pink' // #ffc0cb
	| 'plum' // #dda0dd
	| 'powderblue' // #b0e0e6
	| 'purple' // #800080
	| 'rebeccapurple' // #663399
	| 'red' // #ff0000
	| 'rosybrown' // #bc8f8f
	| 'royalblue' // #4169e1
	| 'saddlebrown' // #8b4513
	| 'salmon' // #fa8072
	| 'sandybrown' // #f4a460
	| 'seagreen' // #2e8b57
	| 'seashell' // #fff5ee
	| 'sienna' // #a0522d
	| 'silver' // #c0c0c0
	| 'skyblue' // #87ceeb
	| 'slateblue' // #6a5acd
	| 'slategray' // #708090
	| 'slategrey' // #708090
	| 'snow' // #fffafa
	| 'springgreen' // #00ff7f
	| 'steelblue' // #4682b4
	| 'tan' // #d2b48c
	| 'teal' // #008080
	| 'thistle' // #d8bfd8
	| 'tomato' // #ff6347
	| 'turquoise' // #40e0d0
	| 'violet' // #ee82ee
	| 'wheat' // #f5deb3
	| 'white' // #ffffff
	| 'whitesmoke' // #f5f5f5
	| 'yellow' // #ffff00
	| 'yellowgreen'; // #9acd32

export type CssColor = ColorCode | ColorKeyword | ColorName | GlobalValue;

export type Flex = GlobalValue | AbsoluteSize | Percent | number | 'auto' | 'none';

export type FlexBasis = GlobalValue | AbsoluteSize | Percent | 'auto';

export type FlexDirection = GlobalValue | 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type CssFontWeight = GlobalValue | number | 'bold' | 'bolder' | 'lighter' | 'normal';

export type JustifyContent =
	| GlobalValue
	| 'center'
	| 'flex-end'
	| 'flex-start'
	| 'space-around'
	| 'space-between'
	| 'space-evenly';

export type CssLineHeight = GlobalValue | Percent | number | 'normal';

export type ObjectFit = GlobalValue | 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export type Overflow = GlobalValue | 'auto' | 'hidden' | 'scroll' | 'visible';

export type TextAlign =
	| GlobalValue
	| 'center'
	| 'end'
	| 'justify'
	| 'justify-all'
	| 'left'
	| 'match-parent'
	| 'right'
	| 'start';

export type WhiteSpace = GlobalValue | 'break-spaces' | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';

export type WordBreak = GlobalValue | 'break-all' | 'break-word' | 'keep-all' | 'normal';

// CSS end

// Theme start

export type ThemeSizeX =
	| '8xs'
	| '7xs'
	| '6xs'
	| '5xs'
	| '4xs'
	| '3xs'
	| 'xxs'
	| 'xs'
	| 's'
	| 'm'
	| 'l'
	| 'xl'
	| 'xxl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl';

export type ThemeSizeName =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'decline'
	| 'error'
	| 'footer'
	| 'header'
	| 'info'
	| 'modal'
	| 'rise'
	| 'warning';

export type ThemeSize = ThemeSizeX | ThemeSizeName;

export type BaseFlexElement =
	| 'article'
	| 'aside'
	| 'div'
	| 'figure'
	| 'footer'
	| 'header'
	| 'main'
	| 'nav'
	| 'section'
	| 'summary';

export type BaseGridElement =
	| 'article'
	| 'aside'
	| 'div'
	| 'figure'
	| 'footer'
	| 'header'
	| 'main'
	| 'nav'
	| 'section'
	| 'summary';

export type BorderRadius = Size | ThemeSize;

export type BorderWidth = AbsoluteSize | ThemeSize;

export type ThemeColor =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'decline'
	| 'error'
	| 'footer'
	| 'header'
	| 'info'
	| 'modal'
	| 'rise'
	| 'warning'
	| 'brand1'
	| 'brand2'
	| 'brand3'
	| 'brand4'
	| 'brand5'
	| 'brand6'
	| 'brand7'
	| 'brand8'
	| 'primaryText'
	| 'secondaryText'
	| 'tertiaryText'
	| 'declineText'
	| 'errorText'
	| 'footerText'
	| 'headerText'
	| 'infoText'
	| 'modalText'
	| 'riseText'
	| 'warningText'
	| 'text1'
	| 'text2'
	| 'text3'
	| 'text4'
	| 'text5'
	| 'text6'
	| 'text7'
	| 'text8'
	| 'primaryBackground'
	| 'secondaryBackground'
	| 'tertiaryBackground'
	| 'declineBackground'
	| 'errorBackground'
	| 'footerBackground'
	| 'headerBackground'
	| 'infoBackground'
	| 'modalBackground'
	| 'riseBackground'
	| 'warningBackground'
	| 'background1'
	| 'background2'
	| 'background3'
	| 'background4'
	| 'background5'
	| 'background6'
	| 'background7'
	| 'background8'
	| 'onPrimary'
	| 'onSecondary'
	| 'onTertiary'
	| 'onDecline'
	| 'onError'
	| 'onFooter'
	| 'onHeader'
	| 'onInfo'
	| 'onModal'
	| 'onRise'
	| 'onWarning'
	| 'onBrand1'
	| 'onBrand2'
	| 'onBrand3'
	| 'onBrand4'
	| 'onBrand5'
	| 'onBrand6'
	| 'onBrand7'
	| 'onBrand8'
	| 'primaryBorder'
	| 'secondaryBorder'
	| 'tertiaryBorder'
	| 'declineBorder'
	| 'errorBorder'
	| 'footerBorder'
	| 'headerBorder'
	| 'infoBorder'
	| 'modalBorder'
	| 'riseBorder'
	| 'warningBorder'
	| 'border1'
	| 'border2'
	| 'border3'
	| 'border4'
	| 'border5'
	| 'border6'
	| 'border7'
	| 'border8';

export type Color = CssColor | ThemeColor;

export type Distance = AbsoluteSize | ThemeSize;

export type FlipDirection = 'flip' | 'flip-reverse' | 'reverse';

export type FontFamily = ThemeSizeName;

export type FontSize = Size | ThemeSize;

export type FontStyle = 'italic' | 'normal';

export type FontWeight =
	| 'thin'
	| 'extraLight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extraBold'
	| 'black'
	| 'extraBlack';

export type Height = ElementSize | ThemeSize;

export type LineHeight = CssLineHeight | ThemeSize;

export type StyleElement =
	| 'b'
	| 'cite'
	| 'code'
	| 'em'
	| 'i'
	| 'kbd'
	| 'mark'
	| 's'
	| 'samp'
	| 'small'
	| 'span'
	| 'strong'
	| 'sub'
	| 'sup'
	| 'u'
	| 'var';

export type TextDecoration = 'none' | 'underline';

export type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type ViewportThreshold = ThemeSizeX | number;

export type Width = ElementSize | ThemeSize;

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
		height: Record<ThemeSize, ElementSize>;
		width: Record<ThemeSize, ElementSize>;
	};
	viewport: {
		defaultThreshold: number;
		threshold: Record<ThemeSizeX, number>;
	};
}

export type PartialEasyFlexTheme = DeepPartial<EasyFlexTheme>;

// Theme end
