import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <h3>Duck Club</h3>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search questions people topics" />
          </div>
          <SearchIc>
            <SearchIcon />
          </SearchIc>
        </Search>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid black;
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1128px;
  min-height: 100%;
`;

const Logo = styled.span`
  margin: 8px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  width: fit-content;
  position: relative;
  & > div {
    max-width: 380px;
    input {
    
      border: none;
      box-shadow: none;
      background-color: #ece9e3;
      border-radius: 2px;
      padding: 0 8px 0 40px;
      width:218px ;
      line-height: 1.75;
      font-weight: 14px;
      border-color: white;
      height: 34px;
      font-weight: 14px;
      vertical-align: text-top;
    }
  }
`;

const SearchIc = styled.div `
width: 40px;
position: absolute;
z-index: 1;
top: 5px;
left: 2px;

`