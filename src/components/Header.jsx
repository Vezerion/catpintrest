import { NavLink } from "react-router-dom"
export function Header(props) {
    return (
        <div className="header">
            <NavLink to='/' className="header__btn header__all">Все котики</NavLink>
            <NavLink to='/favorites' className="header__btn header__favorites">Любимые котики</NavLink>
            {/* <button className="header__btn header__all"><NavLink to='/'>Все котики</NavLink></button>
            <button className="header__btn header__favorites"><NavLink to='/favorites'>Любимые котики</NavLink></button> */}
        </div>
    )
}