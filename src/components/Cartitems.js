import React,{useContext, useState} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"


const Cartitems = ({item})=>{
    //const [hovered, setIsHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {removeToCart} = useContext(Context)

    const hoverIcon = hovered ? "ri-delete-bin-fill":"ri-delete-bin-line"
    return(
        <div className="cart-item">
        <i className={hoverIcon} 
            onClick={() =>removeToCart(item.id)}
            ref={ref}
            // onMouseEnter={()=> (setIsHovered(true))}
            // onMouseLeave={()=>(setIsHovered(false))}
            ></i>
            
        <img src={item.url} width="130px"/>
        <p>$5.99</p>
    </div>
    )

}



Cartitems.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}



export default Cartitems