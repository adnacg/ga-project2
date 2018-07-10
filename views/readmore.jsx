var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
const Timestamp = require('react-timestamp');
var ParallaxContainer = require('./layout/parallax.jsx');

class Readmore extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>

              <br/><br/><br/>

                <div class="container">

                  <form class="col s12" method="POST" action={"/post/" + this.props.post.id}>

                  <div class="row">
                    <div class="col s12 m6 offset-m3">
                      <h5 id="my-yellow-text" class="center">About {this.props.post.name}'s Jam</h5>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col s12 m8 offset-m2">
                      <table id="my-yellow-text" class="highlight centered">
                        <tbody>
                          <tr>
                            <td class="right">Bio</td>
                            <td>{this.props.post.bio}</td>
                          </tr>
                          <tr>
                            <td class="right">Location</td>
                            <td>{this.props.post.location}</td>
                          </tr>
                          <tr>
                            <td class="right">Pax</td>
                            <td>{this.props.post.pax}</td>
                          </tr>
                          <tr>
                            <td class="right">Skill</td>
                            <td>{this.props.post.skill}</td>
                          </tr>
                          <tr>
                            <td class="right">Instrument</td>
                            <td>Piano</td>
                          </tr>
                          <tr>
                            <td class="right">Genre</td>
                            <td>Rock</td>
                          </tr>
                          <tr>
                            <td class="right">Message</td>
                            <td>{this.props.post.message}</td>
                          </tr>
                          {this.props.time}
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col s12 m6 offset-m3">
                      <div class="my-timestamp center right-align">
                        Posted on: <Timestamp time={this.props.post.post_time} format='full' /><br/><br/>
                        <input class="waves-effect waves-light btn s12" type="submit" value="Request To Join" />
                      </div>
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