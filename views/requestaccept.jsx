var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class RequestAccept extends React.Component {

    render() {

        return (

            <LayoutContainer>

              <div class="container">
                <form method="post" action="/request/1/accept">
                <div class="col s12 m6 center">
                    <div>
                      <div id="my-card" class="card">
                        <div class="card-content">
                          <span class="card-title">Accept The Request?</span>
                        </div>
                        <div class="card-action">
                          <input type="submit" value="Yes" class="waves-effect waves-light btn-small"/>
                          &nbsp;&nbsp;&nbsp;
                          <a id="my-action-btn" class="waves-effect waves-light btn-small" href="/request/1">No</a>
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