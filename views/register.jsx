var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class Register extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

                  <ParallaxContainer>
                    <div class="section no-pad-bot">
                      <div class="container">
                        <h3 class="header center text-lighten-2">REGISTER</h3>
                        <div class="row center">
                          <h6 class="header col s12 light"><strong>Join the amazing community for musicians today</strong></h6>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/register.jpg" alt="img1" /></div>
                  </ParallaxContainer>

                <div class="container">
                <form class="col s12" method="POST" action="/user/register">
                  <br/><br/>

                  <div class="row">
                    <div class="col s12 m6 offset-m3">

                      <h5 id="my-yellow-text">GENERAL INFORMATION</h5>
                      <br/><br/>

                      <div class="row">
                        <div id="my-input-box" class="input-field col s12">
                          <input id="name" type="text" name="name" required/>
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div class="row">
                        <div id="my-input-box" class="input-field col s12">
                          <input id="email" type="email" name="email" required/>
                          <label for="email">Email</label>
                        </div>
                      </div>
                      <div class="row">
                        <div id="my-input-box" class="input-field col s12">
                          <input id="password" type="password" name="password" required/>
                          <label for="password">Password</label>
                        </div>
                      </div>
                      <div class="row">
                        <div id="my-input-box" class="input-field col s12">
                          <textarea id="textarea1" class="materialize-textarea" name="bio" required></textarea>
                          <label for="textarea1">Describe Yourself</label>
                          <span class="helper-text" data-error="wrong" data-success="right">Describe yourself so your fellow musicians get to know you! eg. What other musical talent you posses that are not listed here?</span>
                        </div>
                      </div>
                      <input class="waves-effect waves-light btn s12 right" type="submit" value="Register" />

                    </div>
                  </div>

                </form>
              </div>
              <br/><br/><br/><br/><br/>

            </LayoutContainer>

        );
    }
}

module.exports = Register;