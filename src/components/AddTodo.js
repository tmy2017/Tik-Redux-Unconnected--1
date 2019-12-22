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

    // zzCmt: zzcore-zzconcept-zzdev-zzlrn-zzinnerworking ((ℹ️ zzpp._51._y19.1222-2030
    //  by "connect", so now you can dispatch actions with this.pros.ACTIONS

    //actually this means zzdispatch!
    //  zzprops is from zzconnect, so this addTodo = dispatch action XXX into store! ((❇️ zzppp._51._y19.1222-2050))
    //  really think as from zzOUTSIDE the zzcomponent - the zzwrappING component - which is zzSTORE/zzprovider? so this
    //  "zzprops" is GIVEN by OUTSIDE component - to have super power for wrappED component to do dispatch!
    this.props.addTodo(this.state.input);
    // after click add, of course the inputbox needs to be cleared
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          //zzCmt: try directly setState for e.target.value for controlled form, works
          // onChange={e => {
          //   this.setState({ input: e.target.value });
          // }}
          onChange={e => {
            this.updateInput(e.target.value);
          }}
          value={this.state.input}
        />

        <button
          className="add-todo"
          //zzCmt: so only on button clicked, really dispatch the action! ((ℹ️ zzpp._51._y19.1222-2034 ))
          onClick={this.handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  //zzCmt: mapDispatchToProps - so now I just added "actions", and with connect,
  //I have "dispatch()" as my this.props to use to fire actions! ((ℹ️ zzpp._51._y19.1222-1703 ))
  { addTodo }
)(AddTodo);
