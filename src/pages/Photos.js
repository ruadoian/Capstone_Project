import React,{useContext} from "react"
import Images from "../components/Images"
import {Context} from "../Context"
import {getClass} from "../utils"

function Photos(){
    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img,i) =>(
        <Images key={img.id} img={img} className={getClass(i)}/>
    ))
    
    return(
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos