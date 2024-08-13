import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { getCurrentUser } from "../services/apiAuth";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyleHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 10px;
  border-bottom: 5px;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyleHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyleHeader>
  );
}
export default Header;
