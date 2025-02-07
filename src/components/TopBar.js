import React, { useContext,useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import MyContext from '../context/context';
import appLogo from '../assets/images/court_logo.png';
import { useLocation } from 'react-router-dom';


const TopBar = () => {
  const { toggleNavbar, navBarIsOpen } = useContext(MyContext);
  const location = useLocation();

  // Update active navigation when you are on the current page
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'navlink active-nav-link' : 'navlink';
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state based on scroll position
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [isHidden, setIsHidden] = useState(false); // Tracks whether the navbar is hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Hide navbar when scrolling down
        setIsHidden(true);
        console.log('Scrolling down');
      } else {
        // Show navbar when scrolling up
        setIsHidden(false);
        console.log('Scrolling up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

 

  return (
    <>
      <Navbar expand="lg" 
      className={`bg-body-tertiary `}
       id='navbar'
       sticky={isHidden ? "":"top"}
       >
        <Container fluid>
          <Navbar.Brand to='/' as={Link} className='navlink'>
            <img src={appLogo} alt='App logo' width={60} />
            <span className='navbar-app-title'>Bunde Mangaro</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className='menu-top-navbar' onClick={toggleNavbar} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            className="offcanvas-fullwidth"
            placement="end"
            show={navBarIsOpen}
            onHide={toggleNavbar}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >

              <Nav className='justify-content-end flex-grow-1 pe-3'>

               
              

              {/* <Nav.Link to="/" id="nav-home-link" className={getNavLinkClass('/')} as={Link}>Home</Nav.Link> */}
                <Nav.Link to="/#practise-area" className={getNavLinkClass('/home')} as={Link}>Practise</Nav.Link>
                <Nav.Link to="/#history" className={getNavLinkClass('/staff')} as={Link}>About</Nav.Link>
                <Nav.Link to="/#our-team" className={getNavLinkClass('/staff')} as={Link}>Our Attorneys</Nav.Link>
                <Nav.Link to="/#case-study" className={getNavLinkClass('/staff')} as={Link}>Case study</Nav.Link>
                <Nav.Link to="/#footer" className={getNavLinkClass('/staff')} as={Link}>Location</Nav.Link>
               
          
             
              </Nav>
              <Nav className=' justify-content-end flex-grow-1 pe-3'>

     
                 
                <Link to="/#contact-us" className='btn btn-secondary btn-nav-talk-us'>Talk to us</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
