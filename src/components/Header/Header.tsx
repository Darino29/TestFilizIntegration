import React from 'react';
import Logo from '../../../public/images/logo.svg';
import styles from './header.module.css';
import { useMediaQuery, useTheme, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = (): JSX.Element => {

   
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <a href="">Qui sommes nous ?</a>
            </MenuItem>
            <MenuItem>
                <a href="">Nos valeurs</a>
            </MenuItem>
            <MenuItem>
                <a href="">Reservez!</a>
            </MenuItem>
           
        </Menu>
    );

    return (
        <div className={`${styles.navbar}`} style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
            <div className={`${styles.wrapper}`}>
                
                    <img src={Logo} alt="Logo" className={styles.logo} />
                

                {isMobile ? (
                    <>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        {renderMobileMenu}
                    </>
                ) : (
                    <ul className={`${styles.ul}`}>
                        <li>
                            <a href="">Qui sommes nous ?</a>
                        </li>
                        <li>
                            <a href="#nosvaleurs">Nos valeurs</a>
                        </li>
                        <li>
                            <a href="">Reservez!</a>
                        </li>
                    </ul>
                )}
               
            </div>
        </div>
    )
}
