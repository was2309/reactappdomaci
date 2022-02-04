import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const KorpaItem = ({knjiga}) => {
  return <Card style={{padding:'20px',maxWidth:'400px'}}>
      <CardHeader title={<Typography variant='h4'>{knjiga.naslov}</Typography>}/>
      <CardMedia style={{height:'400px'}} image={knjiga.slikaUrl}/>
       <Typography variant='p'>
           {knjiga.opis}
       </Typography>
       <CardContent>{knjiga.brojPonavljanja}</CardContent>
  </Card>;
};

export default KorpaItem;
