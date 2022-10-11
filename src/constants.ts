import { createContext } from 'react';
import { EasyFlexTheme } from './types';

export const globalValues = ['inherit', 'initial', 'revert', 'revert-layer', 'unset'];

export const colorKeywords = ['currentColor', 'transparent'];

export const colorNames = [
	'aliceblue', // #f0f8ff
	'antiquewhite', // #faebd7
	'aqua', // #00ffff
	'aquamarine', // #7fffd4
	'azure', // #f0ffff
	'beige', // #f5f5dc
	'bisque', // #ffe4c4
	'black', // #000000
	'blanchedalmond', // #ffebcd
	'blue', // #0000ff
	'blueviolet', // #8a2be2
	'brown', // #a52a2a
	'burlywood', // #deb887
	'cadetblue', // #5f9ea0
	'chartreuse', // #7fff00
	'chocolate', // #d2691e
	'coral', // #ff7f50
	'cornflowerblue', // #6495ed
	'cornsilk', // #fff8dc
	'crimson', // #dc143c
	'cyan', // #00ffff (synonym of aqua)
	'darkblue', // #00008b
	'darkcyan', // #008b8b
	'darkgoldenrod', // #b8860b
	'darkgray', // #a9a9a9
	'darkgreen', // #006400
	'darkgrey', // #a9a9a9
	'darkkhaki', // #bdb76b
	'darkmagenta', // #8b008b
	'darkolivegreen', // #556b2f
	'darkorange', // #ff8c00
	'darkorchid', // #9932cc
	'darkred', // #8b0000
	'darksalmon', // #e9967a
	'darkseagreen', // #8fbc8f
	'darkslateblue', // #483d8b
	'darkslategray', // #2f4f4f
	'darkslategrey', // #2f4f4f
	'darkturquoise', // #00ced1
	'darkviolet', // #9400d3
	'deeppink', // #ff1493
	'deepskyblue', // #00bfff
	'dimgray', // #696969
	'dimgrey', // #696969
	'dodgerblue', // #1e90ff
	'firebrick', // #b22222
	'floralwhite', // #fffaf0
	'forestgreen', // #228b22
	'fuchsia', // #ff00ff
	'gainsboro', // #dcdcdc
	'ghostwhite', // #f8f8ff
	'gold', // #ffd700
	'goldenrod', // #daa520
	'gray', // #808080
	'green', // #008000
	'greenyellow', // #adff2f
	'grey', // #808080
	'honeydew', // #f0fff0
	'hotpink', // #ff69b4
	'indianred', // #cd5c5c
	'indigo', // #4b0082
	'ivory', // #fffff0
	'khaki', // #f0e68c
	'lavender', // #e6e6fa
	'lavenderblush', // #fff0f5
	'lawngreen', // #7cfc00
	'lemonchiffon', // #fffacd
	'lightblue', // #add8e6
	'lightcoral', // #f08080
	'lightcyan', // #e0ffff
	'lightgoldenrodyellow', // #fafad2
	'lightgray', // #d3d3d3
	'lightgreen', // #90ee90
	'lightgrey', // #d3d3d3
	'lightpink', // #ffb6c1
	'lightsalmon', // #ffa07a
	'lightseagreen', // #20b2aa
	'lightskyblue', // #87cefa
	'lightslategray', // #778899
	'lightslategrey', // #778899
	'lightsteelblue', // #b0c4de
	'lightyellow', // #ffffe0
	'lime', // #00ff00
	'limegreen', // #32cd32
	'linen', // #faf0e6
	'magenta', // #ff00ff (synonym of fuchsia)
	'maroon', // #800000
	'mediumaquamarine', // #66cdaa
	'mediumblue', // #0000cd
	'mediumorchid', // #ba55d3
	'mediumpurple', // #9370db
	'mediumseagreen', // #3cb371
	'mediumslateblue', // #7b68ee
	'mediumspringgreen', // #00fa9a
	'mediumturquoise', // #48d1cc
	'mediumvioletred', // #c71585
	'midnightblue', // #191970
	'mintcream', // #f5fffa
	'mistyrose', // #ffe4e1
	'moccasin', // #ffe4b5
	'navajowhite', // #ffdead
	'navy', // #000080
	'oldlace', // #fdf5e6
	'olive', // #808000
	'olivedrab', // #6b8e23
	'orange', // #ffa500
	'orangered', // #ff4500
	'orchid', // #da70d6
	'palegoldenrod', // #eee8aa
	'palegreen', // #98fb98
	'paleturquoise', // #afeeee
	'palevioletred', // #db7093
	'papayawhip', // #ffefd5
	'peachpuff', // #ffdab9
	'peru', // #cd853f
	'pink', // #ffc0cb
	'plum', // #dda0dd
	'powderblue', // #b0e0e6
	'purple', // #800080
	'rebeccapurple', // #663399
	'red', // #ff0000
	'rosybrown', // #bc8f8f
	'royalblue', // #4169e1
	'saddlebrown', // #8b4513
	'salmon', // #fa8072
	'sandybrown', // #f4a460
	'seagreen', // #2e8b57
	'seashell', // #fff5ee
	'sienna', // #a0522d
	'silver', // #c0c0c0
	'skyblue', // #87ceeb
	'slateblue', // #6a5acd
	'slategray', // #708090
	'slategrey', // #708090
	'snow', // #fffafa
	'springgreen', // #00ff7f
	'steelblue', // #4682b4
	'tan', // #d2b48c
	'teal', // #008080
	'thistle', // #d8bfd8
	'tomato', // #ff6347
	'turquoise', // #40e0d0
	'violet', // #ee82ee
	'wheat', // #f5deb3
	'white', // #ffffff
	'whitesmoke', // #f5f5f5
	'yellow', // #ffff00
	'yellowgreen', // #9acd32
];

