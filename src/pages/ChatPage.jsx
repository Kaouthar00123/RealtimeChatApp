import React, { useState } from "react";

const mylistchat = [
  {
    date: "01/05/2024",
    img: "./assets/avatar-1.jpg",
    id: 1,
    name: "Kaouthar",
    "last-msg": "Hey kaouthar, how're you today ?, what's new !!",
  },
  {
    date: "01/05/2024",
    img: "./assets/avatar-real-boy1.jpg",
    id: 2,
    name: "Houssem",
    "last-msg": "Hey kaouthar, how're you today ?, what's new !!",
  },
  {
    date: "01/05/2024",
    img: "./assets/avatar-real-boy2.jpg",
    id: 3,
    name: "Iyad",
    "last-msg": "Hey kaouthar, how're you today ?, what's new !!",
  },
  {
    date: "01/05/2024",
    img: "./assets/avatar-real-girl.jpg",
    id: 4,
    name: "Siham",
    "last-msg": "Hey kaouthar, how're you today ?, what's new !!",
  },
];

const usersinfo = [
  {
    id: 1,
    name: "kaouthar esh",
    email: "kaouthar@gmail.com",
    groups: ["works", "family"],
  },
  {
    id: 2,
    name: "koko two hana",
    email: "mimi@gmail.com",
    groups: ["works"],
  },
  {
    id: 3,
    name: "REDA esh",
    email: "kaouthar@gmail.com",
    groups: ["works", "family"],
  },
  {
    id: 4,
    name: "PAPI two hana",
    email: "mimi@gmail.com",
    groups: ["works"],
  },
];

export default function ChatPage() {
  const [showUserDetails, setShowUserDetails] = useState({
    content: 1,
    userId: 1,
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <h2 className="py-3 px-1">Chat</h2>
      <div
        id="chats"
        className="m-10 p-3 flex gap-5 bg-bg-gray-normal text-text-gray-light justify-start"
      >
        {/* Liste Chat */}
        <div
          className="w-[50%] p-3 rounded-md bg-transparent shadow-md border-0 flex flex-col gap-3"
          id="listchats"
        >
          {/* List chat avatar */}
          {mylistchat.map((onechat) => (
            <div className="bg-white cursor-pointer flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full"
                src={onechat.img}
                alt=""
                onClick={() => {
                  console.log("img clicked");
                  setShowUserDetails({ content: 1, userId: onechat.id });
                }}
              />

              <div
                onClick={() => {
                  console.log("div chat clicked!");
                  setShowUserDetails({
                    content: 2,
                    userId: onechat.id,
                  });
                }}
                className="max-w-[400px] max-h-[75px] space-y-1 font-medium dark:text-white p-2 flex justify-between"
              >
                <div
                  id="important-info"
                  className="flex flex-col justify-between max-w-[85%]"
                >
                  <div>{onechat.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {onechat["last-msg"]}
                  </div>
                </div>
                <div
                  id="time"
                  className="flex flex-col justify-between text-sm items-end"
                >
                  <span className="text-gray-400">{onechat.date}</span>
                  <span className="text-red-300">{"not read"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="details" className="w-[40%]">
          {/* Cas 1: clic on user image, so show the user infos */}
          {/* Cas 2: clic on user content, so show the discussion */}

          {showUserDetails.content === 1 ? (
            <div
              id="details-user"
              className="bg-white rounded-md shadow-md border-0 w-full p-3"
            >
              <div id="user-content" className="flex flex-col gap-5 p-3">
                <div
                  id="name"
                  className="flex flex-col gap-2 justify-center items-center align-middle"
                >
                  <img
                    className="w-10 h-10 rounded-full mx-auto text-center"
                    src={
                      mylistchat.findLast(
                        (user) => user.id === showUserDetails.userId
                      ).img
                    }
                    alt="Rounded avatar"
                  />
                  <span className="text-gray-400 text-sm">
                    {
                      mylistchat.findLast(
                        (user) => user.id === showUserDetails.userId
                      ).name
                    }
                  </span>
                  <span className="text-gray-400 text-sm">
                    Last Interacted: Few hours back
                  </span>
                </div>
                <div id="other-user-details" className="flex flex-col gap-3">
                  <div
                    id="email"
                    className="flex flex-col gap-1 text-base text-text-gray-light"
                  >
                    <span className="font-medium text-gray-500">Email: </span>
                    <span>
                      {
                        usersinfo.findLast(
                          (user) => user.id === showUserDetails.userId
                        ).email
                      }
                    </span>
                  </div>
                  <div
                    id="email"
                    className="flex flex-col gap-1 text-base text-text-gray-light"
                  >
                    <span className="font-medium text-gray-500">Groups: </span>
                    <div className="flex gap-1">
                      {usersinfo
                        .findLast((user) => user.id === showUserDetails.userId)
                        .groups.map((onegrp) => (
                          <span>{onegrp + " ,"}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div id="userchat">Show discussion</div>
          )}
        </div>
      </div>
    </section>
  );
}
