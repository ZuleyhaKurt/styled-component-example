import Button from "../styles/Button.styled"
import StyledHeader, { Image, Logo, Nav } from "../styles/Header.styled"


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
          <div>
              <div>
              <h1>The It Career of Your Dreams Starts Here!</h1>
                <p>Clarusway is a leading international software Bootcamp. Join a micro class online with other trainees and learn coding skills with a highly-skilled instructor.</p>
              <Button>Start Your New Carier</Button>
              </div>
              <Image src="./images/courses.jpg"></Image>
          </div>

      </StyledHeader>
      
  )
}

export default Header