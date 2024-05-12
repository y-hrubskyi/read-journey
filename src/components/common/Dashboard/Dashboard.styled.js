import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseDashboard = styled.div`
  padding: ${(p) => p.theme.spacing(5)};
  width: 100%;

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.wrapper};

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    flex-shrink: 0;
    padding-top: ${(p) => p.theme.spacing(10)};
    padding-right: ${(p) => p.theme.spacing(5)};
    padding-bottom: ${(p) => p.theme.spacing(5)};
    padding-left: ${(p) => p.theme.spacing(5)};
    width: 353px;
  }
`;

export const Form = styled.form`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    width: 295px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const FormTitle = styled.p`
  margin-left: ${(p) => p.theme.spacing(3.5)};

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const SubmitBtn = styled.button`
  align-self: start;
  padding: ${(p) => p.theme.spacing(2.25)} ${(p) => p.theme.spacing(4.75)};

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
    padding: ${(p) => p.theme.spacing(2.75)} ${(p) => p.theme.spacing(6.75)};

    font-size: 16px;
    line-height: 1.125;
  }
`;

export const InfoWrapper = styled.div`
  padding: ${(p) => p.theme.spacing(5)};

  background-color: ${(p) => p.theme.colors.secondaryBg};
  border-radius: 12px;
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AnotherPageLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AnotherPageLink = styled(Link)`
  align-self: end;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.secondaryText};

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.primaryText};
  }
`;

export const AnotherPageLinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  color: ${(p) => p.theme.colors.primaryText};
`;

export const ArrowIcon = styled.svg`
  stroke: currentColor;
`;
