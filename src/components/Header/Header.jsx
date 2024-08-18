import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { Icons } from '~/config/icons';
import { selectAuthIsLoading } from '~/store/auth/selectors';
import { signOut } from '~/store/auth/operations';
import { clearLibrary } from '~/store/books/slice';

import { Logo } from '~/components/common/Logo/Logo';
import { UserNav } from '~/components/common/UserNav/UserNav';
import { UserBar } from '~/components/common/UserBar/UserBar';
import * as SC from './Header.styled';

export const Header = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    () => window.innerWidth < 768
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoading = useSelector(selectAuthIsLoading);
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
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogOutClick = async () => {
    try {
      const signOutPromise = dispatch(signOut()).unwrap();
      await toast.promise(signOutPromise, {
        loading: 'Logging out...',
        success: 'Logout successful!',
        error: error => error
      });
    } catch (error) {
      // handled in toast.promise
    } finally {
      dispatch(clearLibrary());
    }
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
          <SC.LogOutBtn
            type="button"
            onClick={handleLogOutClick}
            disabled={isLoading}
          >
            Log out
          </SC.LogOutBtn>
        )}
      </SC.UserMenu>

      <SC.MobileMenuBackdrop
        onClick={handleBackdropClick}
        data-mob-menu-open={isMobileMenuOpen}
      >
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
          <SC.LogOutBtn
            type="button"
            onClick={handleLogOutClick}
            disabled={isLoading}
          >
            Log out
          </SC.LogOutBtn>
        </SC.MobileMenu>
      </SC.MobileMenuBackdrop>
    </SC.Header>
  );
};
