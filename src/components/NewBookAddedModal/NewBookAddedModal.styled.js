import styled from "styled-components";

import ThumbUpIMG from "@/assets/img/thumb-up.webp";

import { BaseNotificationImg } from "@/components/common/NotificationModal/NotificationModal.styled";

export const ThumbUpImg = styled(BaseNotificationImg)`
  background-image: url(${ThumbUpIMG});
`;
