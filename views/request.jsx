var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Request extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

              <div class="container">
                <div class="row">
                  <div id="my-card" class="card-panel center">
                    <i class="material-icons"> location_on </i>Holland<br/><br/>
                    <a id="my-music-card" class="btn-small">Clotilde</a>&nbsp;&nbsp;&nbsp;<a id="my-music-card" class="btn-small">Accepted</a>
                  </div><br/>
                </div>
              </div>


              <div class="container">

                <div class="col s12 m6 center">
                  <div>
                    <div id="my-card" class="card">
                      <div class="card-content">
                        <span class="card-title">CYRILL</span>
                        <p>has requested to join your jam at</p>
                        <p><i class="material-icons"> location_on </i>Orchard</p>
                      </div>
                      <div class="card-action">
                          <a id="my-action-btn" class="waves-effect waves-light btn-small">Profile</a>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/request/1/accept">Accept</a>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/request/1/decline">Decline</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col s12 m6 center">
                  <div>
                    <div id="my-card" class="card">
                      <div class="card-content">
                        <span class="card-title">YEN</span>
                        <p>has requested to join your jam at</p>
                        <p><i class="material-icons"> location_on </i>Orchard</p>
                      </div>
                      <div class="card-action">
                        <a id="my-action-btn" class="waves-effect waves-light btn-small">Profile</a>
                        &nbsp;&nbsp;&nbsp;
                        <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/request/1/accept">Accept</a>
                        &nbsp;&nbsp;&nbsp;
                        <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/request/1/accept">Decline</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col s12 m6 center">
                  <div>
                    <div id="my-card" class="card">
                      <div class="card-content">
                        <span class="card-title">NANA</span>
                        <p>has requested to join your jam at</p>
                        <p><i class="material-icons"> location_on </i>Orchard</p>
                      </div>
                      <div class="card-action">
                        <a id="my-action-btn" class="waves-effect waves-light btn-small">Profile</a>
                        &nbsp;&nbsp;&nbsp;
                        <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/request/1/accept">Accept</a>
                        &nbsp;&nbsp;&nbsp;
                        <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/request/1/accept">Decline</a>
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