var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Login extends React.Component {
    render() {

        return (

            <LayoutContainer>

                <div class="container">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate"/>
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate"/>
                      <label for="password">Password</label>
                    </div>
                  </div>

                  <a class="waves-effect waves-light btn s12">LOGIN</a>
                  <p>New to Jamaway? Create an account <a href="">here</a>.</p>
                </form>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = Login;