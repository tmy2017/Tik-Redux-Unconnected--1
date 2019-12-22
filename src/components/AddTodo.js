import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
  };

  render() {
    return (
      <div>
        <input
          //zzCmt: try directly setState for e.target.value for controlled form, works
          onChange={e => {
            this.setState({ input: e.target.value });
          }}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}
export default AddTodo;

// export default connect(
//   null,
//   //zzCmt: mapDispatchToProps - so now I just added "actions", and with connect,
//   //I have "dispatch()" as my this.props to use to fire actions! ((ℹ️ zzpp._51._y19.1222-1703 ))
//   { addTodo }
// )(AddTodo);
