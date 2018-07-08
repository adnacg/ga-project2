var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Register extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

                <div class="container">
                <form class="col s12" method="POST" action="/user/register">
                  <h6 id="my-yellow-text">General Information</h6>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="name" type="text" name="name" class="validate"/>
                      <label for="name">Your Name</label>
                    </div>
                  </div>
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
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <textarea id="textarea1" class="materialize-textarea" name="bio"></textarea>
                      <label for="textarea1">Describe Yourself</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Describe yourself so your fellow musicians get to know you! eg. What other musical talent you posses that are not listed here?</span>
                    </div>
                  </div>
                  <input class="waves-effect waves-light btn s12" type="submit" value="Submit" />
                </form>
              </div>
              <br/><br/><br/><br/><br/>

            </LayoutContainer>

        );
    }
}

module.exports = Register;