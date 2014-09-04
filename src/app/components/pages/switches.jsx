/**
 * @jsx React.DOM
 */

var React = require('react'),
    mui = require('mui'),
    CodeExample = require('../code-example/code-example.jsx');

var SwitchesPage = React.createClass({

  render: function() {
    return (
    	<div>
        <h2>Checkbox</h2>
        {this._getCheckboxExample()}
        <h2>Radio Button</h2>
        {this._getRadioButtonExample()}
    		<h2>Toggle</h2>
        {this._getToggleExample()}
    	</div>
    );
  },

  _getCheckboxExample: function() {
    var code = 
      '<Checkbox name="checkboxName" value="checkboxValue" />';

    return (
      <CodeExample code={code}>
        <mui.Checkbox name="checkboxName" value="checkboxValue" onClick={this._onRadioButtonClick} />
      </CodeExample>
    );
  },

  _getToggleExample: function() {
    var code = 
      '<Toggle />';

    return (
      <CodeExample code={code}>
        <mui.Toggle onToggle={this._onToggle} />
      </CodeExample>
    );
  },

  _getRadioButtonExample: function() {
    var code = 
      '<RadioButton name="radioButtonName" value="radioButtonValue1"/>\n' +
      '<RadioButton name="radioButtonName" value="radioButtonValue2"/>\n' +
      '<RadioButton name="radioButtonName" value="radioButtonValue3"/>';

    return (
      <CodeExample code={code}>
        <form>
          <mui.RadioButton name="radioButtonName" value="radioButtonValue1" onClick={this._onRadioButtonClick} />
          <mui.RadioButton name="radioButtonName" value="radioButtonValue2" onClick={this._onRadioButtonClick} />
          <mui.RadioButton name="radioButtonName" value="radioButtonValue3" onClick={this._onRadioButtonClick} />
        </form>
      </CodeExample>
    );
  },

  _onCheck: function(e, checked) {
    console.log('Checked: ', checked);
  },


  _onToggle: function(e, toggled) {
    console.log('Toggled: ', toggled);
  },

  _onRadioButtonClick: function(e, checked) {
    console.log('Clicked:', checked);
  }

});

module.exports = SwitchesPage;