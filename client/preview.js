var React = require('react')
var api = require('./api')

var Preview = React.createClass({
  getInitialState: function() {
    return {
      message: '',
      loading: false
    };
  },

  generate: function(data) {
    return new Promise((resolve, reject) => {
      api.generate().then(result => {
        resolve(data, result);
      });
    });
  },

  handlePreview: function(e) {
    e.preventDefault();
    this.setState({ loading: true, message: 'Uploading files to staging (this will take a moment)'});
    this.generate().then(result => this.setState({
      message: 'Preview',
      loading: false
    }));
  },

  render: function () {

    var content = '';

    if (this.state.loading) {
      content = <div className="loading_bar"> {this.state.message} </div>
    } else {
      content = <div className="btn btn-main" onClick={this.handlePreview}> Preview </div>
    }

    return (
      <div>{content}</div>
    );
  }
})

module.exports = Preview
