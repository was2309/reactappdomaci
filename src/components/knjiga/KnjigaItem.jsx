import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";


const knjigaItem = ()=> {
    const desing = {margin: 10, borderStyle: "dashed" };

    return(
        <div className="card" style={desing}>
            <img className="card-img-top" src="https://www.delfi.rs/_img/artikli/2016/02/gospodjica_vv.jpg" alt="Ivo Andric slika" width={200}/>
            <div className="card-body">
                <h3 className="card-title">Naslov knjige</h3>
                <p className="card-text"> Opis knjige sa vise detalja</p>
                <button className="btn"><ImPlus/></button>
                <button className="btn"><ImMinus/></button>
            </div>
        </div>
    )

}

export default knjigaItem;