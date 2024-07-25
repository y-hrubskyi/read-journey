import styled from 'styled-components';

export const EyeBtn = styled.button`
  position: absolute;
  top: 13px;
  right: ${p => (p['data-was-valid'] ? '44px' : '16px')};

  width: 18px;
  height: 18px;
  padding: 0;

  color: ${p => p.theme.colors.primaryText};

  background-color: transparent;
  border: none;

  transition: ${p => p.theme.transition('color')};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: ${p => (p['data-was-valid'] ? '48px' : '18px')};

    width: 20px;
    height: 20px;
  }
`;

export const EyeIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: currentColor;
  fill: none;
`;
