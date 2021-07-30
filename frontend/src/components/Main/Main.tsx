/*  eslint-disable */
import React, { Suspense, useState, useEffect } from 'react';
import { Link, Switch, useHistory, useLocation, Route } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Layout from 'components/Layout/Layout';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ApartmentIcon from '@material-ui/icons/Apartment';
import WorkIcon from '@material-ui/icons/Work';
import AddIcon from '@material-ui/icons/Add';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { List } from '@material-ui/core';
import ListItem from 'components/ListItem/ListItem';
import GroupIcon from '@material-ui/icons/Group';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import routes from './routes';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Box } from '@material-ui/core';

type InnerItems = {
  idInner: number;
  pathInner: string;
  textInner: string;
  icon: JSX.Element;
  isDisabled: boolean;
};
type IRoute = {
  id: number;
  path: string;
  text: string;
  icon: JSX.Element;
  isOpen: boolean;
  handle: () => void;
  innerItems: InnerItems[];
};
export default function Main() {
  const [openCollapseAdUser, setOpenCollapseAdUsers] = useState(false);
  const [openCollapseGroup, setOpenCollapseGroup] = useState(false);
  const [openCollapseNews, setOpenCollapseNews] = useState(false);
  const [openCollapseSchedule, setOpenCollapseSchedule] = useState(false);
  const [openCollapseADGroup, setOpenCollapseADGroup] = useState(false);
  const [openCollapseUsers, setOpenCollapseUsers] = useState(false);
  const [openCollapseNudges, setOpenCollapseNudges] = useState(false);
  const [openCollapseConfig, setOpenCollapseConfig] = useState(false);
  const location = useLocation();
  const history = useHistory();
  // TODO: Create Hook to handle Toggles
  function handleCloseAllCollapse() {
    setOpenCollapseAdUsers(false);
    setOpenCollapseGroup(false);
    setOpenCollapseUsers(false);
    setOpenCollapseNudges(false);
    setOpenCollapseConfig(false);
    setOpenCollapseSchedule(false);
  }
  function handleOpenCollapseUserAdGroup() {
    handleCloseAllCollapse();
    if (!openCollapseAdUser) {
      setOpenCollapseAdUsers(false);
    }
  }
  function handleOpenCollapseGroup() {
    handleCloseAllCollapse();
    if (!openCollapseGroup) {
      setOpenCollapseGroup(false);
    }
  }
  function handleOpenCollapseSchedule() {
    handleCloseAllCollapse();
    if (!openCollapseSchedule) {
      setOpenCollapseSchedule(false);
    }
  }
  function handleOpenCollapseADGroup() {
    handleCloseAllCollapse();
    if (!openCollapseGroup) {
      setOpenCollapseADGroup(false);
    }
  }
  function handleOpenCollapseUsers() {
    handleCloseAllCollapse();
    if (!openCollapseUsers) {
      setOpenCollapseUsers(false);
    }
  }
  function handleOpenCollapseNews() {
    handleCloseAllCollapse();
    if (!openCollapseNews) {
      setOpenCollapseNews(false);
    }
  }
  function handleOpenCollapseNudges() {
    handleCloseAllCollapse();
    if (!openCollapseNudges) {
      setOpenCollapseNudges(true);
    }
  }
  function handleOpenCollapseConfig() {
    handleCloseAllCollapse();
    if (!openCollapseConfig) {
      setOpenCollapseConfig(true);
    }
  }

  const sidebarItems: IRoute[] = [
    {
      id: 1,
      path: '/employees',
      text: 'Empleados',
      icon: <AssignmentIndIcon />,
      isOpen: openCollapseGroup,
      handle: handleOpenCollapseGroup,

      innerItems: [],
    },
    {
      id: 2,
      path: '/departamets',
      text: 'Departamentos',
      icon: <ApartmentIcon />,
      isOpen: openCollapseAdUser,
      handle: handleOpenCollapseUserAdGroup,
      innerItems: [],
    },
    {
      id: 6,
      path: '/jobs',
      text: 'Puestos',
      icon: <WorkIcon />,
      isOpen: openCollapseNews,
      handle: handleOpenCollapseNews,

      innerItems: [],
    },
    {
      id: 8,
      path: '/deducciones',
      text: 'Tipo de deducciones',
      icon: <AnnouncementIcon />,
      isOpen: openCollapseNews,
      handle: handleOpenCollapseNews,

      innerItems: [],
    },
  ];
  useEffect(() => {
    const mainRouter = '/';
    if (location.pathname === mainRouter) {
      history.push('/employees');
    }
  }, []);
  return (
    <Layout
      sidebar={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <List
          disablePadding
          style={{
            paddingTop: 60,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: 40,
          }}
        >
          {sidebarItems.map(({ id, icon, text, path, isOpen, handle, innerItems }) => (
            <React.Fragment key={id}>
              <Box itemType="ol" display="flex" marginLeft={3} alignItems="baseline">
                <Link
                  style={{ textDecoration: 'none' }}
                  to={path}
                  className={
                    isOpen || history.location.pathname.includes(path) ? 'is_open' : 'is_closed'
                  }
                >
                  <ListItem
                    {...{ icon }}
                    selected={history.location.pathname.includes(path)}
                    onClick={handle}
                  >
                    <Box>
                      {text}
                      {innerItems.length > 0 && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                    </Box>
                  </ListItem>
                </Link>
              </Box>
            </React.Fragment>
          ))}
        </List>
      }
    >
      <Suspense fallback={<div />}>
        <Switch>
          {routes.map(({ id, ...rest }) => (
            <Route key={id} {...rest} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  );
}
