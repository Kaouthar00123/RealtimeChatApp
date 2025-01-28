import React from "react";

function CardDash(props) {
  return (
    <div
      className={
        "flex flex-col justify-center items-center align-middle max-w-sm p-6 " +
        (props.color == "green"
          ? "bg-green-50"
          : props.color == "blue"
          ? "bg-blue-50"
          : "bg-gray-50") +
        " border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      }
    >
      <h5 class="mb-2 text-base font-normal tracking-tight text-text-main-color-black-light dark:text-white">
        {props.title}
      </h5>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-text-black-strong dark:text-white">
        {props.price}
      </h5>
      <p class="text-base font-normal text-text-gray-light dark:text-gray-400">
        {props.details}
      </p>
    </div>
  );
}

export default CardDash;
