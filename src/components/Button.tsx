import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Color from 'color';
import { StylizedComponent, styleId } from './StylizedComponent';

export interface Styles {
  color?: string;
}

export interface ButtonProps {
  children?: React.ReactNode;
}

export type Props = ButtonProps & Styles;

@styleId('button')
export class Button extends StylizedComponent<Styles, Props, {}> {
  render() {
    const color = Color(this.style.color);
    const isLight = color.light();

    return (
      <button 
        style={{
          padding: '10px 30px',
          margin: '10px',
          color: isLight ? 'black' : 'white',
          backgroundColor: this.style.color,
          boxShadow: 'none',
          borderRadius: '4px',
          border: '3px solid',
          borderColor: isLight ? color.darken(.3).hex() : color.lighten(.3).hex(),
        }}
      >
        {this.props.children}
      </button>);
  }
}
