import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import 'reflect-metadata';

import { ThemeProps, ThemeProviderContext } from './ThemeProvider';
import { Theme } from './Theme';

export interface ThemedComponent<ComponentTheme = {}, Props = {}, State = {}> {
  props: Props & { theme?: Theme };
}

export class ThemedComponent<ComponentTheme, Props, State> extends React.Component<Props, State> {
  static contextTypes = {
    theme: PropTypes.object,
  };
  static styleId = '';

  context: ThemeProviderContext;
  theme: Partial<ComponentTheme>;

  constructor(props: Props, context: ThemeProviderContext) {
    super(props, context);
    const theme = _.extend({}, context.theme, _.get(props, 'theme')) as Theme;
    const styleId = Reflect.getMetadata('themeKey', this.constructor);

    this.theme = _.get(theme, `overrides['${styleId}']`, {});
    console.log('theme', this.theme, styleId);
    console.log('style', styleId);
    console.log('this', this);
  }
}

export const themeKey = (key: string) => {
  return function (target: Function) {
    Reflect.defineMetadata('themeKey', key, target);
  };
};
