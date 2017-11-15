import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Theme, Themes } from '../Theme';
import { blue, green } from '../themes';

const themes: Themes = { blue, green };

export interface ThemeContext {
  theme: Theme;
}

export interface ThemeProps {
  theme: string;
}

export type Props = { children : React.ReactNode} & ThemeProps;

export class ThemeProvider extends React.Component<Props, {}> {
  static childContextTypes = {
    theme: PropTypes.object,
  };

  theme: Theme;

  constructor(props: Props, context: ThemeContext) {
    super(props, context);
    this.theme = themes[props.theme];
  }
  
  getChildContext(): ThemeContext {
    return {
      theme: this.theme,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    this.theme = themes[nextProps.theme];
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
