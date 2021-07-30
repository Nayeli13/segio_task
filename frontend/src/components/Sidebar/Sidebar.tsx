import React from 'react';
import { Box, Drawer, Toolbar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export interface SidebarProps {
  toolbar?: boolean;
  open?: boolean;
  children: React.ReactElement;
}

const drawerWidth = 285;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyItems: 'center',
      alignItems: 'center',
      zIndex: 1,
      marginTop: 20,
      paddingTop: 10,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      borderRight: 'none',
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

export default function Sidebar({ toolbar = false, open = true, children }: SidebarProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Drawer
        className={classes.drawer}
        open={false}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {toolbar && <Toolbar variant="dense" />}
        <Box>{children}</Box>
      </Drawer>
    </Box>
  );
}
