import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { SkipPrevious, PlayArrow, SkipNext } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ItemData = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      borderTop: "1px solid #ffcece",
      display: "flex",
      padding: "20px 100px 20px 100px",
      alignItems: "center",
      height: "100%",
      justifyContent: "space-between",
      flexDirection: {xs: "column", sm: "column", md: "row"},
    }}>
      <Card sx={{ width: {xs: "400px", sm: "width.default"},display: 'flex', marginBottom: {xs: "20px"} }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrow sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg"
          alt="Live from space album cover"
        />
      </Card>

      <Card sx={{ width: "400px", textAlign: "center" , marginBottom: {xs: "20px"}}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          sx={{
            textAlign: "center"
          }} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <div sx={{
         width: {sx: "400px"},
         border: "1px solid #ccc"
      }}>
        <Typography>
          Nhập phản hồi
        </Typography>
        <br></br>
        <TextField
          id="outlined-multiline-static"
          label="Nhập........."
          multiline
          rows={6}
          cols={5}
          placeholder="Nhập........."
        />

      </div>
    </Box>
  );
}

export default ItemData
