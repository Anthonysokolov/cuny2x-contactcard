import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

class ContactCard extends Component{
  render(){
    return <div class = "card">
              <h1>Name: {this.props.name}</h1>
              <h1>Mobile Number: {this.props.mobile}</h1>
              <h1>Work Number: {this.props.work}</h1>
              <h1>Email: {this.props.email}</h1>
           </div>
  }
};

ContactCard.propTypes = {
  name:PropTypes.string.isRequired,
  mobile:PropTypes.string.isRequired,
  work:PropTypes.string,
  email:PropTypes.string.isRequired,
}

function App() {
  return <div>
            <ContactCard name="Anthony" mobile="347-984-4649" email="anthony@internet.com"/>
            <ContactCard name="Katherine" mobile="287-365-6969" email="kat@katherin.com"/>
            <ContactCard name="Lizzie" mobile="907-421-4210" work="111-222-3333" email="liz@email.com"/>
         </div>
}

export default App;
