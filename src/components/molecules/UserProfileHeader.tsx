import {makeStyles} from '@material-ui/core/styles';
import {onLinkColor, onLinkColorHover} from '../../style/_globals';
import Text, {TextType} from "../atoms/Text";
import React, {useEffect} from "react";
import {useStore} from '../../store/storeConfig';
import RootStore from '../../store/root.store';



const LINK = `${process.env.REACT_APP_BASE_URL}/auth/logout`;


const useStyles = makeStyles({
  link: {
    color: `${onLinkColor}`,
    textDecoration: 'none',
    '&:hover': {
      color: `${onLinkColorHover}`,
    },
    cursor: 'pointer',
  },
  profile:
    {
      color:"black"
    }
});

interface IUserProfileHeader {
  name: string
}
const UserProfileHeader  :React.FC<IUserProfileHeader> = ({name})=>{
  const classes = useStyles();

  return(
    <div className={classes.profile}>
    <a className={classes.link}  href={LINK}>
      <Text type={TextType.CONTENT_TITLE} >LOGOUT</Text>
    </a>
      <Text  type={TextType.CONTENT_TITLE}>{`שלום ${name}`}</Text>
    </div>
  )
}

export  default UserProfileHeader;
