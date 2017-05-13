import React from 'react';
import $ from 'jquery';
import EventListItem from './EventListItem.jsx';
import EventDetail from './EventDetail.jsx';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class EventList extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Upcoming Events:</h3>
        <div className="row">
          {this.props.data.map( (event) => <EventListItem event={event} key={event.name}/> )}           
        </div>
      </div>

    );
  }
}

export default EventList;

            // <Route path="/:id" component={ (props) => { 
            //   const currentEvent = this.props.data.filter((event) => {
            //     return Number(props.match.params.id) === event.id;
            //   });          
            //   return <EventDetail data={currentEvent[0]} {...props} /> 
            // }}/> 
