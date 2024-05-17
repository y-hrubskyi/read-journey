import styled from "styled-components";

export const BaseNotificationImg = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: ${(p) => p.theme.spacing(4)};

  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px 50px;

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: ${(p) => p.theme.spacing(8)};

    background-size: 70px 70px;
  }
`;

export const NotificationTitle = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(2.5)};

  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(3.5)};

    font-size: 20px;
  }
`;

export const NotificationDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.secondaryText};
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.primaryText};
`;
