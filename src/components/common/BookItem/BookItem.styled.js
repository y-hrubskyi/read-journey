import styled from "styled-components";

import BookPlaceholder from "@/assets/img/book-placeholder.webp";

export const BookCard = styled.li`
  width: 137px;

  background-color: transparent;
`;

export const BaseBookImg = styled.img`
  position: relative;

  margin-bottom: ${(p) => p.theme.spacing(2)};

  border-radius: ${(p) => p.theme.radii.img};
  object-fit: cover;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme.colors.secondaryBg};
    background-image: url(${BookPlaceholder});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: ${(p) => p.theme.radii.img};
  }
`;

export const BookImg = styled(BaseBookImg)`
  width: 100%;
  height: 208px;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
