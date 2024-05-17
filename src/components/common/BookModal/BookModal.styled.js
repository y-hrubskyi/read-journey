import styled from "styled-components";

import { BaseBookImg } from "@/components/common/BookItem/BookItem.styled";

export const BookImg = styled(BaseBookImg)`
  width: 140px;
  height: 213px;
  margin-bottom: ${(p) => p.theme.spacing(4)};

  @media screen and (min-width: 768px) {
    width: 153px;
    height: 233px;
  }
`;

export const BookTitle = styled.h3`
  max-width: 194px;
  margin-bottom: ${(p) => p.theme.spacing(0.5)};

  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    max-width: 317px;

    font-size: 20px;
  }
`;

export const BookAuthor = styled.h4`
  margin-bottom: ${(p) => p.theme.spacing(1)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const BookPages = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(5)};

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(8)};
  }
`;

export const ActionBookBtn = styled.button`
  padding: ${(p) => p.theme.spacing(2.75)} ${(p) => p.theme.spacing(5.75)};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.btnBorder};
  border-radius: ${(p) => p.theme.radii.btn};

  transition: ${(p) => p.theme.transition("color")},
    ${(p) => p.theme.transition("border-color")},
    ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.primaryBg};

    background-color: ${(p) => p.theme.colors.primaryText};
    border-color: ${(p) => p.theme.colors.primaryText};
  }

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(3.25)} ${(p) => p.theme.spacing(6.75)};

    font-size: 16px;
    line-height: 1.125;
  }
`;
