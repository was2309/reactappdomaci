import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const KorpaItem = ({knjiga}) => {
  return <Card>
      <CardHeader title={<Typography variant='h2'>{knjiga.naslov}</Typography>}/>
      <CardMedia image={knjiga.slikaUrl}/>
       <Typography variant='h6'>
           {knjiga.opis}
       </Typography>
       <CardContent>{knjiga.brojPonavljanja}</CardContent>
  </Card>;
};

export default KorpaItem;
