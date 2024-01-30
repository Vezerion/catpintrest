import { ReactComponent as AddFavorite } from '../images/favorite_border.svg'
import { ReactComponent as RemoveFavorite } from '../images/favorite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addCatToFavorite } from '../state/cats-reducer';
import { removeCatFromFavorite } from '../state/cats-reducer';
export function Cat({url, id}) {
    const dispatch = useDispatch();
    const favoriteCatsID = useSelector(state => state.favoriteCatsID);
    function handleLike() {
        dispatch(addCatToFavorite(id, url));
    }
    function handleUnlike() {
        dispatch(removeCatFromFavorite(id, url));
    }
    return (
        <div id={id} className="cat">
            <img src={url} className="cat__img" alt="Cat"/>
            {favoriteCatsID.includes(id) ? <RemoveFavorite onClick={handleUnlike} className='favorite'/> : <AddFavorite onClick={handleLike} className='favorite'/>}
        </div>
    )
}