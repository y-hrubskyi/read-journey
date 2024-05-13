import styled from "styled-components";

export const BookCard = styled.li`
  width: 137px;

  background-color: transparent;
`;

export const BookImg = styled.img`
  width: 100%;
  height: 208px;
  margin-bottom: ${(p) => p.theme.spacing(2)};

  border-radius: ${(p) => p.theme.radii.img};
`;

export const BookTitle = styled.h3`
  margin-bottom: ${(p) => p.theme.spacing(0.5)};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const BookAuthor = styled.h4`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};
`;
