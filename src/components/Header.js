import styled from "styled-components";
const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="disney"/>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="Home"></img>
                </a>
                <span>Home</span>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="Home"></img>
                </a>
                <span>Home</span>
            </NavMenu>
        </Nav>
    )
}
const  Nav = styled.nav`
position : fixed;
top: 0;
left: 0;
right : 0;
height : 70px;
background-color : #090b13;
display: flex;
justify-content : space-between;
align-items : center;
padding : 0 36px;
letter-spacing: 16px;
z-index: 3;
`

const Logo = styled.a`
padding: 0;
width : 80px;
margin-top : 4px;
margin-height: 70px;
font-size : inline-block;
img{
    display: block;
    width:100%; 
}
`
const NavMenu = styled.div`

align-items : center;
display : flex;
flex-flow : row nowrap;
height : 100%;
justify-content : flex-end;
margin: 0px;
padding : 0px;
position: relative;
margin-right : auto;
margin-left : 25px;

@media(max-width : 768px) {
    display : none;
}
`


export default Header;