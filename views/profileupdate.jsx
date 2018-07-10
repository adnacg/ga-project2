var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class ProfileUpdate extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>
            <br/><br/><br/>

              <div class="container">
              <div class="row">
              <div class="col s12 m6 center offset-m3">

                <form class="col s12" method="post" action={"/user/" + this.props.user_id}>
                <input type="hidden" name="_method" defaultValue="put" />
                  <h5 id="my-yellow-text">Update Your Profile</h5>
                  <br/><br/>

                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="name" type="text" name="name" value={this.props.user.name} />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="email" type="email" name="email" value={this.props.user.email}/>
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <textarea id="textarea1" class="materialize-textarea" name="bio">{this.props.user.bio}</textarea>
                      <label for="textarea1">Describe Yourself</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Describe yourself so your fellow musicians get to know you! eg. What other musical talent you posses that are not listed here?</span>
                    </div>
                  </div>
                  <input class="waves-effect waves-light btn s12 right" type="submit" value="Update" />
                </form>

                <form class="delete-acc col s12 center" method="post" action={"/user/" + this.props.user_id}>
                <div class="right">
                  <input type="hidden" name="_method" value="delete" />
                  <h6 id="my-yellow-text">Delete My Account</h6>
                  <input class="waves-effect waves-light btn s12" type="submit" value="Delete" />
                </div>
                  <br/><br/><br/><br/><br/>
                </form>

              </div>
              </div>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = ProfileUpdate;