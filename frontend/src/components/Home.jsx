import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/blog')
      .then((res) => {
        setRows(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const del_value = (id) => {
    axios.delete(`http://localhost:3001/removeblog/${id}`)
      .then(() => {
        alert('Data deleted');
        setRows(rows.filter(row => row._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  const update_value = (item) => {
    navigate('/add', { state: { val: item } });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', mt: 3 }}>
      {rows.map((item) => (
        <Card key={item._id} sx={{ maxWidth: 345, mb: 3 ,mt:6}}>
          <CardMedia
            component="img"
            height="140"
            image={item.img_url}
            alt={item.title}
          />
          <CardContent>
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
              {item.content}
            </Typography>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" color="secondary" onClick={() => del_value(item._id)}>Delete</Button>
            <Button variant="contained" size="small" color="secondary" onClick={() => update_value(item)}>Update</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default View;

