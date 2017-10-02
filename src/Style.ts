export interface Style {
  colors: {
    absolute: {
      red: string;
      green: string;
      blue: string;
      lightGrey: string;
      darkGrey: string;
      black: string;
      white: string;
    },
    semantic: {
      primary: string;
      secondary: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
    },
  },
  fontSize: string;
  borderRadius: string;
};

const absoluteColors = {
  red: '#d9534f',
  green: '#5cb85c',
  blue: '#0275d8',
  lightGrey: '#ddd',
  darkGrey: '#333',
  black: '#000',
  white: '#fff',
};

const semanticColors = {
  primary: absoluteColors.blue,
  secondary: absoluteColors.lightGrey,
  success: absoluteColors.green,
  info: absoluteColors.lightGrey,
  warning: absoluteColors.red,
  danger: absoluteColors.red,
};

export const DefaultStyle: Style = {
  colors: {
    absolute: absoluteColors,
    semantic: semanticColors,
  },
  fontSize: '16px',
  borderRadius: '4px',
}
