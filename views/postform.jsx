var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Postform extends React.Component {
    render() {

        return (

            <LayoutContainer>

                <div class="container">
                <form class="col s12" method="POST" action="/post/new">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="location" type="text" name="location" class="validate"/>
                      <label for="location">Location</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="pax" type="text" name="pax" class="validate"/>
                      <label for="pax">Pax</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="availability" type="text" name="availability" class="validate"/>
                      <label for="availability">Availability</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="skill" type="text" name="skill" class="validate"/>
                      <label for="skill">Skill</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="instrument" type="text" name="instrument" class="validate"/>
                      <label for="instrument">Instrument</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="genre" type="text" name="genre" class="validate"/>
                      <label for="genre">Genre</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="message" class="materialize-textarea" name="message"></textarea>
                      <label for="message">Describe Your Jam</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Describe what you are looking for here.</span>
                    </div>
                  </div>

                  <input class="waves-effect waves-light btn s12" type="submit" value="Post!" />
                </form>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = Postform;