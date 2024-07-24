import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0;

  color: ${p =>
    p.theme.colors[p['data-disabled'] ? 'btnBorder' : 'primaryText']};

  background-color: transparent;
  border-radius: 100%;
  border: 1px solid ${p => p.theme.colors.btnBorder};
  cursor: ${p => (p['data-disabled'] ? 'default ' : 'pointer')};

  transition: ${p => p.theme.transition('border-color')};

  &:hover,
  &:focus {
    border-color: ${p =>
      p.theme.colors[p['data-disabled'] ? 'btnBorder' : 'primaryText']};
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ChevronIcon = styled.svg`
  width: 16px;
  height: 16px;

  fill: none;
  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const PrevChevronIcon = styled(ChevronIcon)`
  transform: rotate(-180deg);
`;
