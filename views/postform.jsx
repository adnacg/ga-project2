var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class Postform extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>

                  <ParallaxContainer>
                    <div class="section no-pad-bot">
                      <div class="container">
                        <h3 class="header center text-lighten-2">POST A JAM</h3>
                        <div class="row center">
                          <h6 class="header col s12 light"><strong>Connect with your fellow musicians today</strong></h6>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/createpost.jpg" alt="img1" /></div>
                  </ParallaxContainer>

                  <br/><br/>

                <div class="container">
                <form class="col s12" method="POST" action="/post/new">
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="location" type="text" name="location" required/>
                      <label for="location">Location</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="pax" type="text" name="pax" required/>
                      <label for="pax">Pax</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="availability" type="text" name="availability" required/>
                      <label for="availability">Availability</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="skill" type="text" name="skill" required/>
                      <label for="skill">Skill</label>

                    </div>
                  </div>

                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="instrument" type="text" name="instrument" required/>
                      <label for="instrument">Instrument</label>
                      <p>
                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>

                        <label>
                          <input type="checkbox" />
                          <span>Guitar</span>
                        </label>
                      </p>

                    </div>
                  </div>

                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <input id="genre" type="text" name="genre" required/>
                      <label for="genre">Genre</label>
                    </div>
                  </div>

                  <div class="row">
                    <div id="my-input-box" class="input-field col s12 m6 offset-m3">
                      <textarea id="message" class="materialize-textarea" name="message" required></textarea>
                      <label for="message">Describe Your Jam</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Describe what you are looking for here.</span>
                    </div>
                  </div>

                  <div class="row">
                  <div class="col s12 m6 offset-m3">
                    <input class="waves-effect waves-light btn s12 right" type="submit" value="Post!" />
                  </div>
                  </div>

                  <br/><br/><br/><br/><br/>
                </form>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = Postform;