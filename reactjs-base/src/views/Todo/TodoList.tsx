import React, { Component } from "react";
import styles from "./TodoList.module.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

export default class TodoList extends Component {
  state = {
    listTodo: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
      { id: 3, title: "Task 3" },
      { id: 4, title: "Task 4" },
    ],
    editTodo: {
      id: -1,
      title: "",
    },
  };

  handleAddTodo = (todo: any) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
    toast.success("Created successful!");
  };

  handleDeleteTodo = (todo: any) => {
    const todoCurrent = this.state.listTodo.filter(
      (item) => item.id !== todo.id
    );
    this.setState({
      listTodo: todoCurrent,
    });
    toast.success("Deleted successfully");
  };

  handleEditTodo = (todo: any) => {
    if (this.state.editTodo.id < 0) {
      this.setState({
        editTodo: todo,
      });
    }
  };

  handleSaveEditTodo = () => {
    const currentList = this.state.listTodo.map((item) => {
      if (item.id === this.state.editTodo.id) {
        return this.state.editTodo;
      } else {
        return item;
      }
    });
    this.setState({
      listTodo: currentList,
      editTodo: { id: -1, title: "" },
    });
    toast.success("Edited successfully!");
  };

  handleChangeEditTitle = (event: any) => {
    const value = event.target.value;
    const todo = { ...this.state.editTodo, title: value };
    this.setState({
      editTodo: todo,
    });
  };

  handleCancelEdit = () => {
    this.setState({
      editTodo: { id: -1, title: "" },
    });
    toast.info("Cancel Edit!");
  };

  render() {
    const { listTodo, editTodo } = this.state;
    return (
      <div className={styles.container}>
        <AddTodo addTodo={this.handleAddTodo} />
        <div className={styles.list}>
          {listTodo.map((item) => {
            const checkEdit = editTodo.id === item.id;
            return (
              <div className={styles.item} key={item.id}>
                {checkEdit ? (
                  <>
                    <span className={styles.text}>
                      <input
                        type="text"
                        value={editTodo.title}
                        onChange={this.handleChangeEditTitle}
                      />
                    </span>
                    <button
                      className={`${styles.editButton} ${styles.button}`}
                      onClick={this.handleSaveEditTodo}
                    >
                      Save
                    </button>
                    <button
                      className={`${styles.editButton} ${styles.button}`}
                      onClick={this.handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span className={styles.text}>{item.title}</span>
                    <button
                      className={`${styles.editButton} ${styles.button}`}
                      onClick={() => this.handleEditTodo(item)}
                    >
                      Edit
                    </button>
                  </>
                )}
                <button
                  className={`${styles.deleteButton} ${styles.button}`}
                  onClick={() => this.handleDeleteTodo(item)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
