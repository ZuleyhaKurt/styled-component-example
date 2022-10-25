import Button from "../styles/Button.styled"
import StyledHeader, { Logo, Nav } from "../styles/Header.styled"


const Header = () => {
  return (
      <StyledHeader>
          <Nav>
          <Logo src="./images/logo.png"/>
         <div>
            <Button color="#a62240">Apply Courses</Button>
            <Button bg="#a62240">Talk to Adviser</Button>
              </div>
            </Nav>
      </StyledHeader>
      
  )
}

export default Header