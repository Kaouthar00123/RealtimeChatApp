import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TasksType from "../components/tasks/TasksType";

const tasksList = [
  {
    type: "To do",
    tasks: [
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
    ],
  },
  {
    type: "In progress",
    tasks: [
      {
        id: 3,
        title: "Tasks title In progress",
        date: "12/01/2025 at 11:00",
        priority: 1,
        persone: "Koko ESSAHELI",
        content: "tasks content, continet list check, steps, details...",
      },
    ],
  },
  {
    type: "To review",
    tasks: [
      {
        id: 4,
        title: "Tasks title 4",
        date: "12/01/2025 at 11:00",
        priority: 1,
        persone: "Kaouthar ESSAHELI",
        content: "tasks content, continet list check, steps, details...",
      },
      {
        id: 5,
        title: "Tasks title 5",
        date: "05/11/2025 at 12:00",
        priority: 2,
        persone: "MARIA ESSAHELI",
        content: "tasks content, continet list check, steps, details...",
      },
      {
        id: 6,
        title: "Tasks title 6",
        date: "05/11/2025 at 12:00",
        priority: 4,
        persone: "MARIA ESSAHELI",
        content: "tasks content, continet list check, steps, details...",
      },
    ],
  },
  { type: "Done", tasks: [] },
];

export default function TasksPage() {
  return (
    <div className="">
      <h2 className="py-3 px-1">Tasks</h2>
      <div className="flex gap-5">
        {/* To do  */}
        {/* In progress */}
        {/* To review */}
        {/* Done */}
        {tasksList.map((onetaskstype, key) => (
          <div key={key}>
            <h4 className="m-2 text-text-black-strong text-xl font-medium text-center">
              {onetaskstype.type}
            </h4>
            <TasksType taskslist={onetaskstype.tasks} />
          </div>
        ))}
      </div>
    </div>
  );
}
