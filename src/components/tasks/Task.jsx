import { Accordion } from "flowbite-react";
import React, { useState } from "react";

export default function Task(props) {
  const [OpenContentAccorion, setOpenContentAccorion] = useState(false);

  return (
    <div className="p-2 w-[300px] bg-white rounded-sm shadow-sm border flex flex-col gap-3 text-base text-text-gray-light">
      <div
        id="prio_date"
        className="text-sm flex justify-between items-center align-middle"
      >
        <span
          className={
            "text-sm text-white p-1 rounded-md " +
            (props.details.priority == 1
              ? "bg-red-400"
              : props.details.priority == 2
              ? "bg-gray-400"
              : "bg-green-400")
          }
        >
          {props.details.priority == 1
            ? "Important"
            : props.details.priority == 2
            ? "Medium"
            : "Low"}
        </span>
        <span> {props.details.date} </span>
      </div>
      <div id="title" className="text-text-main-color-black-light font-medium">
        {props.details.title}
      </div>

      {/* Other options */}
      <div
        id="autres"
        className="flex justify-between align-middle items-center"
      >
        {/* Avatar person */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full"
            src="./assets/avatar-1.jpg"
            alt=""
          />
          <div className="font-medium dark:text-white">
            <div>{props.details.person}</div>
          </div>
        </div>
        {/* Other options */}
        <div id="other_options">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path
                fill="currentColor"
                d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Content is accordion */}
      <div id="accordion-flush">
        <h4 id="accordion-flush-heading-1">
          <button
            className="flex items-center justify-between w-full py-1 font-medium rtl:text-right text-text-gray-light border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            onClick={() => setOpenContentAccorion(!OpenContentAccorion)}
          >
            <span>{"task details..."}</span>
            <svg
              className="w-3 h-3 rotate-180 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h4>
        <div
          id="accordion-flush-body-1"
          className={OpenContentAccorion ? "" : "hidden"}
        >
          <div className="py-1 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {props.details.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
