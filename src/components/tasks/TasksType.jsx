import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import generateRandomText from "../../utils/textFunction";
import Task from "./Task";

function add(arr, item) {
  console.log("arr.length: ", arr.length);
  const newArr = [...arr];
  item.id = newArr.length + 1;
  const newarray = [...newArr, item];
  console.log("item after add: ", newarray);
  return newarray;
}

function remove(arr, itemId) {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i.id === itemId),
    1
  );
  console.log("newArr after remove: ", newArr);
  return newArr;
}

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const taskslist = [
  {
    id: 1,
    title: "Tasks title 1",
    date: "12/01/2025 at 11:00",
    priority: 1,
    persone: "Kaouthar ESSAHELI",
    content: "tasks content, continet list check, steps, details...",
  },
  {
    id: 2,
    title: "Tasks title 2",
    date: "05/11/2025 at 12:00",
    priority: 5,
    persone: "MARIA ESSAHELI",
    content: "tasks content, continet list check, steps, details...",
  },
];

export default function TasksType(props) {
  const [tasks, setTasks] = useState(props.taskslist);

  return (
    <div
      id="container"
      className="relative flex flex-col  p-5 h-[90vh] bg-gradient-to-tr bg-bg-gray-light border border-gray-50"
    >
      <ul className="relative p-1 m-0 left-0 top-0 h-full flex flex-col gap-3 justify-start list-none overflow-auto">
        <AnimatePresence initial={false}>
          {tasks.map((item) => (
            <motion.li
              key={item.id}
              className="p-2 bg-white rounded-lg shadow-md border border-gray-50 flex"
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <Task details={item} />
              <button
                onClick={() => setTasks(remove(tasks, item.id))}
                className="w-fit p-5 rounded-full bg-white text-red-400"
              >
                <svg width="23" height="23" viewBox="0 0 23 23">
                  <Path d="M 3 16.5 L 17 2.5" />
                  <Path d="M 3 2.5 L 17 16.346" />
                </svg>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button
        className="w-fit px-5 py-3 rounded-lg bg-white text-black border cursor-pointer absolute bottom-0 left-[50%]"
        onClick={() =>
          setTasks(
            add(tasks, {
              title: generateRandomText(10),
              date: generateRandomText(5),
              priority: Math.floor(Math.random() * 3),
              persone: generateRandomText(7),
              content: generateRandomText(20),
            })
          )
        }
      >
        Add new task
      </button>
    </div>
  );
}
