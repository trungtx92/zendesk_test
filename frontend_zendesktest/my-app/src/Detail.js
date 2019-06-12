import React, {Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

class Detail extends Component{
    constructor(){
        super();
    }


    render(){
        let id = null
        let url = null
        let created_at = null
        let updated_at = null
        let subject = null
        let description = null
        let status = null
        var detailUI = <div></div>
        if(this.props.location.data != null){
            id = this.props.location.data.id
            url = this.props.location.data.url
            created_at = this.props.location.data.created_at
            updated_at = this.props.location.data.updated_at
            subject = this.props.location.data.subject
            description = this.props.location.data.description
            status = this.props.location.data.status
            detailUI = <div className="ticketForm">
                            <div className=" table ticketItem" key={id} >
                                <div className="row span-1-of-3">
                                    <strong>Id:</strong><p> {id}</p><br/>
                                    <strong>Url: </strong><p> {url}</p><br/>
                                    <strong>Create At: </strong><p> {created_at}</p><br/>
                                    <strong>Update At: </strong><p> {updated_at}</p><br/>
                                    <strong>Subject: </strong><p>{subject}</p><br/>
                                    <strong>Description: </strong><p>{description}</p><br/>
                                    <strong>Status: </strong><p>{status}</p><br/>
                                    
                                </div>
                                <Link className="anchors" to="/">Back To All Tickets</Link>
                            </div>
                        </div>
        }
        else {
            detailUI = <h3>ERROR!!!----> Need to choose a Ticket!!</h3>
        }
        return(
            <div>
                <Header/>
                {detailUI}
            </div>
        )
    }  
}

export default Detail;