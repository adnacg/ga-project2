var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Request extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

              <div class="container">

                <div class="col s12 m6 center">
                  <div>
                    <div id="my-card" class="card">
                      <div class="card-content">
                        <span class="card-title">{this.props.request[0].name}</span>
                        <p>has requested to join your jam at</p>
                        <p><i class="material-icons"> location_on </i>{this.props.request[0].location}</p>
                      </div>
                      <div class="card-action">
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/user/" + this.props.request[0].requester_id}>Profile</a>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/request/" + this.props.request[0].id + "/accept"}>Accept</a>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/request/" + this.props.request[0].id + "/decline"}>Decline</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col s12 m6 center">
                  <div>
                    <div id="my-card" class="card">
                      <div class="card-content">
                        <span class="card-title">{this.props.request[1].name}</span>
                        <p>has requested to join your jam at</p>
                        <p><i class="material-icons"> location_on </i>{this.props.request[1].location}</p>
                      </div>
                      <div class="card-action">
                        <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/user/" + this.props.request[1].id}>Profile</a>
                        &nbsp;&nbsp;&nbsp;
                        <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/request/" + this.props.request[1].post_id + "/accept"}>Accept</a>
                        &nbsp;&nbsp;&nbsp;
                        <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/request/" + this.props.request[1].post_id + "/decline"}>Decline</a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>




            </LayoutContainer>

        );
    }
}

module.exports = Request;