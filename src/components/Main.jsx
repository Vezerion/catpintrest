import {  useDispatch, useSelector } from "react-redux";
import { Cat } from "./Cat";
import { getMoreCats } from "../state/cats-reducer";
import { useState } from "react";
export function Main(props) {
    const page = useSelector(state => state.page);
    const isFethcing = useSelector(state => state.isFethcing);
    const cats = useSelector(state => state.cats);
    const dispatch = useDispatch();
    const moreCats = () => {
        dispatch(getMoreCats(page))
    }
    return (
        <>
        <div className="main">
            {!isFethcing ? cats.map(cat => <Cat key={cat.id} id={cat.id} url={cat.url}/>) : 'Загружаем котиков...'}
            
        </div>
        {!isFethcing && <button className="main__btn" onClick={moreCats}>More Cats</button>}
        </>
        
    )
}