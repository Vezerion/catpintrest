import { useSelector } from "react-redux"
import { Cat } from "./Cat";
export function Favorite() {
    const favoriteCats = useSelector(state => state.favoriteCats);
    return ( 
        <div className="main">
            {favoriteCats.map(cat => <Cat key={cat.id} id={cat.id} url={cat.url}/>)}
        </div>
    )
}