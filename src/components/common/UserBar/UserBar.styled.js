import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};

  background-color: ${p => p.theme.colors.secondaryBg};
  border: 1px solid ${p => p.theme.colors.btnBorder};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;

    line-height: 1.125;
  }
`;

export const UserFullName = styled.p`
  display: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
