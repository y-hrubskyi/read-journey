import styled from "styled-components";

import { InfoTitle } from "@/components/common/Dashboard/InfoBlock.styled";
import { BaseBookImg } from "@/components/common/BookItem/BookItem.styled";

export const RecommendedBooksTitle = styled(InfoTitle)`
  margin-bottom: ${(p) => p.theme.spacing(5)};
`;

export const ListWrapper = styled.div`
  position: relative;

  min-height: 141px;
  margin-bottom: ${(p) => p.theme.spacing(5)};
`;

export const BookList = styled.ul`
  display: flex;
  gap: ${(p) => p.theme.spacing(5)};
`;

export const BookItem = styled.li`
  width: 71px;

  background-color: transparent;
`;

export const BookImg = styled(BaseBookImg)`
  width: 100%;
  height: 107px;
`;

export const BookTitle = styled.h3`
  margin-bottom: ${(p) => p.theme.spacing(0.5)};

  font-weight: 700;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #e3e3e3;
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
