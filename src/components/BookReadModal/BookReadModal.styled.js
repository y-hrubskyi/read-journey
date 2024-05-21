import styled from "styled-components";

import BooksIMG from "@/assets/img/books.webp";

import { BaseNotificationImg } from "@/components/common/NotificationModal/NotificationModal.styled";

export const BooksImg = styled(BaseNotificationImg)`
  background-image: url(${BooksIMG});
`;
