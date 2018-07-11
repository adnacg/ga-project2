var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class List extends React.Component {

    render() {

        const arrayOfPosts = this.props.posts.map( function(currentPost) {
            return (
              <tr key={currentPost.id}>
                <td >{currentPost.name}</td>
                <td id="td-to-left"><i class="material-icons"> location_on </i>{currentPost.location}</td>
                <td>
                  Instrument
                  <br/>
                  Genre
                </td>
                <td><a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/post/" + currentPost.id}>Read More</a></td>
              </tr>
            );
        });

        return (

            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>

                  <ParallaxContainer>
                    <div class="section no-pad-bot">
                      <div class="container">
                        <h3 class="header center text-lighten-2">JAMMING MADE EASY</h3>
                        <div class="row center">
                          <h6 class="header col s12 light"><strong>Join your fellow musicians today</strong></h6>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/post.jpg" alt="img1" /></div>
                  </ParallaxContainer>

                  <br/><br/>

                <table id="my-yellow-text" class="container s12 highlight centered">
                    <thead>
                      <tr>
                          <th>Post By</th>
                          <th class="left">Location</th>
                          <th>Requirement</th>
                          <th></th>
                      </tr>
                    </thead>
                    <tbody>

                      {arrayOfPosts}

                    </tbody>
              </table>

              <div class="container col s12 right-align">
              <ul class="pagination">
                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <li id="my-yellow-background" class="active"><a href="#!">1</a></li>
                <li class="waves-effect"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="waves-effect"><a href="#!">4</a></li>
                <li class="waves-effect"><a href="#!">5</a></li>
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
              </ul>
              </div>

            </LayoutContainer>

        );
    }
}

module.exports = List;