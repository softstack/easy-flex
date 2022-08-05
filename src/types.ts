export type IDeepPartial<T> = T extends object
	? {
			[P in keyof T]?: IDeepPartial<T[P]>;
	  }
	: T;

// Base start

export type IBaseSize =
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

export interface IBaseSizeNumber {
	'8xs': number;
	'7xs': number;
	'6xs': number;
	'5xs': number;
	'4xs': number;
	'3xs': number;
	xxs: number;
	xs: number;
	s: number;
	m: number;
	l: number;
	xl: number;
	xxl: number;
	'3xl': number;
	'4xl': number;
	'5xl': number;
	'6xl': number;
	'7xl': number;
	'8xl': number;
}

export type ISizeType = 'px' | 'rem';

// Base end

// CSS start

export type IAlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type IAlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type IFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type IJustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';

export type IOverflow = 'auto' | 'hidden' | 'scroll' | 'visible';

export type ITextAlign = 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';

export type IWordBreak = 'break-all' | 'break-word' | 'keep-all' | 'normal';

// CSS end

// Custom start

export type IBaseFlexElement =
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

export type IBorderRadius = IBaseSize;

export type IBorderWidth = IBaseSize;

export type IBaseColor =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'quaternary'
	| 'quinary'
	| 'senary'
	| 'warning'
	| 'error'
	| 'header'
	| 'footer'
	| 'modal'
	| 'primaryText'
	| 'secondaryText'
	| 'tertiaryText'
	| 'quaternaryText'
	| 'quinaryText'
	| 'senaryText'
	| 'warningText'
	| 'errorText'
	| 'headerText'
	| 'footerText'
	| 'modalText'
	| 'primaryBackground'
	| 'secondaryBackground'
	| 'tertiaryBackground'
	| 'quaternaryBackground'
	| 'quinaryBackground'
	| 'senaryBackground'
	| 'warningBackground'
	| 'errorBackground'
	| 'headerBackground'
	| 'footerBackground'
	| 'modalBackground'
	| 'onPrimary'
	| 'onSecondary'
	| 'onTertiary'
	| 'onQuaternary'
	| 'onQuinary'
	| 'onSenary'
	| 'onWarning'
	| 'onError'
	| 'onHeader'
	| 'onFooter'
	| 'onModal'
	| 'primaryBorder'
	| 'secondaryBorder'
	| 'tertiaryBorder'
	| 'quaternaryBorder'
	| 'senaryBorder'
	| 'warningBorder'
	| 'errorBorder'
	| 'headerBorder'
	| 'footerBorder'
	| 'modalBorder';

export type IColorCode =
	| `#${string}`
	| `hsl(${number}, ${number}%, ${number}%)`
	| `hsla(${number}, ${number}%, ${number}%, ${number})`
	| `rgb(${number}, ${number}, ${number})`
	| `rgb(${number}%, ${number}%, ${number}%)`
	| `rgb(${number} ${number} ${number})`
	| `rgb(${number}% ${number}% ${number}%)`
	| `rgb(${number}, ${number}, ${number}, ${number})`
	| `rgb(${number}, ${number}, ${number}, ${number}%)`
	| `rgb(${number}%, ${number}%, ${number}%, ${number})`
	| `rgb(${number}%, ${number}%, ${number}%, ${number}%)`
	| `rgb(${number} ${number} ${number} / ${number})`
	| `rgb(${number} ${number} ${number} / ${number}%)`
	| `rgb(${number}% ${number}% ${number}% / ${number})`
	| `rgb(${number}% ${number}% ${number}% / ${number}%)`
	| `rgba(${number}, ${number}, ${number})`
	| `rgba(${number}%, ${number}%, ${number}%)`
	| `rgba(${number} ${number} ${number})`
	| `rgba(${number}% ${number}% ${number}%)`
	| `rgba(${number}, ${number}, ${number}, ${number})`
	| `rgba(${number}, ${number}, ${number}, ${number}%)`
	| `rgba(${number}%, ${number}%, ${number}%, ${number})`
	| `rgba(${number}%, ${number}%, ${number}%, ${number}%)`
	| `rgba(${number} ${number} ${number} / ${number})`
	| `rgba(${number} ${number} ${number} / ${number}%)`
	| `rgba(${number}% ${number}% ${number}% / ${number})`
	| `rgba(${number}% ${number}% ${number}% / ${number}%)`;

export type IColorKeyword = 'currentColor' | 'inherit' | 'transparent';

export type IColorName =
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

export type IColor = IBaseColor | IColorCode | IColorKeyword | IColorName;

export type IDistance = IBaseSize;

export type IFlipDirection = 'flip' | 'flip-reverse' | 'reverse';

export type IFontSize = IBaseSize;

