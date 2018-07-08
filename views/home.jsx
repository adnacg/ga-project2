var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Home extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

                  <div class="container my-home-instruction">
                    <div class="section">
                      <div class="row">
                        <div class="col s12 m3">
                          <div class="icon-block">
                            <h2 class="center"><i class="material-icons">search</i></h2>
                            <h5 class="center">Browse The List</h5>

                            <p class="light">Browse our list of jams from your fellow passionate musicians, based on different instruments and genres etc. Find the most suitable match for your needs.</p>
                          </div>
                        </div>

                        <div class="col s12 m3">
                          <div class="icon-block">
                            <h2 class="center"><i class="material-icons">event_note</i></h2>
                            <h5 class="center">Post Yourself</h5>

                            <p class="light">If you don’t see your preferred listing, then post a jam yourself! Take the first step to connect with like-minded individuals and grow your community!</p>
                          </div>
                        </div>

                        <div class="col s12 m3">
                          <div class="icon-block">
                            <h2 class="center"><i class="material-icons">group</i></h2>
                            <h5 class="center">Connect & Jam</h5>
                            <p class="light">See a post you like? Simply click on the request to join button and wait for an answer from the poster. For posters, check out the requester’s profile to accept the request. Can you see a great friendship brewing?</p>
                          </div>
                        </div>

                        <div class="col s12 m3">
                          <div class="icon-block">
                            <h2 class="center"><i class="material-icons">replay</i></h2>
                            <h5 class="center">Keep In Touch</h5>
                            <p class="light">If you have enjoyed the jamming session, keep in touch and arrange the next. Start a friendship and a musical journey together! You never know - you guys might be the next hit band!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div class="parallax-container valign-wrapper">
                    <div class="section no-pad-bot">
                      <div class="container">
                        <div class="my-home-info row left">
                          <h5 class="my-home-info header s12 light m6"><strong>Why Jam Away?</strong></h5>
                          <p class="s12 light m6">Finding someone to jam with, based on the instruments, genres, and skill levels is not an easy task. We want to build this jamming community, one where everyone has the opportunity to connect with fellow aspiring musicians, find suitable jamming partners, and jam away! Plus, its EASY to use and 100% FREE! Just browse through our posting list for a matching jam to join. If you don’t see one, list it yourself and get connected! Let’s build this jamming community together through JAMAWAY!</p>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/home32.jpg" alt="img2" /></div>
                  </div>




                  <div class="container">
                    <div class="section">

                      <div class="row">
                        <div class="col s12 center">
                          <h3><i class="mdi-content-send"></i></h3>
                          <a id="my-action-btn" class="btn-large waves-effect waves-light lighten-1" href="/post">Browse The List Now</a>
                          <p class="my-home-instruction center-align light">Find the right partner and jam your hearts away!</p>
                        </div>
                      </div>

                    </div>
                  </div>

            </LayoutContainer>

        );
    }
}

module.exports = Home;