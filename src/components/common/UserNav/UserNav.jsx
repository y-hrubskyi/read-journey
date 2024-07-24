import * as SC from './UserNav.styled';

export const UserNav = ({ onCloseMobileMenu }) => {
  return (
    <SC.Nav>
      <SC.NavList>
        <li>
          <SC.NavLink to="/recommended" onClick={onCloseMobileMenu}>
            Home
          </SC.NavLink>
        </li>
        <li>
          <SC.NavLink to="/library" onClick={onCloseMobileMenu}>
            My Library
          </SC.NavLink>
        </li>
      </SC.NavList>
    </SC.Nav>
  );
};