export type IFontStyle = 'italic' | 'normal';

export type IFontWeight = 'bold' | 'normal' | 'semibold';

export type IHeight = IBaseSize;

export type IStyleElement =
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

export type ITextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type IViewportThreshold = IBaseSize;

export type IWidth = IBaseSize;

// Custom end

export interface IEasyFlexTheme {
	border: {
		radius: IBaseSizeNumber;
		width: IBaseSizeNumber;
	};
	color: {
		primary: IColorCode | IColorKeyword | IColorName;
		secondary: IColorCode | IColorKeyword | IColorName;
		tertiary: IColorCode | IColorKeyword | IColorName;
		quaternary: IColorCode | IColorKeyword | IColorName;
		quinary: IColorCode | IColorKeyword | IColorName;
		senary: IColorCode | IColorKeyword | IColorName;
		warning: IColorCode | IColorKeyword | IColorName;
		error: IColorCode | IColorKeyword | IColorName;
		header: IColorCode | IColorKeyword | IColorName;
		footer: IColorCode | IColorKeyword | IColorName;
		modal: IColorCode | IColorKeyword | IColorName;
		primaryText: IColorCode | IColorKeyword | IColorName;
		secondaryText: IColorCode | IColorKeyword | IColorName;
		tertiaryText: IColorCode | IColorKeyword | IColorName;
		quaternaryText: IColorCode | IColorKeyword | IColorName;
		quinaryText: IColorCode | IColorKeyword | IColorName;
		senaryText: IColorCode | IColorKeyword | IColorName;
		warningText: IColorCode | IColorKeyword | IColorName;
		errorText: IColorCode | IColorKeyword | IColorName;
		headerText: IColorCode | IColorKeyword | IColorName;
		footerText: IColorCode | IColorKeyword | IColorName;
		modalText: IColorCode | IColorKeyword | IColorName;
		primaryBackground: IColorCode | IColorKeyword | IColorName;
		secondaryBackground: IColorCode | IColorKeyword | IColorName;
		tertiaryBackground: IColorCode | IColorKeyword | IColorName;
		quaternaryBackground: IColorCode | IColorKeyword | IColorName;
		quinaryBackground: IColorCode | IColorKeyword | IColorName;
		senaryBackground: IColorCode | IColorKeyword | IColorName;
		warningBackground: IColorCode | IColorKeyword | IColorName;
		errorBackground: IColorCode | IColorKeyword | IColorName;
		headerBackground: IColorCode | IColorKeyword | IColorName;
		footerBackground: IColorCode | IColorKeyword | IColorName;
		modalBackground: IColorCode | IColorKeyword | IColorName;
		onPrimary: IColorCode | IColorKeyword | IColorName;
		onSecondary: IColorCode | IColorKeyword | IColorName;
		onTertiary: IColorCode | IColorKeyword | IColorName;
		onQuaternary: IColorCode | IColorKeyword | IColorName;
		onQuinary: IColorCode | IColorKeyword | IColorName;
		onSenary: IColorCode | IColorKeyword | IColorName;
		onWarning: IColorCode | IColorKeyword | IColorName;
		onError: IColorCode | IColorKeyword | IColorName;
		onHeader: IColorCode | IColorKeyword | IColorName;
		onFooter: IColorCode | IColorKeyword | IColorName;
		onModal: IColorCode | IColorKeyword | IColorName;
		primaryBorder: IColorCode | IColorKeyword | IColorName;
		secondaryBorder: IColorCode | IColorKeyword | IColorName;
		tertiaryBorder: IColorCode | IColorKeyword | IColorName;
		quaternaryBorder: IColorCode | IColorKeyword | IColorName;
		quinaryBorder: IColorCode | IColorKeyword | IColorName;
		senaryBorder: IColorCode | IColorKeyword | IColorName;
		warningBorder: IColorCode | IColorKeyword | IColorName;
		errorBorder: IColorCode | IColorKeyword | IColorName;
		headerBorder: IColorCode | IColorKeyword | IColorName;
		footerBorder: IColorCode | IColorKeyword | IColorName;
		modalBorder: IColorCode | IColorKeyword | IColorName;
	};
	distance: IBaseSizeNumber;
	font: {
		sizeType: ISizeType;
		size: IBaseSizeNumber;
		weight: {
			normal: number | string;
			semibold: number | string;
			bold: number | string;
		};
	};
	modal: {
		backgroundColor: string;
		blur: number;
		blurElementId: string;
		containerElementId: string;
	};
	size: {
		height: IBaseSizeNumber;
		width: IBaseSizeNumber;
	};
	viewport: {
		fallbackThreshold: number;
		threshold: IBaseSizeNumber;
	};
}

export type IPartialEasyFlexTheme = IDeepPartial<IEasyFlexTheme>;
