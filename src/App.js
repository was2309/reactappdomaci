
import { Route, Routes } from 'react-router';
import './App.css';
import KnjigaItemList from './components/knjiga/KnjigaItemList';
import KorpaList from './components/korpa/KorpaList';
import NavBar from './components/navbar/NavBar';

const BOOKS = [
  {
    id:1,
    naslov:"Gospodjica",
    opis:"„Gospođica“ je roman srpskog književnika Ive Andrića. Napisan je u periodu od decembra 1943. do oktobra 1944. u Beogradu za vreme Drugog svetskog rata. „Gospođica” spada u ona Andrićeva ostvarenja koja su ostala u senci njegovih poznatijih dela.",
    slikaUrl:'https://www.delfi.rs/_img/artikli/2016/02/gospodjica_vv.jpg',
    brojPonavljanja:0
  },
  {
    id:2,
    naslov:"Ex ponto",
    opis:"Ex Ponto je knjiga stihova u lirskoj prozi koju je napisao Ivo Andrić 1918. godine. Naziv ovog dela inspirisan je nazivom zbirke pesama „Epistuale ex Ponto“ latinskog pesnika Ovidija, u kojima on peva svoje patne i utiske iz prognanstva u Pontu na obali Crnog mora gde je proteran od strane Oktavijana Avgusta.",
    slikaUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386017673l/13606927.jpg',
    brojPonavljanja:0
  },
  {
    id:3,
    naslov:"Most na Zepi",
    opis: "Most na Žepi je pripovijetka Ive Andrića. Napisana je u trećem licu. Andrić je objavio 1928. godine pošto je iz Pariza premješten na mjesto vicekonzula Kraljevine SHS u Madridu.",
    slikaUrl:'https://lektire.elektronskaknjiga.com/slike/most_na_zepi.jpg',
    brojPonavljanja:0
  }
]


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
       <Route path='/' element={<KnjigaItemList knjige={BOOKS}/>}/>
       <Route path='/korpa' element={<KorpaList/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
