export interface Themes {
  [key: string]: Theme;
}

export interface Theme {
  [key: string]: ThemeStyle;
}

export interface ThemeStyle {
  [prop: string]: any;
}
