import React from 'react';
import { Button, Divider, Label, makeStyles, MenuItem, MenuList} from '@fluentui/react-components';
import { Link } from 'react-router-dom';
import {INavBarInfo} from './types/Navbar';
import { AppItem, NavDrawerBody, NavItem } from '@fluentui/react-nav-preview';
import { Home20Regular, Info20Regular, PaddingTop20Filled, Settings20Regular } from '@fluentui/react-icons';

interface NavBarProps {
  navBarInfo: INavBarInfo; 
}

const styles = makeStyles({
  parent : { 
    display:'flex',
    flexDirection:'column',
    height:'100%'
  },
  footer:{
    flexShrink:0,
    marginTop:'auto'
  },
  navLinks:{
    listStyle:'none'
  }
});



const Navbar: React.FC<NavBarProps> = ({navBarInfo}) => {
  const cssClass = styles();
  
  const getSimpleNavBar = (navBarInfo:INavBarInfo) =>{
    return (
      <>
      <Label  size='large'>
          <navBarInfo.appInfo.icon style={{'verticalAlign':'bottom', 'paddingRight':'5px'}}/>
          {navBarInfo.appInfo.title}
      </Label>
      <br/>
      <header>
        <Label  size='large'>
          <navBarInfo.header.icon style={{'verticalAlign':'bottom', 'paddingRight':'5px'}}/>
          {navBarInfo.header.title}
        </Label>
        {
          navBarInfo.header.items.map((item, index) =>{
            return <MenuItem key={index} >
                      <item.icon />
                      <Link to={item.url}>{item.title}</Link>
                    </MenuItem>
          })
        }
        <Divider inset appearance='strong' style={{ margin: '17px 0 0 0', padding:0 }}/>
      </header>

      <div className="navbar-body">
        <Label  size='large'>
          <navBarInfo.body.icon style={{'verticalAlign':'bottom', 'paddingRight':'5px'}}/>
          {navBarInfo.body.title}
        </Label>
        {
          navBarInfo.body.items.map((bi,index) => {
            return <MenuItem key={index}>
            <bi.icon />
            <Link to={bi.url}>{bi.title}</Link>
          </MenuItem>
          })
        }
        {/* <Menu>
          <MenuList>
            <MenuItem>Section 1</MenuItem>
            <MenuItem>Section 2</MenuItem>
            <MenuItem>Section 3</MenuItem>
          </MenuList>
        </Menu> */}
      </div>
      <footer  className={cssClass.footer}>
        {/* <Label  size='large'>Navbar Footer</Label>
        <br/>
        <Label  size='small'>lorem ipsum</Label> */}

        <Divider inset appearance='strong' style={{ margin: '17px 0 0 0', padding:0 }}/>
        <Label  size='large'>
          <navBarInfo.footer.icon style={{'verticalAlign':'bottom', 'paddingRight':'5px'}}/>
          {navBarInfo.footer.title}
        </Label>
        {
          navBarInfo.footer.items.map((item, index) =>{
            return <MenuItem key={index}>
                      <item.icon />
                      <Link to={item.url}>{item.title}</Link>
                    </MenuItem>
          })
        }

      </footer>
      </>
    );
  }

  const getNavBarInfoBtn = (navBarInfo:INavBarInfo) =>{
    return(
      <>
      <Button onClick={()=>{console.log(navBarInfo)}}> See NavInfo</Button>
      </>
    )
  }

  return (
    <div className={cssClass.parent}>
      {getSimpleNavBar(navBarInfo)}
      {getNavBarInfoBtn(navBarInfo)}
    </div>
  );
}

export default Navbar;
