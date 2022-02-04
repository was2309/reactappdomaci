import React, { useContext } from 'react';
import { AppBar,Container,Toolbar,Typography } from '@mui/material';
import { ImCart } from "react-icons/im";
import { KnjigaContext } from '../../store/knjigaContext';

function NavBar() {


  const knjigeCtx=useContext(KnjigaContext);

  return <div>
       <AppBar>
        <Container>
            <Toolbar>
                <Typography variant='h6'>Knjige</Typography>
                <a className="cart-items">
                  <ImCart style={{marginLeft: 10}}/>
                  <div className="cart-num">{knjigeCtx.ukupanBrojKnjiga}</div>
                </a>
            </Toolbar>
        </Container>
    </AppBar>
  </div>;
}

export default NavBar;
