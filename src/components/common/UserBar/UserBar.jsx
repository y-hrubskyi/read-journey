import { useSelector } from "react-redux";

import { selectAuthUser } from "@/store/auth/selectors";

import * as SC from "./UserBar.styled";

export const UserBar = () => {
  const user = useSelector(selectAuthUser);

  return (
    <SC.UserInfo>
      <SC.UserAvatar>{user.name[0]}</SC.UserAvatar>
      <SC.UserFullName>{user.name}</SC.UserFullName>
    </SC.UserInfo>
  );
};
