import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import { Component, ReactNode } from 'react';

import { ThemeContext } from './ThemeProvider';
import { Theme, ThemeStyle } from './Theme';

export abstract class StyledComponent<Style, Props extends Style, State> 
  extends Component<Props, State> {
  static contextTypes = {
    theme: PropTypes.object,
  };

  context: ThemeContext;
  style: Partial<Style>;
  styleId: string;

  constructor(props: Props, context: ThemeContext) {
    super(props, context);

    // Order of inheritance
    // 1. Explicity defined props
    // 2. Overrides defined in context.theme
    const contextStyle = _.get(context, ['theme', this.styleId]) as ThemeStyle;
    this.style = _.extend(contextStyle, props);
  }
}

export const styleId = (key: string) => {
  return function (target: Function) {
    target.prototype.styleId = key;
  };
};
