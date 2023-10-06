// ** React Imports
import { Fragment, useEffect, useState } from 'react';

// ** Next Import
import { useRouter } from 'next/router';

// ** Context
import { useAuth } from 'src/hooks/useAuth';

// ** Icon Imports
import Icon from 'components/icon';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
// ** MUI Imports
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}));

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  '&:hover .MuiBox-root, &:hover .MuiBox-root svg': {
    color: theme.palette.primary.main
  }
}));

const UserDropdown = (props) => {
  // ** Props
  const { settings } = props;

  // ** States
  const [anchorEl, setAnchorEl] = useState(null);

  // ** Hooks
  const router = useRouter();
  const { logout } = useAuth();
  const [position, setPosition] = useState(null);

  // ** Vars
  const { direction } = settings;

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  const styles = {
    px: 4,
    py: 1.75,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      mr: 2.5,
      fontSize: '1.5rem',
      color: 'text.secondary'
    }
  };

  const handleLogout = () => {
    logout();
    handleDropdownClose();
  };

  useEffect(() => {
    const storedEmployee = JSON.parse(window.localStorage.getItem('userData'));

    setPosition(storedEmployee?.role);
  }, []);

  return (
    <Fragment>
      <Badge
        overlap="circular"
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar
          alt="土井勝"
          src="/images/avatars/2.png"
          onClick={handleDropdownOpen}
          sx={{ width: 38, height: 38 }}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4.75 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
      >
        <Box sx={{ py: 1.75, px: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap="circular"
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar
                alt="土井勝"
                src="/images/avatars/2.png"
                sx={{ width: '2.5rem', height: '2.5rem' }}
              />
            </Badge>
            <Box
              sx={{
                display: 'flex',
                ml: 2.5,
                alignItems: 'flex-start',
                flexDirection: 'column'
              }}
            >
              <Typography sx={{ fontWeight: 500 }}>土井勝</Typography>
              <Typography variant="body2">{position}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: (theme) => `${theme.spacing(2)} !important` }} />
        <MenuItemStyled sx={{ p: 0 }} onClick={handleLogout}>
          <Box sx={styles}>
            <Icon icon="tabler:logout" />
            ログアウト
          </Box>
        </MenuItemStyled>
      </Menu>
    </Fragment>
  );
};

export default UserDropdown;
