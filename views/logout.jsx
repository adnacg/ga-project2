var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Logout extends React.Component {

    render() {

        return (

            <LayoutContainer>

              <div class="container">
                <form method="post" action="/user/logout">
                <div class="col s12 m6 center">
                    <div>
                      <div id="my-card" class="card">
                        <div class="card-content">
                          <span class="card-title">Log out of your profile?</span>
                        </div>
                        <div class="card-action">
                          <input type="submit" value="Yes" class="waves-effect waves-light btn-small"/>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/post">No</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>



            </LayoutContainer>

        );
    }
}

module.exports = Logout;