/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { css, createGlobalStyle, CSSObject, InterpolationFunction, ThemedStyledProps, FlattenInterpolation } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-types
type CSSProps = TemplateStringsArray | CSSObject | InterpolationFunction<ThemedStyledProps<object, unknown>>;

export const onMobile = (props: CSSProps) => css`
  @media (max-aspect-ratio: 1) {
    ${css(props)}
  }
`;
export const onDesktop = (props: CSSProps) => css`
  @media (min-aspect-ratio: 1000001/1000000) {
    ${css(props)}
  }
`;

export const fonts = {
  normal: '"Roboto", sans-serif',
  special: '"Rubik Mono One", sans-serif',
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ff7f2a;
  }

  body {
    font-family: ${fonts.normal};
    padding: 0px;
    margin: 0px;
    background-color: #fff;
  }
`;

interface flexProps {
  direction?: 'column' | 'row';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
}

export const flex = ({ direction, align, justify }: flexProps): FlattenInterpolation<unknown> => (css`
  display: flex !important;
  box-sizing: border-box !important;
  ${direction && (direction === 'row' ? 'flex-direction: row !important;' : 'flex-direction: column !important;')}
  ${align && `align-items: ${align} !important;`}
  ${justify && `justify-content: ${justify} !important;`}
`);

interface textProps {
  color?: string;
  size?: string;
  weight?: 'bold' | 'normal';
  family?: 'normal' | 'special';
}

export const text = ({
  color, size, weight, family,
}: textProps): string => (`
  color: ${color || '#444'};
  ${size && `font-size: ${size};` || ''}
  ${weight && `font-weight: ${weight};` || ''}
  ${family && `font-family: ${fonts[family]};` || ''}
`);

export const expand = css`
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
`;
