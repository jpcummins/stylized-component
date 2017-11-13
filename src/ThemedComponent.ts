import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ThemeProps, ThemeProviderContext } from './ThemeProvider';
import { Theme, defaultTheme } from './Theme';

export interface ThemedComponent<ComponentTheme = {}, Props = {}, State = {}> {
  props: Props & { theme?: Theme };
  setTheme(theme: Theme, override?: Partial<ComponentTheme>): ComponentTheme;
}

export class ThemedComponent<ComponentTheme, Props, State> extends React.Component<Props, State> {
  static contextTypes = {
    theme: PropTypes.object,
  };

  context: ThemeProviderContext;
  theme: ComponentTheme;

  constructor(props: Props, context: ThemeProviderContext) {
    super(props, context);
    const theme = _.extend({}, defaultTheme, context.theme, _.get(props, 'theme'));
    this.theme = this.setTheme(theme);
  }
}
