import styled from "styled-components";

import { InfoTitle } from "@/components/common/Dashboard/InfoBlock.styled";

export const GuideTitle = styled(InfoTitle)`
  margin-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(10)};
  }
`;

export const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(5)};
  margin-bottom: ${(p) => p.theme.spacing(5)};
`;

export const Point = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing(3)};
`;

export const Number = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.primaryBg};

  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    max-width: 197px;
  }
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.primaryText};
`;
