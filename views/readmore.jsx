var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
const Timestamp = require('react-timestamp');
var ParallaxContainer = require('./layout/parallax.jsx');

class Readmore extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

              <br/><br/><br/>

                <div class="container">
                  <form class="col s12" method="POST" action={"/post/" + this.props.post.id}>

                  <h5 id="my-yellow-text" class="center">About {this.props.post.name}'s Jam</h5>
                  <br/><br/>

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

                    <div class="my-timestamp right right-align">Posted on: <Timestamp time={this.props.post.post_time} format='full' /><br/><br/>
                    <input class="waves-effect waves-light btn s12" type="submit" value="Request To Join" />
                    </div>
                    <br/><br/><br/><br/><br/>

                  </form>
                </div>


            </LayoutContainer>

        );
    }
}

module.exports = Readmore;