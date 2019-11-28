import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Error from './error';
import Header from '../components/Nav/header';
import CreateEmployee from '../components/Admin/createEmployee';
import UserLogin from './../components/Admin/userlogin';

const Main = () => {
	return (
	  <div>
		<Header />
		<Switch>
			<Route exact path={"/"} component={UserLogin} />
		  	<Route exact path={"/create-emp"} component={CreateEmployee} />
		  	<Route component={Error}/>
		</Switch>
	  </div>
	)
  }
  
  export default Main;