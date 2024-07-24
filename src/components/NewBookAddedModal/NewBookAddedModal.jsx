import { ModalTypes } from '@/config/modals';

import { ModalBase } from '@/components/common/ModalBase/ModalBase';
import {
  AccentText,
  NotificationDescription,
  NotificationTitle
} from '@/components/common/NotificationModal/NotificationModal.styled';

import * as SC from './NewBookAddedModal.styled';

export const NewBookAddedModal = ({ isOpen, onClose }) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} type={ModalTypes.NOTIFICATION}>
      <SC.ThumbUpImg />
      <NotificationTitle>Good job</NotificationTitle>
      <NotificationDescription>
        Your book is now in <AccentText>the library!</AccentText> The joy knows
        no bounds and now you can start your training
      </NotificationDescription>
    </ModalBase>
  );
};
