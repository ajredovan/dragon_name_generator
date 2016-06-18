var DragonForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.generate}>
        <div class="form-group">
          <input placeholder="First Name" ref="firstName"/>
          <input placeholder="Last Name" ref="lastName"/>
          <input placeholder="Mother's Name" ref="momName"/>
          <input placeholder="Father's Name" ref="dadName"/>
        </div>
        <input type="button" class="btn btn-default" name="submit" type="submit" value="Gimme" />
      </form>
    )
  },
  generate: function() {
    let firstName = this.refs.firstName.value.trim(),
        lastName  = this.refs.lastName.value.trim(),
        momName   = this.refs.momName.value.trim(),
        dadName   = this.refs.dadName.valuetrim();

  }
});

ReactDOM.render(
  <DragonForm />,
  document.getElementById('dragon-form')
)
