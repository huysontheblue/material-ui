import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

/* import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Drafts, Inbox } from '@mui/icons-material'; */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemData = () => {
  return (
      <div
        sx={{ 
          backgroundcolor: 'blue',
          color: 'text.primary',
          padding: "35px 70px 0 70px",
          height: "100px", 
        }}
      >
        <Grid 
          container 
          spacing={4}  
        >
          <Grid item xs={4} >
            <Item>
              <Typography>Danh mục</Typography>
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item>Link</Item>
          </Grid>

          <Grid item xs={4}>
            <Item>Liên hệ</Item>
          </Grid>
        </Grid>
      </div>
  )
}

export default ItemData
