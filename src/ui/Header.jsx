import styled from "styled-components";

const StyleHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 10px;
  border-bottom: 5px;
`;

function Header() {
  return (
    <StyleHeader>
      <p>Header</p>
    </StyleHeader>
  );
}
export default Header;
