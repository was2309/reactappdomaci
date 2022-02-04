import React, { useContext } from 'react';
import { KnjigaContext } from '../../store/knjigaContext';
import KorpaItem from './KorpaItem';

const KorpaList = () => {

    const knjigaCtx=useContext(KnjigaContext);

  return <Grid container>
      {knjigaCtx.knjige.map(k=>{
          return <Grid item xs={4} key={k.id}>
              <KorpaItem knjiga={k}/>
          </Grid>
      })}
  </Grid>
};

export default KorpaList;
