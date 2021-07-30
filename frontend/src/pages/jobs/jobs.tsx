/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Button,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Loading from '@material-ui/core/CircularProgress';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import NotInterestedSharpIcon from '@material-ui/icons/NotInterestedSharp';
import SegmentList from './List';
const Trabajos = () => {
  const [isEvent, setIsEvent] = useState({ checked: false });
  const [makeSearch, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [send, setSendig] = useState<boolean>();
  const [find, setFind] = useState<string>('');
  const history = useHistory();
  const queques = useSnackbar();

  return (
    <Box marginLeft={4}>
      <Box
        marginLeft={4}
        padding={1}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Box flexGrow={2}>
          <Box paddingTop={2}>
            <Typography style={{ color: '#1F3C73' }} variant="h4">
              Empleos
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          marginTop={1}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          marginBottom={2}
        >
          <Box display="flex" flexDirection="row" flexWrap="nowrap">
            <Box display="flex" gridGap={10}>
              <IconButton style={{ backgroundColor: '#fff' }} size="medium">
                <Tooltip title="Agregar">
                  <AddBoxOutlinedIcon color="primary" fontSize="large" />
                </Tooltip>
              </IconButton>
              <IconButton style={{ backgroundColor: '#fff' }} size="medium">
                <Tooltip title="Notificar segmentos">
                  <NotificationsNoneOutlinedIcon fontSize="large" />
                </Tooltip>
              </IconButton>
              <IconButton
                style={{ backgroundColor: '#fff' }}
                size="medium"
                disableFocusRipple
                disableRipple
              >
                <Tooltip title="Agregar evento">
                  <EventOutlinedIcon fontSize="large" />
                </Tooltip>
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default Trabajos;
