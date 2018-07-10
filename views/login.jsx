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
                          <h6 class="header col s12 light"><strong>Enter your email and password to login</strong></h6>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/login.jpg" alt="img1" /></div>
                  </ParallaxContainer>

                  <br/><br/>

                <div class="container">
                <form class="col s12" method="post" action="/user/login">

                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="email" type="email" name="email" required/>
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="password" type="password" name="password" required/>
                      <label for="password">Password</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col s12 m6 offset-m3">
                      <input class="right waves-effect waves-light btn s12" type="submit" value="Login" /><br/><br/>
                      <p id="my-yellow-text" class="right">New to Jam Away? Create an account <a id="my-yellow-text" class="underlined" href="/user/register">here</a>.</p>
                    </div>
                  </div>

                </form>
              </div>
              <br/><br/><br/><br/><br/>

            </LayoutContainer>

        );
    }
}

module.exports = Login;