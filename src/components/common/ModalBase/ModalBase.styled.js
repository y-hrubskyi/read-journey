import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.backdrop};
  overflow: auto;
`;

export const BaseModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% - 40px);
  max-height: 90%;
  padding: ${(p) => p.theme.spacing(10)};

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.modal};
  border: 1px solid rgba(104, 104, 104, 0.2);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 20px;
    margin-bottom: 20px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(104, 104, 104, 0.2);
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(12.5)};
  }
`;

export const ContentModal = styled(BaseModal)`
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const NotificationModal = styled(BaseModal)`
  @media screen and (min-width: 768px) {
    width: 342px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 22px;
  height: 22px;
  padding: 0;

  color: ${(p) => p.theme.colors.primaryText};

  background-color: transparent;
  border: none;
`;

export const CrossIcon = styled.svg`
  width: 100%;
  height: 100%;

  stroke: currentColor;
`;
