import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: ${p => p.theme.spacing(4)};
  margin-bottom: ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.primaryBg};
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const UserMenu = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
`;

export const LogOutBtn = styled.button`
  align-self: end;
  justify-self: center;

  padding: ${p => p.theme.spacing(2.25)} ${p => p.theme.spacing(4.75)};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primaryText};

  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.btnBorder};
  border-radius: ${p => p.theme.radii.btn};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('border-color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primaryBg};

    background-color: ${p => p.theme.colors.primaryText};
    border-color: ${p => p.theme.colors.primaryText};
  }

  @media screen and (max-width: 767px) {
    align-self: end;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.spacing(2.75)} ${p => p.theme.spacing(6.75)};

    font-size: 16px;
    line-height: 1.125;
  }
`;

export const MobileMenuBtn = styled.button`
  padding: 0;
  width: 28px;
  height: 28px;

  color: ${p => p.theme.colors.primaryText};

  border: none;
  background-color: transparent;
`;

export const MobileMenuIcon = styled.svg`
  width: 100%;
  height: 100%;

  stroke: currentColor;
`;

export const MobileMenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${p =>
    p['data-mob-menu-open'] ? p.theme.colors.backdrop : 'transparent'};

  z-index: 100;
  transform: translateX(${p => (p['data-mob-menu-open'] ? '0%' : '100%')});

  transition: ${p => p.theme.transition('background-color')},
    ${p => p.theme.transition('transform')};
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;

  display: grid;
  padding-top: ${p => p.theme.spacing(10)};
  padding-bottom: ${p => p.theme.spacing(10)};

  background-color: ${p => p.theme.colors.secondaryBg};
`;

export const MobileMenuCloseBtn = styled(MobileMenuBtn)`
  position: absolute;
  top: 34px;
  right: 40px;
`;
