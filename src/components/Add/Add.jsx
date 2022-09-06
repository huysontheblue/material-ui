import { Box, Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { AccountBox, AddPhotoAlternate, DateRange, EmojiEmotions, VideoCameraBack } from '@mui/icons-material';


const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
})


function Add() {
  const [open, setOpen] = useState(false);

  return (
    <div sx={{
        paddingBottom: 1,
    }}>
        <Tooltip title="Add" 
            onClick={(e)=>setOpen(true)}
            sx={{
                position:"fixed",
                left: 5, bottom: 25, 
                display:{xs: "calc(50%)-50px",md: 30, sm:"block"}}}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyleModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box 
                width={400} 
                height={330}  
                bgcolor={"background.default"} 
                color={"text.primary"} 
                borderRadius={5} 
                p={3}
            >
                <Typography 
                    variant='h5' 
                    color="gray"
                    sx={{marginBottom: "10px", cursor: "pointer"}}
                >
                    Create Post
                    <CloseIcon  
                        sx={{marginLeft: "200px"}}
                        onClick={(e)=>setOpen(false)}
                    />
                </Typography>
                <UserBox>
                    <Avatar 
                        src='https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg'
                        alt='HS'
                        sx={{ width: 30, height: 30}}
                    />
                    <Typography variant='span' fontWeight={500} color="gray">
                        Huy Sơn
                    </Typography>
                </UserBox>
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind ?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='primay'/>
                    <AddPhotoAlternate color='success'/>
                    <VideoCameraBack color='secondary'/>
                    <AccountBox color='error'/>
                </Stack>
                <ButtonGroup 
                    fullWidth
                    variant="contained" 
                    aria-label="outlined primary button group"
                >
                    <Button>
                        Post
                    </Button>
                    <Button sx={{width: "100px"}}>
                        <DateRange/>
                    </Button>
                </ButtonGroup>
            </Box>
        </StyleModal>
    </div>
  )
}

export default Add;