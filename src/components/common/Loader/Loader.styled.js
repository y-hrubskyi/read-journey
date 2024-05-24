import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const Loader = styled.div`
  width: 60px;
  --b: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.accent};
  mask: repeating-conic-gradient(#0000 0deg, #000 1deg 70deg, #0000 71deg 90deg),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l5 1s infinite;

  @keyframes l5 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;
