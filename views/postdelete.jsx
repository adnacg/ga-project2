var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class PostDelete extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>

              <br/><br/><br/>
              <div class="container">
                <form method="post" action={"/post/" + this.props.postId + "/delete"}>
                <input type="hidden" name="_method" defaultValue="delete" />
                <div class="row">
                <div class="col s12 m6 center offset-m3">
                    <div>
                      <div id="my-card" class="card">
                        <div class="card-content">
                          <span class="card-title">Delete the post?</span>
                        </div>
                        <div class="card-action">
                          <input type="submit" value="Yes" class="waves-effect waves-light btn-small"/>
                          &nbsp;&nbsp;&nbsp;
                          <input type="submit" value="No" formmethod="get" formaction={"/user/" + this.props.user_id} class="waves-effect waves-light btn-small"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </form>
                </div>



            </LayoutContainer>

        );
    }
}

module.exports = PostDelete;