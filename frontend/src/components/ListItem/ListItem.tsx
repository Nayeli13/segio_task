import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import ListeItemMui from '@material-ui/core/ListItem';

type IListItem = {
  text?: React.ReactElement | string;
  icon: React.ReactElement;
  selected: boolean;
  children: React.ReactElement | string;
  onClick?: () => void;
};

const useStyles = makeStyles({
  itemText: {
    '&, & *': {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      color: '#777576 !important',
    },
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  icon: {
    color: '#000000   ',
  },
  selected: {
    '& *': { color: '#00661a !important' },
  },
});
const ListItem: React.FC<IListItem> = ({ text = '', icon, selected, children, ...rest }) => {
  const classes = useStyles();
  const itemClasses = clsx(classes.itemText, { [classes.selected]: selected });
  const iconClasses = clsx(classes.icon, { [classes.selected]: selected });
  return (
    <ListeItemMui alignItems="center" ContainerComponent="span" selected={selected} {...rest}>
      {icon && <ListItemIcon className={iconClasses}>{icon}</ListItemIcon>}
      <ListItemText className={itemClasses}>{text || children}</ListItemText>
    </ListeItemMui>
  );
};
ListItem.defaultProps = {
  text: '',
};
export default ListItem;
