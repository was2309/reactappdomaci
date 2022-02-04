import React,{useState} from "react"


export const KnjigaContext=React.createContext({

    knjiga:[],
    dodajKnjigu:()=>{},
    ukloniKnjigu:()=>{},
    ukupanBrojKnjiga:0

})



export const KnjigaProvider=(props)=>{
    const [knjige,setKnjige]=useState([]);
const [ukupanBrojKnjiga,setUkupanBrojKnjiga]=useState(0);


const dodajKnjigu=(knjiga)=>{
    setKnjige(prevKnjige=>{
        return [...prevKnjige,knjiga];
    });
    setUkupanBrojKnjiga(prevValue=>prevValue+1);
}

const ukloniKnjigu=(id)=>{
    const filterKnjige=knjige.filter(k=>k.id!==id);
    setKnjige(filterKnjige);
    setUkupanBrojKnjiga(prevValue=>prevValue-1);
}

const knjigaValue={
    knjige:knjige,
    dodajKnjigu:dodajKnjigu,
    ukloniKnjigu:ukloniKnjigu,
    ukupanBrojKnjiga:ukupanBrojKnjiga

}
    return <KnjigaContext.Provider value={knjigaValue}>
        {props.children}
    </KnjigaContext.Provider>
}


