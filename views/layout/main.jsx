  var React = require('react');

class LayoutContainer extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Jam Away</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link type="text/css" rel="stylesheet" href="/css/materialize.min.css"  media="screen,projection"/>
                    <link href="/css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
                <body>
                    <nav class="mynavbar" role="navigation">
                        <div class="nav-wrapper container">
                          <a id="logo-container" href="http://localhost:3000/" class="brand-logo">JAM AWAY</a>
                          <ul class="right hide-on-med-and-down">
                            <li><a href="http://localhost:3000/post">Browse Jams</a></li>
                            <li><a href="http://localhost:3000/post/new">Post Jams</a></li>
                            <li><a href="http://localhost:3000/user/register">Register</a></li>
                            <li><a href="http://localhost:3000/user/login">Login</a></li>
                            <li><a href="#"><i class="material-icons">search</i></a></li>
                          </ul>

                          <ul id="nav-mobile" class="sidenav">
                            <li><a href="http://localhost:3000/post">Browse Jams</a></li>
                            <li><a href="http://localhost:3000/post/new">Post Jams</a></li>
                            <li><a href="http://localhost:3000/user/register">Register</a></li>
                            <li><a href="http://localhost:3000/user/login">Login</a></li>
                            <li><a href="#">Search</a></li>
                          </ul>
                          <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        </div>
                    </nav>

                    <div id="index-banner" class="parallax-container">
                      <div class="section no-pad-bot">
                        <div class="container">
                          <br/><br/>
                          <h3 class="header center text-lighten-2">SEARCH, JOIN, JAM</h3>
                          <div class="row center">
                            <h6 class="header col s12 light">Singapore’s number one platform to connect with fellow musicians</h6>
                          </div>
                          <div class="row center">
                            <a href="http://localhost:3000/post" id="my-action-btn" class="btn-large waves-effect waves-light lighten-1">JOIN A JAM</a> &nbsp;
                            <a href="http://localhost:3000/post/new" id="my-action-btn" class="btn-large waves-effect waves-light lighten-1">POST A JAM</a>
                          </div>
                          <br/><br/>
                        </div>
                      </div>
                      <div class="parallax"><img src="/assets/images/home1.jpg" alt="img1" /></div>
                    </div>

                    {this.props.children}

                        <footer class="page-footer">
                          <div class="container">
                          <div>
                            <a class="footer_text" href="#">Terms & Conditions</a> &nbsp;
                            <a class="footer_text" href="#">Privacy Policy</a> &nbsp;
                            <a class="footer_text" href="#">FAQ</a> &nbsp;
                            <a class="footer_text" href="#">Contact</a>
                          </div>
                          <div class="footer_text">Copyright © 2018 by Jam Away
                            <a class="footer_text text-lighten-4 right" href="#" src="">IG</a>
                            <a class="footer_text text-lighten-4 right" href="#" src="">FB</a>
                            <a class="footer_text text-lighten-4 right" href="#" src="">TWT</a>
                          </div>
                          </div>
                          <br/>
                        </footer>


                    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
                    <script type="text/javascript" src="/js/materialize.min.js"></script>
                    <script type="text/javascript" src="/js/init.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = LayoutContainer;