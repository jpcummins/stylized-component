import * as React from 'react';
import { ThemeProps } from './StyledComponent';

export interface ThemeProps {
  children?: React.ReactNode;
}

function cloneElementWithTheme(child:React.ReactChild, theme: ThemeProps): React.ReactElement<any> {
  // Hackity hack hack - If the child specifys a theme, respect it.
  const element = child as React.ReactElement<any>;
  const childThemeProp = element.props['theme'] as ThemeProps;
  const childTheme = childThemeProp ? childThemeProp : theme;
  return React.cloneElement(child as React.ReactElement<any>, { theme: childTheme });
}

export class Theme extends React.Component<ThemeProps, {}> {
  render() {
    const theme = this.props.theme as ThemeProps;
    const children = React.Children.map(this.props.children, c => cloneElementWithTheme(c, theme));

    return (
      <div>
        {children}
      </div>
    );
  }
}