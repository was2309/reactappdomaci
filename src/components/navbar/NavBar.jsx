import React, { useContext } from 'react';
import { AppBar,Container,IconButton,Link,Toolbar,Typography } from '@mui/material';
import { ImCart } from "react-icons/im";
import { KnjigaContext } from '../../store/knjigaContext';
import {useNavigate} from 'react-router-dom';

function NavBar() {


  const knjigeCtx=useContext(KnjigaContext);
  const navigate=useNavigate();
  return <div>
       <AppBar>
        <Container>
            <Toolbar>
                <Typography variant='h6'>Knjige</Typography>
                <a className="cart-items">
                  <IconButton onClick={()=>navigate('/korpa')}><ImCart style={{marginLeft: 10}}/></IconButton>
                  <div className="cart-num">{knjigeCtx.ukupanBrojKnjiga}</div>
                </a>
            </Toolbar>
        </Container>
    </AppBar>
  </div>;
}

export default NavBar;
