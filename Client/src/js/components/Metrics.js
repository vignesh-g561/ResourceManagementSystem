var React = require('react');
var Navbar=require('./Navbar');
var BarGraph=require('../pages/BarGraph');
var Metrics = React.createClass({
    render:function(){
        return (
          	<div>
            <Navbar />
            <center><h1>Metrics Page</h1></center>
            <BarGraph />
          	</div>
        );
    }
});

module.exports = Metrics;
