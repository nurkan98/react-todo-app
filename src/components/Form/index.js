import { useState } from "react";
import "./style.css";
import Input from "./Input";
import List from "./List";
import Filter from "./Filter";
import { v4 as uuid } from "uuid";

function Form() {
  const [filter, setFilter] = useState("All");
  const [workList, setWorkList] = useState([
    {
      id: uuid(),
      title: "Learn JavaScript",
      done: true,
    },
    {
      id: uuid(),
      title: "Learn CSS",
      done: true,
    },
    {
      id: uuid(),
      title: "Learn React",
      done: false,
    },
  ]);

  return (
    <div>
      <section className="todoapp">
        <Input workList={workList} setWorks={setWorkList} />
        <List workList={workList} setWorks={setWorkList} filter={filter} />
        <Filter
          workList={workList}
          setWorks={setWorkList}
          filter={filter}
          setFilter={setFilter}
        />
      </section>
    </div>
  );
}

export default Form;
