import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";


const knjigaItem = ({knjiga})=> {
    const desing = {margin: 10, borderStyle: "dashed" };
    const addToCart = () => {
        console.log("add");
    };

    const removeFromCart = () => {
        console.log("remove");
    };
    
    
    
    return(
        <div className="card" style={desing}>
            <img className="card-img-top" src={knjiga.slikaUrl} alt="Ivo Andric slika" width={200}/>
            <div className="card-body">
                <h3 className="card-title">{knjiga.naslov}</h3>
                <p className="card-text"> {knjiga.opis}</p>
                <button className="btn" onClick={addToCart}><ImPlus/></button>
                <button className="btn" onClick={removeFromCart}><ImMinus/></button>
            </div>
        </div>
    )

}

export default knjigaItem;