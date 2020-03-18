import React, {FunctionComponent} from 'react'
import {INewsFlash} from '../models/NewFlash'
import WidgetsTemplate from '../components/templates/WidgetsTemplate'
import {Box} from '@material-ui/core'
import {SideBar} from '../components/templates/SideBar'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {RouteComponentProps} from 'react-router';

interface IProps {
    getNewsflash: Function
}

const useStyles = makeStyles({
  mainBox: {
    height: 'inherit'
  },
  sideBarBox: {
    height: 'inherit',
    overflow: 'auto'
    
  },
  widgetBox: {
    height: 'inherit',
    overflow: 'auto'
  }
});

const HomePage: FunctionComponent<IProps & RouteComponentProps> = ({match, getNewsflash}) => {
  const classes = useStyles();
  const id = (match.params as {id: string}).id;
//   const newsFlash:INewsFlash = getNewsflash(id)
  return (
    <Box display='flex' flexGrow={1} className={classes.mainBox}>
      <Box flexBasis={300} flexShrink={0} className={classes.sideBarBox}>
        <SideBar/>
      </Box>
      <Box flexGrow={1} className={classes.widgetBox}>
        <WidgetsTemplate/>
      </Box>
    </Box>
  )
};

export default HomePage
