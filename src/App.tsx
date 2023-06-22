import { TodoListComp } from "./components/Todo";

function App() {
  return (
    <>
      <nav className="navbar is-info">
        <div className="navbar-brand"></div>
      </nav>
      <div className="container is-max-desktop">
        <TodoListComp />
      </div>
    </>
  );
}

export default App;
