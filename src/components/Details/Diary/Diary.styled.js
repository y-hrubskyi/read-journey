import styled from 'styled-components';

export const DiaryListWrapper = styled.div`
  max-height: 211px;
  padding: ${p => p.theme.spacing(4)};

  background-color: ${p => p.theme.colors.secondaryBg};
  border-radius: ${p => p.theme.radii.section};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 16px;
    margin-bottom: 16px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: rgba(104, 104, 104, 0.2);
  }

  @media screen and (min-width: 768px) {
    max-height: 252px;
  }

  @media screen and (min-width: 1280px) {
    max-height: 373px;
    padding: ${p => p.theme.spacing(5)};
  }
`;

export const DiaryList = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4.25)};

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(3.5)};
  }

  @media screen and (min-width: 1280px) {
    gap: ${p => p.theme.spacing(5.5)};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 7px;

    display: block;
    width: 2px;
    height: 100%;

    background-color: ${p => p.theme.colors.primaryBg};

    @media screen and (min-width: 768px) {
      left: 9px;
    }
  }
`;

export const DiaryItem = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(2.25)};

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(2.5)};
  }
`;

export const ItemLabelOuter = styled.div`
  position: relative;

  width: 16px;
  height: 16px;
  padding: ${p => p.theme.spacing(1)};

  background-color: ${p => p.theme.colors.primaryText};
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ItemLabelInner = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${p => p.theme.colors.pageBg};
  border-radius: 2px;
`;

export const ItemContent = styled.div`
  width: 100%;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(4)};
  padding-right: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(4.5)};
    padding-right: ${p => p.theme.spacing(5.5)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${p => p.theme.spacing(7.5)};
  }
`;

export const Date = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: 0.02em;
  color: ${p =>
    p.theme.colors[p['data-is-today'] ? 'primaryText' : 'secondaryText']};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const ReadPages = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const SessionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3.5)};

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    gap: ${p => p.theme.spacing(7)};
  }
`;

export const SessionItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const LeftBlock = styled.div``;

export const ReadingProgress = styled.p`
  margin-bottom: ${p => p.theme.spacing(1)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(2)};

    font-size: 20px;
    line-height: 1;
  }
`;

export const ReadingInfo = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16667;
  }
`;

export const RightBlock = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(1.5)};

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(2)};
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(1.75)};
  width: 43px;

  @media screen and (min-width: 768px) {
    width: 59px;
  }
`;

export const ChartIcon = styled.svg`
  width: 100%;
  height: 18px;

  fill: ${p => p.theme.colors.green};

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 25px;
  }
`;

export const ReadingSpeed = styled(ReadingInfo)`
  text-align: center;
`;

export const RemoveReadingBtn = styled.button`
  width: 14px;
  height: 14px;
  margin-top: ${p => p.theme.spacing(0.5)};
  padding: 0;

  color: ${p => p.theme.colors.secondaryText};

  background-color: transparent;
  border: none;

  transition: ${p => p.theme.transition('color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.redWithAlfa()};
  }

  @media screen and (min-width: 768px) {
    margin-top: ${p => p.theme.spacing(1.5)};
  }
`;

export const TrashIcon = styled.svg`
  width: 100%;
  height: 100%;

  fill: none;
  stroke: currentColor;
`;
