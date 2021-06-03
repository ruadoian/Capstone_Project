import {useState, useEffect, useRef} from "react"

function useHover(){
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const enter = () =>{
        setHovered(true)
    }

    const leave = () =>{
        setHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)

        const cleanUp = () =>{
            ref.current.removeEventListener("mouseenter", enter, true)
            ref.current.removeEventListener("mouseleave", leave, false)
        }

        return cleanUp()
    }, [])

    return [hovered, ref]

}

export default useHover

