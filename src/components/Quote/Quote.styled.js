import styled from "styled-components";

export const QuoteWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: ${(p) => p.theme.spacing(3.5)};
    padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(5)};

    background-color: ${(p) => p.theme.colors.secondaryBg};
    border-radius: 12px;
  }
`;

export const BooksIcons = styled.span`
  font-weight: 500;
  font-size: 32px;
  line-height: 1;
  letter-spacing: -0.02em;
`;

export const QuoteText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.primaryText};
`;
