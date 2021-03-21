import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Compoenets/Header/Header';
import SideBar from './Compoenets/Sidebar/Sidebar'
import HomeScreen from './HomeScreen/HomeScreen';
import LoginScreen from './HomeScreen/LoginScreen/LoginScreen';
function App() {

  const [sidebar,toggleSidebar] = useState(false)

  const handleToggleSideBar = () => toggleSidebar(value => !value);
  return (
    <>
        {/* <Header handleToggleSideBar={handleToggleSideBar}/>
        <div className="app__container border border-info">
          <SideBar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar}/>
          <Container fluid className="app__main border border-warning">
            <HomeScreen/>
          </Container>
        </div> */}
        <LoginScreen/>
    </>
  );
}

export default App;
