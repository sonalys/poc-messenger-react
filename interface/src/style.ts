import { css, createGlobalStyle } from 'styled-components';

export const spacing = {
  normal: 16,
  medium: 24,
  large: 32,
};

export const onMobile = (...args) => css`
  @media (max-aspect-ratio: 1/1) {
    ${css(...args)}
  }
`;
export const onDesktop = (...args) => css`
  @media (min-aspect-ratio: 1000001/1000000) {
    ${css(...args)}
  }
`;

export const fonts = {
  normal: "'Roboto', sans-serif",
  special: "'Rubik Mono One', sans-serif",
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ff7f2a;
    --dark-primary-color: #9d3f00;
    --secondary-color: #545454;
    --background-color: #fff;
    --foreground-color: #000;
    --error-color: #f00;
  }

  body {
    font-family: ${fonts.normal};
    padding: 0px;
    margin: 0px;
    background-color: var(--background-color);
  }
`;

interface flexProps {
  direction?: 'column' | 'row';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
}

export const flex = ({ direction, align, justify }: flexProps) => (css`
  display: flex !important;
  box-sizing: border-box !important;
  ${direction && (direction === 'row' ? 'flex-direction: row !important;' : 'flex-direction: column !important;')}
  ${align && `align-items: ${align} !important;`}
  ${justify && `justify-content: ${justify} !important;`}
`);

interface textProps {
  color?: string;
  size?: string;
  weight?: "bold" | "normal";
  family?: "normal" | "special";
}

export const text = ({
  color, size, weight, family,
}: textProps) => (`
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

export const px = (v) => `${v}px`;
