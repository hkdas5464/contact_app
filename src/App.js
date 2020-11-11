import './App.scss';
import NavBar from './Components/Navbar';
import Table from './Components/Contacts/Table';
import Store from './Store/Store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContacts';

function App() {
  return (
    <Provider store={Store}>
      <Router>
   <div>
     <NavBar/>
     <div></div>
     <Switch>
       <Route exact path="/" component={Table}/>
       <Route exact path="/addcontact" component={AddContact}/>
       <Route exact path="/contacts/edit/:id" component={EditContact}/>
     </Switch>
    
   </div>
   </Router>
   </Provider>
  );
}

export default App;
