var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class RequestAccept extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

              <div class="container">
                <form method="post" action={"/request/" + this.props.requestId + "/accept"}>
                <div class="col s12 m6 center">
                    <div>
                      <div id="my-card" class="card">
                        <div class="card-content">
                          <span class="card-title">Accept The Request?</span>
                        </div>
                        <div class="card-action">
                          <input type="submit" value="Yes" class="waves-effect waves-light btn-small"/>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href={"/user/" + this.props.user_id}>No</a>
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

module.exports = RequestAccept;