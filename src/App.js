import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Compoenets/Header/Header';
import SideBar from './Compoenets/Sidebar/Sidebar'
import HomeScreen from './HomeScreen/HomeScreen';
function App() {
  return (
    <>
        <Header/>
        <div className="app__container border border-info">
          <SideBar/>
          <Container fluid className="app__main border border-warning">
            <HomeScreen/>
          </Container>
        </div>
    </>
  );
}

export default App;
