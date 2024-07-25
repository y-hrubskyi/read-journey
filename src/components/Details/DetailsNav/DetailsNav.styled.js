import styled from 'styled-components';

export const DetailsNav = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;

export const DetailsNavBtn = styled.button`
  padding: 0;

  background-color: transparent;
  border: none;
`;

export const DetailsNavIcon = styled.svg`
  width: 20px;
  height: 20px;

  fill: none;
  stroke: ${p =>
    p.theme.colors[p['data-is-active'] ? 'primaryText' : 'secondaryText']};
`;
