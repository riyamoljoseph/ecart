import React from 'react'
import { Badge, Container, Nav, Navbar ,} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)

  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
<Navbar expand="lg"  style={{zIndex:1}} className="bg-primary position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand >
<Link to={'/'} style={{color:'orange',fontWeight:'bold', textDecoration:'none'}}>
            <i class="fa-solid fa-cart-shopping  " style={{color:'#3a7474;'}}></i>E-Cart </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  >
            <Link to={'/wishlist'} className='d-flex align-items-center' style={{color:'black',fontWeight:'bold', textDecoration:'none'}}>
            <i class="fa-solid fa-heart fa-beat-fade me-2 " style={{color:'red'}}></i>Wishlist
            <Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
            </Link></Nav.Link>
            <Nav.Link>

            <Link to={'/cart'} className='d-flex align-items-center' style={{color:'black',fontWeight:'bold', textDecoration:'none'}}>
            <i class="fa-solid fa-cart-plus fa-bounce"></i>Cart
            <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge></Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    </>
  )
}

export default Header