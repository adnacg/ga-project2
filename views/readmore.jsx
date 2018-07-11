var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
const Timestamp = require('react-timestamp');
var ParallaxContainer = require('./layout/parallax.jsx');

class Readmore extends React.Component {

    render() {

        const arrayOfGenres = this.props.genres.map( function(currentGenre) {
            return (
                <a id="my-small-text-card" class="btn-small">{currentGenre.name}</a>
            )
        });

        const arrayOfInstruments = this.props.instruments.map( function(currentInstruments) {
            return (
                <a id="my-small-text-card" class="btn-small">{currentInstruments.name}</a>
            )
        });

        return (

            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>

              <br/><br/><br/>

                <div class="container">

                  <form class="col s12" method="POST" action={"/post/" + this.props.post.id}>

                  <div class="row">
                    <div class="col s12 m6 offset-m3">
                      <h5 id="my-yellow-text" class="center">About {this.props.post.name}'s Jam</h5>
                      <div class="my-timestamp center">
                        Posted on: <Timestamp time={this.props.post.post_time} format='full' />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col s12 m8 offset-m2">
                      <table id="my-yellow-text" class="centered">
                        <tbody>
                          <tr>
                            <td>Bio</td>
                            <td><div id="my-card" class="card-panel center">{this.props.post.bio}</div></td>
                          </tr>
                          <tr>
                            <td>Location</td>
                            <td><div id="my-card" class="card-panel center">{this.props.post.location}</div></td>
                          </tr>
                          <tr>
                            <td>Pax</td>
                            <td><div id="my-card" class="card-panel center">{this.props.post.pax}</div></td>
                          </tr>
                          <tr>
                            <td>Skill</td>
                            <td><div id="my-card" class="card-panel center">{this.props.post.skill}</div></td>
                          </tr>
                          <tr>
                            <td>Instrument</td>
                            <td><div id="my-card" class="card-panel center">{arrayOfInstruments}</div></td>
                          </tr>
                          <tr>
                            <td>Genre</td>
                            <td><div id="my-card" class="card-panel center">{arrayOfGenres}</div></td>
                          </tr>
                          <tr>
                            <td>Message</td>
                            <td><div id="my-card" class="card-panel center">{this.props.post.message}</div></td>
                          </tr>
                          {this.props.time}
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col s12 m6 offset-m3 center">
                      <br/>
                      <input class="waves-effect waves-light btn s12" type="submit" value="Request To Join" />
                    </div>
                  </div>

                  <br/><br/><br/><br/><br/>

                </form>
              </div>


            </LayoutContainer>

        );
    }
}

module.exports = Readmore;