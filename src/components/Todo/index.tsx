import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { Todo, TodoList } from "../../models/todoList";
import { RootState, useAppDispatch } from "../../store";
import {
  getTodoList,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../thunk/todoList";
import { Input, Button } from "../../components/Common";
import { toast, ToastContainer, ToastContent } from "react-toastify";
import { DATE_FORMAT, SUCCESSFULL_MESSAGE } from "../../constants";
import List from "../List";

const INITIAL_TODO_LIST = {
  id: 0,
  name: "",
  taskDate: moment(new Date()).format(DATE_FORMAT),
};

export const TodoListComp: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  const todoList = useSelector((state: RootState) => state.todo.list.values);
  const isLoadingTable = useSelector(
    (state: RootState) => state.todo.list.isLoading
  );
  const isSaving = useSelector((state: RootState) => state.todo.save.isSaving);
  const isDeleting = useSelector(
    (state: RootState) => state.todo.save.isDeleting
  );

  const [todolist, setTodoList] = useState<Todo>(INITIAL_TODO_LIST);

  const [showValidation, setShowValidation] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodoList((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectList = (d: Todo) => {
    setShowValidation(false);
    setTodoList({
      id: d.id,
      name: d.name,
      taskDate: moment(d.taskDate).format(DATE_FORMAT),
    });
  };

  const removeElementFromList = async (id: number) => {
    try {
      if (id) {
        const delteResponse = await dispatch(deleteTodo(id)).unwrap();
        if (delteResponse) {
          toast.success(SUCCESSFULL_MESSAGE);
          dispatch(getTodoList());
        }
      }
    } catch (error) {
      toast.error(error as ToastContent);
    }
  };

  const submitRecord = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (todolist.name === "") {
      setShowValidation(true);
      return;
    }

    const action = todolist.id === 0 ? addTodo(todolist) : updateTodo(todolist);

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(SUCCESSFULL_MESSAGE);
        resetForm();
        dispatch(getTodoList());
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const resetForm = () => {
    setTodoList(INITIAL_TODO_LIST);
    setShowValidation(false);
  };

  return (
    <>
      <div className="form-container">
        <h1 className="title  text-center">
          TODO
          <span className="tag is-link">{todoList?.length}</span>
        </h1>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <div className="columns">
                <div className="column is-4">
                  <Input
                    type="text"
                    title="Name"
                    name="name"
                    placeholder="Enter name here"
                    value={todolist.name}
                    inputChange={handleInputChange}
                    showValidation={showValidation}
                    isRequired={true}
                  />
                </div>
                <div className="column is-4">
                  <Input
                    type="date"
                    title="Task Date"
                    name="taskDate"
                    value={todolist.taskDate}
                    inputChange={handleInputChange}
                  />
                </div>
              </div>
              <Button
                type="is-success"
                loading={isSaving}
                title="Submit"
                onClick={submitRecord}
                disabled={isSaving || isDeleting || !todolist.name}
              />
              &nbsp;
              {todolist.id !== 0 && (
                <Button
                  title="Cancel"
                  onClick={resetForm}
                  disabled={isSaving || isDeleting}
                />
              )}
              <hr />
              {isLoadingTable && (
                <div className="has-text-centered">Fetching...</div>
              )}
              <div className="table-container">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Task Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {todoList?.map((list: TodoList, index: number) => {
                      return (
                        <List
                          list={list}
                          index={index}
                          selectList={selectList}
                          removeElementFromList={removeElementFromList}
                          isDeleting={isDeleting}
                          isSaving={isSaving}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer closeOnClick={true} />
      </div>
    </>
  );
};
