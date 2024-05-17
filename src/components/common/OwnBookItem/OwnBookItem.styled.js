import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AboutBook = styled.div`
  width: 95px;
`;

export const RemoveBookBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;

  background-color: ${(p) => p.theme.colors.redWithAlfa(0.1)};
  border: 1px solid ${(p) => p.theme.colors.redWithAlfa(0.2)};
  border-radius: 100%;
`;

export const TrashIcon = styled.svg`
  width: 14px;
  height: 14px;

  fill: none;
  stroke: ${(p) => p.theme.colors.redWithAlfa()};
`;
