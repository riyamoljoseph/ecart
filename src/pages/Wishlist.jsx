import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slice/wishlistslice'
import { addToCart } from '../redux/slice/cartSlice'
import { Link } from 'react-router-dom'



function Wishlist() {
 const wishlistArray=useSelector((state)=>state.wishlistReducer)

const dispatch=useDispatch()

const handleWishlistCart=(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWishlist(product.id))
}
  return (
    <div style={{marginTop:'100px'}}>
    <Row>
    {
    wishlistArray.length>0?
    wishlistArray.map((product,index)=>(
  
   
  
    <Col key={index}  className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '20rem',height:'30rem' }}>
      <Card.Img height={"200px"} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title className='text-primary'>{product?.title}</Card.Title>
        <Card.Text>
         <p>{product?.description.slice(0,50)}...</p>
         <h5>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button onClick={()=>dispatch(removeFromWishlist(product.id))}  className='btn btn-light'><i class="fa-solid fa-trash text-danger" ></i></Button>
        <Button onClick={()=>   handleWishlistCart(product)} className='btn btn-light'> <i class="fa-solid fa-cart-shopping text-warning" ></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col> )):<div style={{height:"100vh"}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
         
         <img  height={'500px'}src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png?f=webp" alt="img" />
         <h3 className='text-center text-danger'>Wishlist Is Empty!!</h3>
         <Link style={{ textDecoration: "none" }} className='btn btn-warning fw-bold
        rounded' to={'/'}>Back To Home</Link>
         
         
         </div>
          




    }

    </Row>
    
    
    
    
    
    </div>
  )
}

export default Wishlist