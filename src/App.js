import React, {useEffect, useState} from 'react';
import {Route} from "react-router-dom";
import axios from "axios";


//import components
import {Header} from './components'
import {Home, Cart} from './pages'



function App() {
    const [pizza, setPizza] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizza(data.pizza);
        });
    }, []);

  return (
      <div className="wrapper">
        <Header />
        <div className="content">
            <Route exact path="/" render={() => <Home items={pizza} />} />
            <Route exact path="/cart" component={Cart} />
        </div>
      </div>
  );
}

export default App;
