let React = require('react');
let SvgIcon = require('../../svg-icon');

let ActionPermDeviceInformation = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionPermDeviceInformation;