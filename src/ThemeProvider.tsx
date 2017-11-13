import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Theme } from './Theme';

export interface ThemeProviderContext {
  theme: Theme;
}

export interface ThemeProps {
  theme: Theme;
}

export type ThemeProviderProps = { children : React.ReactNode} & ThemeProps;

export class ThemeProvider extends React.Component<ThemeProviderProps, {}> {
  static childContextTypes = {
    theme: PropTypes.object,
  };
  
  getChildContext(): ThemeProviderContext {
    return {
      theme: this.props.theme,
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
