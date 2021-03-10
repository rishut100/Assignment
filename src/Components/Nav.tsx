import React , {useState} from 'react';
import styled from 'styled-components';

const Navbar:React.FC = () =>{
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <Nav>
            <Logo href="/">
                Shop
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu >
                <MenuLink href="/cart">Cart</MenuLink>
                <MenuLink href="/loggedUser">Gifts</MenuLink>
                <MenuLink href="/gifts">LoggedUser</MenuLink>
            </Menu>
        </Nav>
    );
    
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
    text-decoration : none;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  min-height: 10%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width : 768px){
    max-height: 10%;
    align-items: center;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  &:hover{
      text-decoration: none;
      color : white;
  }
  @media (max-width : 768px){
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display : none;
    overflow: hidden;
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;