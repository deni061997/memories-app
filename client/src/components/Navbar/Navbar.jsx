import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Typography, Toolbar } from '@material-ui/core'
import useStyles from './styles'
import memories from "../../images/memories.png";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

function Navbar() {
  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory() 
  const location = useLocation()

  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    history.push('/')
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  
  return (
    <AppBar className={classes.appBar} position='static' color='inherit' >
      <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>Воспоминания</Typography>
        <img className={classes.image} alt='icon' height='60' src={memories} alt=""/>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.image}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Выход</Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>Войти</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

