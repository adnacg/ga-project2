var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class ProfileOther extends React.Component {

    render() {

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

                <table id="my-yellow-text" class="container">
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
                        <td><div id="my-card-borderless" class="card-panel"><a id="my-music-card" class="btn-small">Guitar</a>&nbsp;&nbsp;&nbsp;<a id="my-music-card" class="btn-small">Other</a></div></td>
                      </tr>
                      <tr>
                        <td>Genre</td>
                        <td><div id="my-card-borderless" class="card-panel"><a id="my-music-card" class="btn-small">Jazz</a>&nbsp;&nbsp;&nbsp;<a id="my-music-card" class="btn-small">Blues</a></div></td>
                      </tr>

                    </tbody>
              </table>
              <br/><br/><br/><br/><br/>



            </LayoutContainer>
        );
    }
}

module.exports = ProfileOther;