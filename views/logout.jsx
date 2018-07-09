var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class Logout extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

              <br/><br/>
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
                          <input type="submit" value="No" formmethod="get" formaction="/post" class="waves-effect waves-light btn-small"/>
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