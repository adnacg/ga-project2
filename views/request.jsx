var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class Request extends React.Component {

    render() {

        const arrayOfRequests = this.props.requests.map( function(currentRequest) {
            return (

              <div key={currentRequest.id} id="my-card" class="card">
                <div class="card-content">
                  <span class="card-title">{currentRequest.name}</span>
                  <p>has requested to join your jam at</p>
                  <p><i class="material-icons"> location_on </i>{currentRequest.location}</p>
                </div>
                <div class="card-action">
                    <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/user/" + currentRequest.requester_id}>Profile</a>
                    &nbsp;&nbsp;&nbsp;
                    <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/request/" + currentRequest.id + "/accept"}>Accept</a>
                    &nbsp;&nbsp;&nbsp;
                    <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/request/" + currentRequest.id + "/decline"}>Decline</a>
                </div>
              </div>

            );
        });

        return (

            <LayoutContainer user_id={this.props.user_id}>

              <br/><br/><br/>

              <div class="container">
                <div class="col s12 m6 center">
                    {arrayOfRequests.length > 0 ? (<div>{arrayOfRequests}</div>) : (<div id="my-yellow-text"><h4>Sorry, no requests came in yet :(</h4><br/>Why not try to find a jamming partner from our extensive list?<br/><br/><a class="waves-effect waves-light btn-small" href="/post">Let's do it!</a><br/><br/><br/><br/><br/></div>)}
                </div>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = Request;