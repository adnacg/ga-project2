var React = require('react');

class NavigationBar extends React.Component {
    render() {
        if (this.props.user_id) {
            let currentUserId = this.props.user_id;
            return (
              <div class="navbar-fixed">
              <nav class="mynavbar" role="navigation">
                  <div class="nav-wrapper container">
                    <a id="logo-container" href="http://localhost:3000/" class="brand-logo"><img class="logo-img" src="/assets/images/logo.svg"/></a>
                    <ul class="right hide-on-med-and-down">
                      <li><a href="/post">Browse Jams</a></li>
                      <li><a href="/post/new">Post Jams</a></li>
                      <li><a href={"/user/" + currentUserId}>Profile</a></li>
                      <li><a href="/user/logout">Logout</a></li>
                      <li><a href="#"><i class="material-icons">search</i></a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                      <li><a href="/post">Browse Jams</a></li>
                      <li><a href="/post/new">Post Jams</a></li>
                      <li><a href={"/user/" + currentUserId}>Profile</a></li>
                      <li><a href="/post/new">Logout</a></li>
                      <li><a href="#">Search</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                  </div>
              </nav>
              </div>
            )

        } else {

            return (
              <div class="navbar-fixed">
              <nav class="mynavbar" role="navigation">
                  <div class="nav-wrapper container">
                    <a id="logo-container" href="http://localhost:3000/" class="brand-logo"><img class="logo-img" src="/assets/images/logo.svg"/></a>
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
              </div>
            )
        }
    }
}


class LayoutContainer extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Jam Away</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link type="text/css" rel="stylesheet" href="/css/materialize.min.css"  media="screen,projection"/>
                    <link href="/css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
                <body>
                  <NavigationBar user_id={this.props.user_id}/>

                  <main>{this.props.children}</main>

                  <footer class="page-footer">
                    <div class="container">
                    <div>
                      <a class="my-footer-text" href="#">Terms & Conditions</a> &nbsp;
                      <a class="my-footer-text" href="#">Privacy Policy</a> &nbsp;
                      <a class="my-footer-text" href="#">FAQ</a> &nbsp;
                      <a class="my-footer-text" href="#">Contact</a>

                      <a class="my-footer-text text-lighten-4 right social-media fa fa-pinterest" href="#"></a>
                      <a class="my-footer-text text-lighten-4 right social-media fa fa-twitter" href="#"></a>
                      <a class="my-footer-text text-lighten-4 right social-media fa fa-instagram" href="#"></a>
                      <a class="my-footer-text text-lighten-4 right social-media fa fa-facebook" href="#"></a>

                    </div>
                    <div class="my-footer-text">Copyright © 2018 by Jam Away

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