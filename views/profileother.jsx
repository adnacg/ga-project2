var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class ProfileOther extends React.Component {

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

                  <ParallaxContainer>
                    <div class="section no-pad-bot">
                      <div class="container">
                        <h3 class="header center text-lighten-2">{this.props.user[0].name}'s Profile</h3>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/profileother.jpg" alt="profileother" /></div>
                  </ParallaxContainer>

                  <br/>

                <div class="container">
                <div class="row">
                <div class="col s12 m10 offset-m1 center">
                <table id="my-yellow-text">

                    <thead>
                      <tr>
                          <th></th>
                          <th></th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>Bio</td>
                        <td><div id="my-card" class="card-panel center">{this.props.user[0].bio}</div></td>
                      </tr>
                      <tr>
                        <td>Instrument</td>
                        <td><div id="my-card" class="card-panel center">{arrayOfInstruments}</div></td>
                      </tr>
                      <tr>
                        <td>Genre</td>
                        <td><div id="my-card" class="card-panel center">{arrayOfGenres}</div></td>
                      </tr>

                    </tbody>

              </table>
              </div>
              </div>
              </div>
              <br/><br/><br/><br/><br/>



            </LayoutContainer>
        );
    }
}

module.exports = ProfileOther;