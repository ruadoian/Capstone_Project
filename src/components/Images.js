import React,{useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"

function Images({img, className}){
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, addToCart, removeToCart, cartItems} = useContext(Context)

    const heartIcon = () => {
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() =>(toggleFavorite(img.id))}></i>
        }else if(isHovered){    
            return <i className="ri-heart-line favorite" onClick={() =>(toggleFavorite(img.id))}></i>
        }
    }

    const cartIcon = () => {
        const findCart =  cartItems.some(item => item.id === img.id)        
        if(findCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() =>(removeToCart(img.id))}></i>
        }else if(isHovered){
            return <i className="ri-add-circle-line cart" onClick={() => (addToCart(img))}></i>  
        }
    }

    // const cartIcon = isHovered && <i className="ri-add-circle-line cart" onClick={() => (addToCart(img))}></i>
    
    return(
        <div className={`${className} image-container`}
        onMouseEnter={()=> (setIsHovered(true))}
        onMouseLeave={()=>(setIsHovered(false))}
        >
            {heartIcon()}
            {cartIcon()}
            <img key={img.id} src={img.url} className="image-grid"/>
        </div>
    )
}

Images.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Images