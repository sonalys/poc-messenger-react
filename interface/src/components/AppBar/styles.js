import styled from 'styled-components';
import {
  flex, spacing, px, onMobile, onDesktop,
} from 'style';

export const Container = styled.div`
  position: relative;
  ${onMobile`
    height: 60px;
  `}
  ${onDesktop`
    height: 80px;
  `}
`;

export const Inner = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  ${onMobile`
    height: 60px;
  `}
  ${onDesktop`
    height: 80px;
  `}
  width: 100vw;
  background-color: #666;
  padding-left: ${px(spacing.normal)}
  padding-right: ${px(spacing.normal)}
  ${flex({ align: 'center', justify: 'space-between' })}

  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.5);
  color: white;
`;

export const Left = styled.div`
  ${flex({ align: 'center' })}
`;

export const Logout = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  
  ${onMobile`
    font-size: 13px;
  `}
  
  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/imgs/logo_header.svg);
  background-size: cover;
  width: 52px;
  height: 45px;
`;

export const Title = styled.div`
    ${onMobile`
    font-size: 20px;
    align-self: center;
  `}
  ${onDesktop`
    font-size: 28px;
  `}
  font-weight: bolder;
  display: block;
  margin-left: ${px(spacing.normal)};
`;
