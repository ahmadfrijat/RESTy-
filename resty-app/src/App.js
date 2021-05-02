import React from 'react';
import './app.scss';
import Header from './Header.js';
import Form from './Form.js';
import Footer from './Footer.js';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
