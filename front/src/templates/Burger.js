
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useDispatch } from 'react-redux';
import { getCategoryData } from '../../actions/productActions';
import SideBar from '../../screens/accounts/SideBar';

export default function Burger() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCategoryData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='burger' onClick={toggleDrawer(anchor, true)}>
            <p className='line'></p>
            <p className='line'></p>
            <p className='line'></p>
          </div>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div onClick={toggleDrawer(anchor, false)}>
              <SideBar filterSideBarClass="filterDiv col-1" />
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

