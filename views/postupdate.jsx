var React = require("react");
var LayoutContainer = require("./layout/main.jsx");
var ParallaxContainer = require("./layout/parallax.jsx");

class PostUpdate extends React.Component {
  render() {
    return (
      <LayoutContainer
        user_id={this.props.user_id}
        messages={this.props.messages}
      >
        <br />
        <br />
        <br />

        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m3 center">
              <form
                class="col s12"
                method="post"
                action={"/post/" + this.props.post.id + "/update"}
              >
                <input type="hidden" name="_method" defaultValue="put" />

                <h5 id="my-yellow-text">Update Your Jam</h5>
                <br />
                <br />

                <div class="row">
                  <div id="my-input-box" class="input-field col s12">
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={this.props.post.location}
                      required
                    />
                    <label for="location">Location</label>
                  </div>
                </div>
                <div class="row">
                  <div id="my-input-box" class="input-field col s12">
                    <input
                      id="pax"
                      type="text"
                      name="pax"
                      value={this.props.post.pax}
                      required
                    />
                    <label for="pax">Pax</label>
                  </div>
                </div>
                <div class="row">
                  <div id="my-input-box" class="input-field col s12">
                    <input
                      id="availability"
                      type="text"
                      name="availability"
                      value={this.props.post.availability}
                      required
                    />
                    <label for="availability">Availability</label>
                  </div>
                </div>
                <div class="row">
                  <div id="my-input-box" class="input-field col s12">
                    <input
                      id="skill"
                      type="text"
                      name="skill"
                      value={this.props.post.skill}
                      required
                    />
                    <label for="skill">Skill</label>
                  </div>
                </div>

                <div class="row">
                  <div id="my-input-box" class="input-field col s12">
                    <input
                      id="instrument"
                      type="text"
                      name="instrument"
                      required
                    />
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
                    <input id="genre" type="text" name="genre" required />
                    <label for="genre">Genre</label>
                  </div>
                </div>

                <div class="row">
                  <div id="my-input-box" class="input-field col s12">
                    <textarea
                      id="message"
                      class="materialize-textarea"
                      name="message"
                      required
                    >
                      {this.props.post.message}
                    </textarea>
                    <label for="message">Describe Your Jam</label>
                    <span
                      class="helper-text left"
                      data-error="wrong"
                      data-success="right"
                    >
                      Describe what you are looking for here.
                    </span>
                  </div>
                </div>

                <input
                  class="waves-effect waves-light btn s12 right"
                  type="submit"
                  value="Update!"
                />
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </LayoutContainer>
    );
  }
}

module.exports = PostUpdate;
