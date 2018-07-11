var React = require('react');

class NavigationBar extends React.Component {
    render() {
        if (this.props.user_id) {
            let currentUserId = this.props.user_id;
            return (
              <div class="navbar-fixed">
              <nav class="mynavbar" role="navigation">
                  <div class="nav-wrapper container">
                    <a id="logo-container" href="/" class="brand-logo"><img class="logo-img" src="/assets/images/logo.svg"/></a>
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
                      <li><a href="/user/logout">Logout</a></li>
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
                    <a id="logo-container" href="/" class="brand-logo"><img class="logo-img" src="/assets/images/logo.svg"/></a>
                    <ul class="right hide-on-med-and-down">
                      <li><a href="/post">Browse Jams</a></li>
                      <li><a href="/post/new">Post Jams</a></li>
                      <li><a href="/user/register">Register</a></li>
                      <li><a href="/user/login">Login</a></li>
                      <li><a href="#"><i class="material-icons">search</i></a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                      <li><a href="/post">Browse Jams</a></li>
                      <li><a href="/post/new">Post Jams</a></li>
                      <li><a href="/user/register">Register</a></li>
                      <li><a href="/user/login">Login</a></li>
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

class FlashError extends React.Component {
    render() {
        if (this.props.messages) {
            let errorMsgs = this.props.messages.error;

            if (errorMsgs) {
                return (
                <div class="row" id="alert_box">
                  <div class="card">
                    <div class="my-messages col s12 m12">
                      <strong>{errorMsgs[0]}</strong><i class="fa fa-times icon_style" id="alert_close" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              )
            } else {
                return <div></div>
            }
        } else {
            return <div></div>
        }
    }
}

class FlashInfo extends React.Component {
    render() {
        if (this.props.messages) {
            let infoMsgs = this.props.messages.info;

            if (infoMsgs) {
                return (
                  <div class="row" id="alert_box">
                    <div class="card">
                      <div class="my-messages col s12 m12">
                        <strong>{infoMsgs[0]}</strong><i class="fa fa-times icon_style" id="alert_close" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                )
            } else {
                return <div></div>
            }
        } else {
            return <div></div>
        }
    }
}

class FlashSuccess extends React.Component {
    render() {
        if (this.props.messages) {
            let successMsgs = this.props.messages.success;

            if (successMsgs) {
              return (
                <div class="row" id="alert_box">
                  <div class="card">
                    <div class="my-messages col s12 m12">
                      <strong>{successMsgs[0]}</strong><i class="fa fa-times icon_style" id="alert_close" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              )
            } else {
                return <div></div>
            }
        } else {
            return <div className="successFlashMessage"></div>
        }
    }
}

class LayoutContainer extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Jam Away</title>
                    <link rel='icon' href='/assets/images/favicon.png' type='image/png'/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link type="text/css" rel="stylesheet" href="/css/materialize.min.css"  media="screen,projection"/>
                    <link href="/css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
                <body>
                  <NavigationBar user_id={this.props.user_id}/>

                  <main>

                  <FlashError messages={this.props.messages}/>
                  <FlashInfo messages={this.props.messages}/>
                  <FlashSuccess messages={this.props.messages}/>

                  {this.props.children}

                  </main>

                  <footer class="page-footer">
                    <div class="container">
                    <div>
                      <a class="my-footer-text" href="#">Terms & Conditions</a> &nbsp;
                      <a class="my-footer-text" href="#">Privacy Policy</a> &nbsp;
                      <a class="my-footer-text" href="#">FAQ</a> &nbsp;
                      <a class="my-footer-text" href="#">Contact</a>

                      <a class="my-footer-text text-lighten-4 right social-media fa fa-pinterest" href="#"></a>
                      <a class="my-footer-text text-lighten-4 right social-media fa fa-twitter" href="https://twitter.com/jamaway3"></a>
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