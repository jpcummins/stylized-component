import * as React from 'react';
import { StyledComponentProps } from './StyledComponent';

export interface ThemeProps {
  children?: React.ReactNode;
}

export class Theme extends React.Component<ThemeProps & StyledComponentProps, {}> {
  render() {
    const globalStyle = this.props.globalStyle;
    const overrides = this.props.overrides;
    const children = React.Children.map(this.props.children, c => React.cloneElement(c as React.ReactElement<any>, { globalStyle, overrides }));

    return (
      <div>
        {children}
      </div>
    );
  }
}