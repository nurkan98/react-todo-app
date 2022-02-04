function List({ workList, setWorks, filter }) {
  const handleToggleCompleted = (id) => {
    const updatedWork = workList.find((work) => work.id === id);
    updatedWork.done = !updatedWork.done;
    const newWork = workList.map((work) =>
      work.id === id ? updatedWork : work
    );
    setWorks(newWork);
  };

  const toDoRemove = (id) => {
    setWorks(workList.filter((work) => work.id !== id));
  };

  const filteredList =
    filter === "All"
      ? workList
      : filter === "Active"
      ? workList.filter((work) => work.done !== true)
      : workList.filter((work) => work.done !== false);

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {filteredList.map((workList, i) => (
            <li key={i} className={workList.done ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={workList.done}
                  onChange={() => handleToggleCompleted(workList.id)}
                />
                <label>{workList.title}</label>
                <button
                  onClick={() => toDoRemove(workList.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
