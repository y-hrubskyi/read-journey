import { ModalTypes } from '@/config/modals';

import { ModalBase } from '@/components/common/ModalBase/ModalBase';
import {
  AccentText,
  NotificationDescription,
  NotificationTitle
} from '@/components/common/NotificationModal/NotificationModal.styled';

import * as SC from './BookReadModal.styled';

export const BookReadModal = ({ isOpen, onClose }) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} type={ModalTypes.NOTIFICATION}>
      <SC.BooksImg />
      <NotificationTitle>The book is read</NotificationTitle>
      <NotificationDescription>
        It was an <AccentText>exciting journey</AccentText>, where each page
        revealed new horizons, and the characters became inseparable friends.
      </NotificationDescription>
    </ModalBase>
  );
};
