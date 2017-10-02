import * as React from 'react';
import { Style, DefaultStyle } from './Style';

export interface ThemeProps {
  theme?: Style;
}

function isTheme(prop: any): prop is Style {
  return (<Style>prop).colors !== undefined;
}

export interface StyledComponent<StyleT = {}, PropsT = {}, StateT = {}> {
  theme: StyleT;
  globalTheme: Style;
  props: Readonly<{ children?: React.ReactNode }> & Readonly<PropsT> & ThemeProps;
  setTheme(global: Style, override?: StyleT): StyleT;
};

export class StyledComponent<StyleT, PropsT, StateT> extends React.Component<PropsT, StateT> implements StyledComponent {
  theme: StyleT;
  globalTheme: Style;

  constructor(props?: PropsT, context?: any) {
    super(props, context);
    this.globalTheme = this.props.theme ? this.props.theme : DefaultStyle;
    this.theme = this.setTheme(this.globalTheme);
  }
  componentWillUpdate(nextProps:any) {
    if (nextProps.theme !== undefined && nextProps.theme !== this.globalTheme) {
      this.globalTheme = nextProps.theme;
      this.theme = this.setTheme(nextProps.theme, nextProps.overrideTheme);
    }
  }
}