var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class Home extends React.Component {
    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

                  <ParallaxContainer>
                    <div class="section no-pad-bot">
                      <div class="container">
                        <h3 class="header center text-lighten-2"><strong>SEARCH, JOIN, JAM</strong></h3>
                        <div class="row center">
                          <h6 class="header col s12 light"><strong>Singapore’s number one platform to connect with fellow musicians</strong></h6>
                        </div>
                        <div class="row center">
                          <a href="/post" id="my-action-btn" class="btn-large waves-effect waves-light lighten-1">JOIN A JAM</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a href="/post/new" id="my-action-btn" class="btn-large waves-effect waves-light lighten-1">POST A JAM</a>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/home1.jpg" alt="home1" /></div>
                  </ParallaxContainer>

                  <div id="my-yellow-text" class="container">

                  <div class="center">
                    <br/><br/>
                    <a class="btn-floating btn-large pulse">HOW</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="btn-floating btn-large pulse">JAM</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="btn-floating btn-large pulse">AWAY</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="btn-floating btn-large pulse">WORK</a>
                  </div>
                  <br/>

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
                        <div id="my-homepage-info" class="row left">
                          <h5 id="my-green-text" class="header s12 light m6"><strong>WHY JAM AWAY?</strong></h5>
                          <p id="my-green-text" class="col s12 light m6">
                            Finding someone to jam with, is not an easy task. Jam Away is a jamming community where you connect with fellow aspiring musicians.
                            <br/>
                            Plus, its <strong>EASY</strong> to use and <strong>100% FREE</strong>!
                            <br/>Let’s build this jamming community together through <strong>JAM AWAY</strong>!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/home2.jpg" alt="home2" /></div>
                  </div>




                  <div class="container">
                    <div class="section">

                      <div class="row">
                        <div class="col s12 center">
                          <h3><i class="mdi-content-send"></i></h3>
                          <a id="my-action-btn" class="pulse btn-large waves-effect waves-light lighten-1" href="/post">Browse The List Now</a>
                          <p id="my-yellow-text" class="center-align light">Find the right partner and jam your hearts away!</p>
                        </div>
                      </div>

                    </div>
                  </div>

            </LayoutContainer>

        );
    }
}

module.exports = Home;