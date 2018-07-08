var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Login extends React.Component {
    render() {

        return (

            <LayoutContainer>

                <div class="container">
                <form class="col s12" method="post" action="/user/login">
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="email" type="email" name="email" class="validate"/>
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="password" type="password" name="password" class="validate"/>
                      <label for="password">Password</label>
                    </div>
                  </div>

                  <input class="waves-effect waves-light btn s12" type="submit" value="Login" />
                  <p id="my-yellow-text">New to Jamaway? Create an account <a id="my-yellow-text" href="/user/register">here</a>.</p>
                </form>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = Login;