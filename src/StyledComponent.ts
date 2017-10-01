import * as React from 'react';
import { GlobalStyle, DefaultGlobalStyle } from './GlobalStyle';

export interface StyledComponentProps {
  globalStyle: GlobalStyle;
  overrides: { [index:string] : any };
}

export interface StyledComponent<Style = {}, Props extends StyledComponentProps = { globalStyle: GlobalStyle, overrides: {} }, State = {}> {
  style: Style;
  setStyle(global: GlobalStyle, override?: Style): Style;
};

export class StyledComponent<Style, Props extends StyledComponentProps, State> extends React.Component<Props, State> implements StyledComponent {
  style: Style;

  constructor(props?: Props, context?: any) {
    super(props, context);
    const className = this.constructor.toString()
    const override = this.props.overrides ? this.props.overrides[className] : undefined;
    this.style = this.setStyle(this.props.globalStyle || DefaultGlobalStyle, override);
  }
}