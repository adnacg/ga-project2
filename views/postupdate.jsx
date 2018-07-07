var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class PostUpdate extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

                <div class="container">
                <form class="col s12" method="post" action={"/post/" + this.props.post.id + "/update"}>
                <input type="hidden" name="_method" defaultValue="put" />
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="location" type="text" name="location" class="validate" value={this.props.post.location} />
                      <label for="location">Location</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="pax" type="text" name="pax" class="validate" value={this.props.post.pax} />
                      <label for="pax">Pax</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="availability" type="text" name="availability" class="validate" value={this.props.post.availability} />
                      <label for="availability">Availability</label>
                    </div>
                  </div>
                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="skill" type="text" name="skill" class="validate" value={this.props.post.skill} />
                      <label for="skill">Skill</label>

                    </div>
                  </div>

                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <input id="instrument" type="text" name="instrument" class="validate"/>
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
                    <div id="my-input-box" class="input-field col s12">
                      <input id="genre" type="text" name="genre" class="validate"/>
                      <label for="genre">Genre</label>
                    </div>
                  </div>

                  <div class="row">
                    <div id="my-input-box" class="input-field col s12">
                      <textarea id="message" class="materialize-textarea" name="message">{this.props.post.message}</textarea>
                      <label for="message">Describe Your Jam</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Describe what you are looking for here.</span>
                    </div>
                  </div>

                  <input class="waves-effect waves-light btn s12" type="submit" value="Update!" />
                </form>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = PostUpdate;