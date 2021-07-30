import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Sidebar from 'components/Sidebar/Sidebar';
export interface LayoutProps {
  sidebar: React.ReactElement;
  content?: React.ReactElement | React.ReactElement[] | null;
  children?: React.ReactElement | React.ReactElement[] | null;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    height: '100%',

    paddingLeft: 0,

    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    borderTopLeftRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '& > div': {
      height: '100%',
      boxShadow: 'inset #FAFAFA 0 8px 0',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
}));

const Layout: React.FC<LayoutProps> = ({ sidebar, children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Sidebar toolbar>{sidebar}</Sidebar>
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
};
export default Layout;
