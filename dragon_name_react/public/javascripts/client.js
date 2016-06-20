const Dragon = React.createClass({
  handleDragonGen: function(toBeDragon) {
    $.ajax({
      url:this.state.url,
      dataType: 'json',
      type: 'POST',
      data: toBeDragon,
      success: function(data){
        console.log(data);
        this.setState({dragonName: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      dragonName: '',
      url: "/generate"
    }
  },
  render: function() {
    return (
      <div>
        <DragonForm onDragonGenerate={this.handleDragonGen} />
        <DragonName dragonName={this.state.dragonName} />
      </div>
    )
  }
});

const DragonForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.generate}>
        <input placeholder="First Name" ref="firstName"/>
        <input placeholder="Last Name" ref="lastName"/>
        <input placeholder="Mother's Name" ref="momName"/>
        <input placeholder="Father's Name" ref="dadName"/>
        <button type="submit" class="btn btn-default">TUrn Me Into A Dragon</button>
      </form>
    )
  },
  generate: function(e) {
    e.preventDefault();
    var toBeDragon = {
      firstName: this.refs.firstName.value.trim(),
      lastName: this.refs.lastName.value.trim(),
      motherName: this.refs.momName.value.trim(),
      fatherName: this.refs.dadName.value.trim()
    }

    this.props.onDragonGenerate(toBeDragon);
  }
});

const DragonName = React.createClass({
  render: function() {
    return (
      <div>
        Your Dragon Name is: {this.props.dragonName}
      </div>
    )
  }
})

ReactDOM.render(
  <Dragon />,
  document.getElementById('dragon')
)
