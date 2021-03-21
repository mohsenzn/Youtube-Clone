import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Compoenets/Header/Header";
import SideBar from "./Compoenets/Sidebar/Sidebar";
import HomeScreen from "./HomeScreen/HomeScreen";
import LoginScreen from "./HomeScreen/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSideBar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container ">
        <SideBar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <HomeScreen />
            </Layout>
          </Route>
          <Route path="/auth">
            <LoginScreen />
          </Route>
          <Route path="/search">
            <Layout>
              <h1>search </h1>
            </Layout>
          </Route>
          <Route>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
