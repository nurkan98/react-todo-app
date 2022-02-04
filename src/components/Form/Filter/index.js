import React from "react";

function Filter({ workList, setWorks, filter, setFilter }) {
  const notDoneWorks = workList.filter(({ done }) => done === false);
  const doneWorks = workList.filter(({ done }) => done === true);

  const clearWorks = () => {
    setWorks(notDoneWorks);
  };

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong> {notDoneWorks.length} </strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <a
              href="##"
              className={filter === "All" ? "selected" : null}
              onClick={() => setFilter("All")}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="##"
              className={filter === "Active" ? "selected" : null}
              onClick={() => setFilter("Active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="##"
              className={filter === "Completed" ? "selected" : null}
              onClick={() => setFilter("Completed")}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          style={doneWorks.length === 0 ? { display: "none" } : null}
          className="clear-completed "
          onClick={clearWorks}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Filter;
