var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class PostDelete extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

              <div class="container">
                <form method="post" action={"/post/" + this.props.post_id + "/delete"}>
                <input type="hidden" name="_method" defaultValue="delete" />
                <div class="col s12 m6 center">
                    <div>
                      <div id="my-card" class="card">
                        <div class="card-content">
                          <span class="card-title">Delete the post?</span>
                        </div>
                        <div class="card-action">
                          <input type="submit" value="Yes" class="waves-effect waves-light btn-small"/>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/user/" + this.props.cookies.user_id}>No</a>
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