export const themeSizes = [
	'8xs',
	'7xs',
	'6xs',
	'5xs',
	'4xs',
	'3xs',
	'xxs',
	'xs',
	's',
	'm',
	'l',
	'xl',
	'xxl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
];

export const defaultEasyFlexTheme: EasyFlexTheme<never, never, never, never> = {
	border: {
		defaultStyle: 'solid',
		radius: {
			'8xs': '0px',
			'7xs': '0px',
			'6xs': '0px',
			'5xs': '0px',
			'4xs': '0px',
			'3xs': '0px',
			xxs: '0px',
			xs: '0px',
			s: '0px',
			m: '0px',
			l: '0px',
			xl: '0px',
			xxl: '0px',
			'3xl': '0px',
			'4xl': '0px',
			'5xl': '0px',
			'6xl': '0px',
			'7xl': '0px',
			'8xl': '0px',
		},
		width: {
			'8xs': '1px',
			'7xs': '1px',
			'6xs': '1px',
			'5xs': '1px',
			'4xs': '1px',
			'3xs': '1px',
			xxs: '1px',
			xs: '1px',
			s: '1px',
			m: '1px',
			l: '1px',
			xl: '1px',
			xxl: '1px',
			'3xl': '1px',
			'4xl': '1px',
			'5xl': '1px',
			'6xl': '1px',
			'7xl': '1px',
			'8xl': '1px',
		},
	},
	color: {},
	distance: {
		'8xs': '1px',
		'7xs': '2px',
		'6xs': '3px',
		'5xs': '5px',
		'4xs': '7px',
		'3xs': '10px',
		xxs: '15px',
		xs: '23px',
		s: '34px',
		m: '51px',
		l: '77px',
		xl: '115px',
		xxl: '173px',
		'3xl': '259px',
		'4xl': '389px',
		'5xl': '584px',
		'6xl': '876px',
		'7xl': '1314px',
		'8xl': '1971px',
	},
	font: {
		family: {
			primary: 'sans-serif',
			secondary: 'sans-serif',
			tertiary: 'sans-serif',
			decline: 'sans-serif',
			error: 'sans-serif',
			footer: 'sans-serif',
			header: 'sans-serif',
			info: 'sans-serif',
			modal: 'sans-serif',
			rise: 'sans-serif',
			warning: 'sans-serif',
		},
		lineHeight: {
			'8xs': 1.5,
			'7xs': 1.5,
			'6xs': 1.5,
			'5xs': 1.5,
			'4xs': 1.5,
			'3xs': 1.5,
			xxs: 1.5,
			xs: 1.5,
			s: 1.5,
			m: 1.5,
			l: 1.5,
			xl: 1.5,
			xxl: 1.5,
			'3xl': 1.5,
			'4xl': 1.5,
			'5xl': 1.5,
			'6xl': 1.5,
			'7xl': 1.5,
			'8xl': 1.5,
		},
		size: {
			'8xs': '0.4375rem', // 7px
			'7xs': '0.5rem', // 8px
			'6xs': '0.5625rem', // 9px
			'5xs': '0.625rem', // 10px
			'4xs': '0.6875rem', // 11px
			'3xs': '0.75rem', // 12px
			xxs: '0.8125rem', // 13px
			xs: '0.875rem', // 14px
			s: '0.9375rem', // 15px
			m: '1rem', // 16px
			l: '1.125rem', // 18px
			xl: '1.25rem', // 20px
			xxl: '1.375rem', // 22px
			'3xl': '1.5rem', // 24px
			'4xl': '1.75rem', // 28px
			'5xl': '2rem', // 32px
			'6xl': '2.5rem', // 40px
			'7xl': '3rem', // 48px
			'8xl': '4rem', // 64px
		},
		weight: {
			thin: 100,
			extraLight: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extraBold: 800,
			black: 900,
			extraBlack: 950,
		},
	},
	modal: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		blur: '0px',
		blurElementId: 'root',
		containerElementId: '',
	},
	size: {
		height: {
			'8xs': '1px',
			'7xs': '2px',
			'6xs': '3px',
			'5xs': '5px',
			'4xs': '7px',
			'3xs': '10px',
			xxs: '15px',
			xs: '23px',
			s: '34px',
			m: '51px',
			l: '77px',
			xl: '115px',
			xxl: '173px',
			'3xl': '259px',
			'4xl': '389px',
			'5xl': '584px',
			'6xl': '876px',
			'7xl': '1314px',
			'8xl': '1971px',
		},
		width: {
			'8xs': '1px',
			'7xs': '2px',
			'6xs': '3px',
			'5xs': '5px',
			'4xs': '7px',
			'3xs': '10px',
			xxs: '15px',
			xs: '23px',
			s: '34px',
			m: '51px',
			l: '77px',
			xl: '115px',
			xxl: '173px',
			'3xl': '259px',
			'4xl': '389px',
			'5xl': '584px',
			'6xl': '876px',
			'7xl': '1314px',
			'8xl': '1971px',
		},
	},
	viewport: {
		defaultThreshold: 0,
		threshold: {
			'8xs': 429,
			'7xs': 429,
			'6xs': 429,
			'5xs': 429,
			'4xs': 429,
			'3xs': 429,
			xxs: 429,
			xs: 640,
			s: 768,
			m: 1024,
			l: 1280,
			xl: 1536,
			xxl: 1536,
			'3xl': 1536,
			'4xl': 1536,
			'5xl': 1536,
			'6xl': 1536,
			'7xl': 1536,
			'8xl': 1536,
		},
	},
};

export const EasyFlexContext = createContext(defaultEasyFlexTheme);
