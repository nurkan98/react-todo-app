import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const initialFormValues = { title: "" };

function Input({ setWorks, workList }) {
  const [work, setWork] = useState({ title: "", done: false });

  useEffect(() => {
    setWork(initialFormValues);
  }, [workList]);

  const onChangeInput = (e) => {
    setWork({
      ...work,
      id: uuid(),
      [e.target.name]: e.target.value,
      done: false,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (work.title === "") {
      return false;
    }
    setWorks([...workList, work]);
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            name="title"
            value={work.title}
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={onChangeInput}
            autoFocus
          />
        </form>
      </header>
    </div>
  );
}

export default Input;
