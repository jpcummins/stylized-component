import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Theme } from './Theme';

export interface ThemeContext {
  theme: Theme;
}

export interface ThemeProps {
  theme: Theme;
}

export type Props = { children : React.ReactNode} & ThemeProps;

export class ThemeProvider extends React.Component<Props, {}> {
  static childContextTypes = {
    theme: PropTypes.object,
  };

  theme: Theme;

  constructor(props: Props, context: ThemeContext) {
    super(props, context);
    this.theme = props.theme;
  }
  
  getChildContext(): ThemeContext {
    return {
      theme: this.theme,
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
