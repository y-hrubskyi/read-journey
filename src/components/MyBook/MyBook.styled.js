import styled from "styled-components";

import { BaseBookImg } from "@/components/common/BookItem/BookItem.styled";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BookImg = styled(BaseBookImg)`
  width: 137px;
  height: 208px;
  margin-bottom: ${(p) => p.theme.spacing(2.5)};

  @media screen and (min-width: 768px) {
    width: 169px;
    height: 256px;
    margin-bottom: ${(p) => p.theme.spacing(6.25)};
  }

  @media screen and (min-width: 1280px) {
    width: 224px;
    height: 340px;
    margin-bottom: ${(p) => p.theme.spacing(6.25)};
  }
`;

export const AboutBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 146px;
  margin-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    max-width: 50%;
    margin-bottom: ${(p) => p.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${(p) => p.theme.spacing(6.25)};
  }
`;

export const BookTitle = styled.h3`
  margin-bottom: ${(p) => p.theme.spacing(1)};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1;
  }
`;

export const BookAuthor = styled.h4`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const ActionIcon = styled.svg`
  width: 40px;
  height: 40px;

  fill: ${(p) => p.theme.colors.red};
  stroke: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
