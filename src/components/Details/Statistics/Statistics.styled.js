import styled from "styled-components";

export const StatisticsDescription = styled.p`
  display: none;
  max-width: 293px;
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.spacing(5)};

  background-color: ${(p) => p.theme.colors.secondaryBg};
  border-radius: ${(p) => p.theme.radii.section};

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(7)};
  }

  @media screen and (min-width: 1280px) {
    padding: ${(p) => p.theme.spacing(5)};
  }
`;

export const ChartContainer = styled.div`
  margin-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${(p) => p.theme.spacing(2.5)};
    padding: ${(p) => p.theme.spacing(2.5)};
  }
`;

export const PieChart = styled.div`
  @property --p {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }

  position: relative;
  display: inline-grid;
  place-content: center;
  width: var(--w);

  font-weight: 700;
  font-size: 18px;
  line-height: 1.11111;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  --b: 10px;
  --c: ${(p) => p.theme.colors.green};
  --p: ${(p) => p["data-value"]};
  --w: 116px;
  aspect-ratio: 1;
  animation: p 1s 0.5s both;

  @keyframes p {
    from {
      --p: 0;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b)
        var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0),
      conic-gradient(
        ${(p) => p.theme.colors.primaryBg} calc(100% - var(--p) * 1%),
        ${(p) => p.theme.colors.primaryBg} 0
      );
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
  }

  &::after {
    inset: calc(50% - var(--b) / 2);
    background: var(--c);
    transform: rotate(calc(var(--p) * 3.6deg))
      translateY(calc(50% - var(--w) / 2));
  }

  @media screen and (min-width: 768px) {
    --w: 136px;
    --b: 12px;

    font-size: 20px;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    --w: 168px;
    --b: 15px;
  }
`;

export const Label = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing(3.75)};
`;

export const LabelColor = styled.span`
  width: 14px;
  height: 14px;

  background: ${(p) => p.theme.colors.green};
  border-radius: 4px;
`;

export const LabelValue = styled.span`
  margin-bottom: ${(p) => p.theme.spacing(1)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(2)};

    font-size: 20px;
    line-height: 1;
  }
`;

export const LabelProgress = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16667;
  }
`;
