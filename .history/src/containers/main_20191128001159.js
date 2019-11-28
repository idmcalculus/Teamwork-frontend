import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../components/Nav/Header';
import CreateEmployee from '../components/Admin/CreateEmployee';

const Main = () => {
	return (
	  <div>
		<Header />
		<Switch>
		  <Route exact path={"/create-emp"} component={CreateEmployee} />
		  <Route component={Error}/>
		</Switch>
	  </div>
	)
  }
  
  export default Main;