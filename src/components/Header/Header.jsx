import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Icons } from "@/config/icons";
import { signOut } from "@/store/auth/operations";

import { Logo } from "@/components/common/Logo/Logo";
import { UserNav } from "@/components/UserNav/UserNav";
import { UserBar } from "@/components/UserBar/UserBar";
import * as SC from "./Header.styled";

export const Header = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    () => window.innerWidth < 768
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleWindowResize = useCallback(() => {
    if (innerWidth < 768) {
      setIsMobileDevice(true);
    } else {
      setIsMobileDevice(false);
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleLogOutClick = () => {
    dispatch(signOut());
  };

  return (
    <SC.Header>
      <Logo isPrivateLayout />
      {!isMobileDevice && <UserNav />}
      <SC.UserMenu>
        <UserBar />

        {isMobileDevice ? (
          <SC.MobileMenuBtn
            type="button"
            onClick={toggleMobileMenu}
            aria-label="open mobile menu"
          >
            <SC.MobileMenuIcon>
              <use href={Icons.mobileMenu}></use>
            </SC.MobileMenuIcon>
          </SC.MobileMenuBtn>
        ) : (
          <SC.LogOutBtn type="button" onClick={handleLogOutClick}>
            Log out
          </SC.LogOutBtn>
        )}
      </SC.UserMenu>

      {isMobileMenuOpen && (
        <SC.MobileMenuBackdrop>
          <SC.MobileMenu>
            <SC.MobileMenuCloseBtn
              type="button"
              onClick={toggleMobileMenu}
              aria-label="close mobile menu"
            >
              <SC.MobileMenuIcon>
                <use href={Icons.cross}></use>
              </SC.MobileMenuIcon>
            </SC.MobileMenuCloseBtn>
            <UserNav onCloseMobileMenu={closeMobileMenu} />
            <SC.LogOutBtn type="button" onClick={handleLogOutClick}>
              Log out
            </SC.LogOutBtn>
          </SC.MobileMenu>
        </SC.MobileMenuBackdrop>
      )}
    </SC.Header>
  );
};
