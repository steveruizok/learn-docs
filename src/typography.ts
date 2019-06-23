import Typography from "typography";
// @ts-ignore
import parnassusTheme from "typography-theme-parnassus";
// import gray from 'gray-percentage'
// import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  ...parnassusTheme,
  headerColor: "#333333",
  bodyColor: "#333333",
  headerFontFamily: ["Helvetica Neue", "Arial", "sans-serif"],
  bodyFontFamily: ["Roboto", "Georgia", "serif"],
  baseLineHeight: 2,
  headerWeight: 800,
  baseFontSize: "18px",
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    "h1,h2,h3,h4,h5,h6": {
      lineHeight: 1.2
    },
    code: {
      fontFamily: "Roboto Mono"
    },
    h1: {
      letterSpacing: -1,
      fontSize: "96px",
      fontWeight: 600
    },
    h2: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 600
    },
    h4: {
      fontWeight: 500
    },
    lead: {
      fontSize: "20px"
    },
    label: {
      fontSize: "13px",
      letterSpacing: 0.5,
      lineSpacing: 1.2,
      fontWeight: 600,
      textTransform: "uppercase"
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500
    },
    b: {
      fontWeight: 800
    },
    p: {
      lineHeight: 1.8
    },
    li: {
      lineHeight: 1.8
    },
    td: {
      lineHeight: 1.6
    },
    a: {
      color: "#0056fe",
      textDecoration: "underline"
    },
    "a:hover, a:active": {
      color: "#0056fe",
      textDecoration: "underline"
    }
  })
});

// const typography = new Typography({
//   baseFontSize: '20px',
//   baseLineHeight: 1.45,
//   blockMarginBottom: 0.8,
//   bodyFontFamily: ['Domine', 'serif'],
//   bodyColor: gray(10),
//   headerWeight: 600,
//   bodyWeight: 300,
//   boldWeight: 600,
//   overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
//     'h1,h2,h3,h4,h5,h6': {
//       lineHeight: 1.2
//     },
//     a: {
//       color: '#ff5700',
//       textDecoration: 'none'
//     },
//     'a:hover, a:active': {
//       color: options.bodyColor
//     },
//     blockquote: {
//       ...scale(1 / 5),
//       color: gray(41),
//       fontStyle: 'italic',
//       paddingLeft: rhythm(13 / 16),
//       marginLeft: 0,
//       borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
//     },
//     'blockquote > :last-child': {
//       marginBottom: 0
//     },
//     'blockquote cite': {
//       ...adjustFontSizeTo(options.baseFontSize),
//       color: options.bodyColor,
//       fontWeight: options.bodyWeight
//     },
//     'blockquote cite:before': {
//       content: '"— "'
//     },
//     [MOBILE_MEDIA_QUERY]: {
//       html: {
//         fontSize: `${(16 / 16) * 100}%`
//       },
//       blockquote: {
//         marginLeft: rhythm(-3 / 4),
//         marginRight: 0,
//         paddingLeft: rhythm(9 / 16)
//       }
//     }
//   })
// })

export default typography;
