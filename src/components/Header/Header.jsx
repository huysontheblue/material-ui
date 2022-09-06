import { useState } from 'react';
import { Cloud, Logout, Mail, Notifications, PersonAdd, Settings } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled("div")(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex",
    }
}));

const UserBox = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }
}));


const Header = () => {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] =  useState(false)
  const [open2, setOpen2] =  useState(false)
  const [open3, setOpen3] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography 
            variant='h5'
            sx={{ cursor: "pointer" ,display: {xs: "none", sm:"block"}}}
        >
            HuySonDEV
        </Typography>
        <MenuIcon 
          onClick={()=>setOpen3(true)}
          sx={{ 
            display: {xs: "block", sm:"none"},
            cursor: "pointer",
          }}
        >
        </MenuIcon>

        <Search /* bgcolor={"background.default"} color={"text.primary"} */>
            <InputBase placeholder='Search...'/>
        </Search>
        <Icons> 
            <Badge badgeContent={10} color="error">
                <Mail onClick={()=>setOpen1(true)} />
            </Badge>
            <Badge badgeContent={4} color="error">
                <Notifications onClick={()=>setOpen2(true)}/>
            </Badge>
            <Avatar src="https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg"
                sx={{width: 30, height: 30}}
                onClick={()=>setOpen(true)}
            />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
            <Avatar src="https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg"
                sx={{width: 30, height: 30}}
            />
            <Typography variant="span">HuySon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open1}
        onClose={e=>setOpen1(false)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Avatar alt="Huy Son" src="https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg" />
            </ListItemIcon>
            <ListItemText>Huy sơn</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
            <Avatar fontSize="small" alt="Huy Son" src="https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg" />
            </ListItemIcon>
            <ListItemText>Huy Sơn</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
            <Avatar alt="Huy Son" src="https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg" />
            </ListItemIcon>
            <ListItemText>Huy Sơn</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Xem tất cả</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu
        open={open2}
        onClose={e=>setOpen2(false)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem>
          <Avatar src='https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg' 
          /> 
          <Typography sx={{paddingLeft: 1}}>
            My Account
          </Typography>
        </MenuItem>
        </Menu>

      <Menu
        open={open}
        onClick={e=>setOpen(false)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          marginTop: "48px",
          marginRight: "25px",
        }}
      >
        <MenuItem>
          <Avatar src='https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg' 
          /> 
          <Typography sx={{paddingLeft: 1}}>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem>
          <Avatar src='https://i.vietgiaitri.com/2022/1/2/ta-hoa-hinh-anh-irene-red-velvet-lo-cam-bien-dang-va-dai-nhon-bat-thuong-den-nu-than-dep-nhat-kpop-gio-cung-dao-keo-efe-6245276.jpg'
          /> 
          <Typography sx={{paddingLeft: 1}}>
            My Account
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;