import {useState, useEffect} from "react"

const useMediaQuery = (query:string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
      const media = window.matchMedia(query)

      if(media.matches !== matches) {
        setMatches(media.matches)
      }

      const listener = () => setMatches(media.matches)

      window.addEventListener("resize", listener)

      return () => console.log('helo');
      
    
    }, [query, matches])
    
    return matches
} 

export default useMediaQuery