import React,{useState, useEffect} from "react"
const Context = React.createContext();

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const toggleFavorite = (id)=>{
        const newArray = allPhotos.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })

        setAllPhotos(newArray)
    } 

    const addToCart = (imgObj) =>{
        setCartItems(prevData => [...prevData, imgObj])
    }    

    const removeToCart = (id)=>{
        const updatedCart = cartItems.filter(item => item.id !== id)
        setCartItems(updatedCart)
    }
    console.log(cartItems)
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    },[])

    return(
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, removeToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}