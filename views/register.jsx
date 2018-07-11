var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class Register extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>

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

                  <div class="row center">
                    <div id="my-input-box" class="input-field col s12">
                      <p>Select the instrument/s that you play :</p>
                      <p class="selector-box">
                        <label>
                          <input type="checkbox" id="instrument" name="guitar"/>
                          <span class="individual-label">Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="bass"/>
                          <span class="individual-label">Bass</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="ukulele"/>
                          <span class="individual-label">Ukulele</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="drums"/>
                          <span class="individual-label">Drums</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="piano"/>
                          <span class="individual-label">Piano</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="keyboard" />
                          <span class="individual-label">Keyboard</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="xylophone"/>
                          <span class="individual-label">Xylophone</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="percussion"/>
                          <span class="individual-label">Percussion</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="banjo"/>
                          <span class="individual-label">Banjo</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="violin"/>
                          <span class="individual-label">Violin</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="cello" />
                          <span class="individual-label">Cello</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="trumpet"/>
                          <span class="individual-label">Trumpet</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="saxophone"/>
                          <span class="individual-label">Saxophone</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="vocal"/>
                          <span class="individual-label">Vocal</span>
                        </label>

                        <label>
                          <input type="checkbox" id="instrument" name="other"/>
                          <span class="individual-label">Other</span>
                        </label>
                      </p>

                    </div>
                  </div>

                  <div class="row center">
                    <div id="my-input-box" class="input-field col s12">
                      <p>Select the genre/s of music that you play :</p>
                      <p class="selector-box">
                        <label>
                          <input type="checkbox" id="genre" name="jazz"/>
                          <span class="individual-label">Jazz</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="blues"/>
                          <span class="individual-label">Blues</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="soul"/>
                          <span class="individual-label">Soul</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="reggae"/>
                          <span class="individual-label">Reggae</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="indie"/>
                          <span class="individual-label">Indie</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="classical"/>
                          <span class="individual-label">Classical</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="country"/>
                          <span class="individual-label">Country</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="hiphop"/>
                          <span class="individual-label">Hip Hop</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="rb"/>
                          <span class="individual-label">R&B</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="latin"/>
                          <span class="individual-label">Latin</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="rock"/>
                          <span class="individual-label">Rock</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="metal"/>
                          <span class="individual-label">Metal</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="altrock"/>
                          <span class="individual-label">Alt Rock</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="pop"/>
                          <span class="individual-label">Pop</span>
                        </label>

                        <label>
                          <input type="checkbox" id="genre" name="other"/>
                          <span class="individual-label">Other</span>
                        </label>
                      </p>
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