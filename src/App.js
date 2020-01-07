import React, {Component} from 'react';
import './App.css';

class ContactCard extends Component{
  render(){
    return <div class = "card">
              <h1>Name: {this.props.name}</h1>
              <h1>Mobile Number: {this.props.number}</h1>
              <h1>Email: {this.props.email}</h1>
           </div>
  }
};


function App() {
  return <div>
            <ContactCard name="Anthony" number="347-984-4649" email="anthony@internet.com"/>
            <ContactCard name="Katherine" number="287-365-6969" email="kat@katherin.com"/>
            <ContactCard name="Lizzie" number="907-421-4210" email="liz@email.com"/>
         </div>
}

export default App;
