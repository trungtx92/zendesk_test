import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {tickets:[], error: false}
  }

  //a
  componentDidMount(){
    fetch('http://localhost/backend_zendesktest/api.php')
            .then(response =>  response.json())
            .then(json => this.setState({tickets: json.tickets}))
            .catch(error => this.setState({error: true}))
  }


  render(){
    var ticketsUI = <div></div>
    if(this.state.error === true){
      ticketsUI = <h3>Error: Couldn't authenticate you</h3>
    }
    else{
      ticketsUI = <div className="ticketForm">
      {
        this.state.tickets.map(ticket => {
          const {id, url, subject, description, status, created_at, updated_at} = ticket;
          return (
              <div className=" table ticketItem" key={id} >
                      <div className="row span-1-of-3">
                          <strong>Id:</strong><p> {id}</p><br/>
                          <strong>Subject: </strong><p>{subject}</p><br/>
                          
                      </div>
                      <Link className="anchors" to={{
                        pathname: '/detail',
                        data: {
                                id: id, 
                                url:url, 
                                created_at: created_at,
                                updated_at: updated_at,
                                subject: subject,
                                description: description,
                                status: status,
                            }
                      }}>Detail</Link>
              </div>
          )
        })
      }
      </div>
    }
    return(
      
      <div>
        <Header/>
        {ticketsUI}
      </div>
    )
  }
}


export default App;
