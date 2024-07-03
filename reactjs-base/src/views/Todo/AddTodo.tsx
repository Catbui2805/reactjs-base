import React from "react";
import styles from "./TodoList.module.scss";
import { toast } from "react-toastify";

type Props = {
  addTodo: (todo: any) => void;
};

class AddTodo extends React.Component<Props> {
  state = {
    title: "",
  };

  handleChangeTitle = (event: any) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.warning("Please input Task");
      return;
    }
    const todo = {
      id: Math.floor(Math.random()) * 100000,
      title: this.state.title,
    };
    this.props.addTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    const { title } = this.state;

    return (
      <div className={styles.addView}>
        <input
          type="text"
          className={styles.input}
          value={title}
          onChange={this.handleChangeTitle}
        />
        <button
          type="button"
          className={styles.addButton}
          onClick={this.handleAddTodo}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
