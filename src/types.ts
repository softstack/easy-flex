export type IDeepPartial<T> = T extends object
	? {
			[P in keyof T]?: IDeepPartial<T[P]>;
	  }
	: T;

export type IJustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';

export type IAlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type IAlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type IFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type IWordBreak = 'break-all' | 'break-word' | 'keep-all' | 'normal';

export type ITextAlign = 'center' | 'end' | 'justify' | 'justify-all' | 'left' | 'match-parent' | 'right' | 'start';

export type IFontStyle = 'italic' | 'normal';

export type IFlipDirection = 'flip' | 'reverse' | 'flip-reverse';

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

export type ITextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type IDistance =
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

export type IFontSize =
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

export type IFontWeight = 'normal' | 'semibold' | 'bold';

export type IColor =
	| 'inherit'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'quaternary'
	| 'quinary'
	| 'senary'
	| 'primaryText'
	| 'secondaryText'
	| 'tertiaryText'
	| 'quaternaryText'
	| 'quinaryText'
	| 'senaryText'
	| 'primaryBackground'
	| 'secondaryBackground'
	| 'tertiaryBackground'
	| 'quaternaryBackground'
	| 'quinaryBackground'
	| 'senaryBackground'
	| 'warningBackground'
	| 'errorBackground'
	| 'onPrimary'
	| 'onSecondary'
	| 'onTertiary'
	| 'onQuaternary'
	| 'onQuinary'
	| 'onSenary'
	| 'onWarning'
	| 'onError';

export interface IEasyFlexTheme {
	flipDirection: boolean;
	distance: {
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
	};
	fontSize: {
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
	};
	fontWeight: {
		normal: number | string;
		semibold: number | string;
		bold: number | string;
	};
	color: {
		primary: string;
		secondary: string;
		tertiary: string;
		quaternary: string;
		quinary: string;
		senary: string;
		primaryText: string;
		secondaryText: string;
		tertiaryText: string;
		quaternaryText: string;
		quinaryText: string;
		senaryText: string;
		primaryBackground: string;
		secondaryBackground: string;
		tertiaryBackground: string;
		quaternaryBackground: string;
		quinaryBackground: string;
		senaryBackground: string;
		warningBackground: string;
		errorBackground: string;
		onPrimary: string;
		onSecondary: string;
		onTertiary: string;
		onQuaternary: string;
		onQuinary: string;
		onSenary: string;
		onWarning: string;
		onError: string;
	};
}

export type IPartialEasyFlexTheme = IDeepPartial<IEasyFlexTheme>;
