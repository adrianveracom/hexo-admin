var Link = require('react-router').Link
var React = require('react');
var Preview = require('./preview');
var Publish = require('./publish');

var App = React.createClass({
  render: function () {
    return <div className="app">
      <div className="app_header">
        <img src="logo.png" className="app_logo"/>
        <span className="app_title">Hexo Admin</span>
        <ul className="app_nav">
          <li><Link to="posts">Posts</Link></li>
          <li><Link to="pages">Pages</Link></li>
        </ul>
        <ul className="app_nav pull-right">
          <li><Preview /></li>
          <li><Publish /></li>
        </ul>
      </div>
      <div className="app_main">
        <this.props.activeRouteHandler/>
      </div>
    </div>;
  }
})

module.exports = App
