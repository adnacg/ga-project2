var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');


class Login extends React.Component {
    render() {

        return (

            <LayoutContainer>

                  <ParallaxContainer>
                    <div class="section no-pad-bot">
                      <div class="container">
                        <h3 class="header center text-lighten-2">LOGIN</h3>
                        <div class="row center">
                          <h6 class="header col s12 light">Enter your email and password to login</h6>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/login.jpg" alt="img1" /></div>
                  </ParallaxContainer>

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