import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserThunk, logOutThunk } from "redux/auth/authOperations";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavBarLink } from "./SharedLayout.styled";
import { getToken, getUserName } from "redux/selectors";
import { useEffect } from "react";

const SharedLayout = () => {
  const dispatch = useDispatch()
  const token = useSelector(getToken)
  const userName = useSelector(getUserName)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getUserThunk());
    if (token) {
      navigate('/contacts')
    }
  
  },[dispatch, navigate, token])

  const logOuthandler = () => {
    dispatch(logOutThunk());
    navigate('/login');
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <MenuBookIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="phonebook"
              sx={{ mr: 2 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {userName ? `${userName}'s phonebook` : 'Phonebook'}
            </Typography>
            {token ? (
              <>
                <NavBarLink to="/contacts">CONTACTS</NavBarLink>
                <Button onClick={logOuthandler} color="inherit">
                  LOG OUT
                </Button>
              </>
            ) : (
              <>
                <NavBarLink to="/login">SIGN IN</NavBarLink>
                <NavBarLink to="/register">SIGN UP</NavBarLink>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
 
export default SharedLayout;