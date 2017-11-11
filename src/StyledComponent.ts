import * as React from 'react';
import { ThemeStyle, defaultStyle } from './Style';

export interface ThemeProps {
  theme?: ThemeStyle;
}

export interface StyledComponent<Style = {}, Props = {}, State = {}> {
  theme: ThemeStyle;
  globalTheme: ThemeStyle;
  props: Readonly<{ children?: React.ReactNode }> & Readonly<Props> & ThemeProps;
  setTheme(global: ThemeStyle, override?: Style): ThemeStyle;
}

export class StyledComponent<Style, Props, State> extends React.Component<Props, State> {
  theme: ThemeStyle;
  globalTheme: ThemeStyle;

  constructor(props?: Props, context?: any) {
    super(props, context);
    this.globalTheme = this.props.theme ? this.props.theme : defaultStyle;
    this.theme = this.setTheme(this.globalTheme);
  }
  componentWillUpdate(nextProps:any) {
    if (nextProps.theme !== undefined && nextProps.theme !== this.globalTheme) {
      this.globalTheme = nextProps.theme;
      this.theme = this.setTheme(nextProps.theme, nextProps.overrideTheme);
    }
  }
}
