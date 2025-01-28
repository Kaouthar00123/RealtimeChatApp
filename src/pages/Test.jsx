import React, { useEffect, useRef, useState } from "react";
import addnewelement from "../utils/functionRest/functionsREST";
import get from "../utils/functionRest/getRest";
import axios from "axios";

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

// Structure: les discussions sont organiser en (id1,id2), et contient list des msgs chaquen fih sender, et msgContent (Text, FileSystem, VideoColorSpace.apply.apply;)
const discussions = [
  // with user1
  {
    peerId: 1,
    msgs: [
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content:
          "Hey, wsh cv ?, kifuh analyse et amlioration, etude et progression",
      },
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content: "Sinon, les trucs sociaux ??!",
      },
      {
        sender: 0,
        date: "01/12/2024 à 02:00",
        content:
          "Hey 2, wsh cv ?, kifuh analyse et amlioration, etude et progression",
      },
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content: "Sinon, hmdlh",
      },
      {
        sender: 0,
        date: "01/12/2024 à 02:00",
        content: "Hmdlh aela kol hal !",
      },
      {
        sender: 0,
        date: "01/12/2024 à 02:00",
        content: "Les plans ??",
      },
    ],
  },
  // with user2
  {
    peerId: 2,
    msgs: [
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content:
          "Hey, wsh cv ?, kifuh analyse et amlioration, etude et progression",
      },
      {
        sender: 0,
        date: "01/12/2024 à 02:00",
        content: "Sinon, les trucs sociaux ??!",
      },
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content:
          "Hey, wsh cv ?, kifuh analyse et amlioration, etude et progression",
      },
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content: "Sinon, les trucs sociaux ??!",
      },
    ],
  },
  {
    peerId: 3,
    msgs: [
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content:
          "Hey, wsh cv ?, kifuh analyse et amlioration, etude et progression",
      },
      {
        sender: 0,
        date: "01/12/2024 à 02:00",
        content: "Sinon, les trucs sociaux ??!",
      },
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content:
          "Hey, wsh cv ?, kifuh analyse et amlioration, etude et progression",
      },
      {
        sender: 1,
        date: "01/12/2024 à 02:00",
        content: "Sinon, les trucs sociaux ??!",
      },
    ],
  },
  //...
];

const msgsUrl = "http://localhost:4001/msgs";

export default function Test() {
  const [discussionsUser, setdiscussionsUser] = useState(discussions);
  const [showUserDetails, setShowUserDetails] = useState({
    date: "01/12/2024 à 02:00",
    content: 1,
    userId: 1,
  });
  const sendmsg = useRef(null);

  useEffect(() => {
    // set time to get
    setInterval(() => {
      // get(msgsUrl).then((res) => {
      //   console.log("dans useefct user 1, and data: ", res);
      //   if (res && res.length != 0) {
      //     if (res[0].id == 1) {
      //       console.log("dans useefct user 1, and data: ", res);
      //       var newtable = [...discussionsUser];
      //       newtable[0].msgs.push({ ...res[0].msg, sender: 0 });
      //       setdiscussionsUser(newtable);
      //     }
      //   }
      // });
      axios
        .get(msgsUrl)
        .then((response) => {
          console.log("response.data: ", response.data);
          let res = response.data;
          console.log("dans useefct user 1, and data: ", res);
          if (res && res.length != 0) {
            if (res[0].id == 1) {
              console.log("dans useefct user 1, and data: ", res);
              var newtable = [...discussionsUser];
              newtable[0].msgs.push({ ...res[0].msg, sender: 0 });
              setdiscussionsUser(newtable);
            }
          }
        })
        .catch((error) => {
          console.log("error: ", error);
          return "error";
        });
    }, 50000);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <h2 className="py-3 px-1">Chat</h2>
      <div
        id="chats"
        className="m-10 p-3 flex gap-5 bg-bg-gray-normal text-text-gray-light justify-start md:flex-col"
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
                  setShowUserDetails({
                    date: "01/12/2024 à 02:00",
                    content: 1,
                    userId: onechat.id,
                  });
                }}
              />

              <div
                onClick={() => {
                  console.log("div chat clicked!");
                  setShowUserDetails({
                    date: "01/12/2024 à 02:00",
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

        {/* Details with user selected */}
        <div id="details" className="w-[40%] md:w-full">
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
            <div
              id="userchat"
              className="bg-white rounded-md shadow-md border-0 w-full p-3"
            >
              <h3 className="my-5">Show discussion</h3>
              <div id="discussion">
                {/* parcourir discussionsUser puis si sender == 1, donc moi affiche de right, si sender == 0 so affiche autre user with son image  */}
                {discussionsUser
                  .findLast((user) => user.peerId === showUserDetails.userId)
                  .msgs.map((msg) => (
                    <div
                      className={
                        "flex gap-2.5 my-3 " +
                        (msg.sender === 0
                          ? "items-start"
                          : "flex-row-reverse items-end")
                      }
                    >
                      <img
                        className="w-8 h-8 rounded-full"
                        src={
                          msg.sender === 0
                            ? mylistchat.findLast(
                                (user) => user.id === showUserDetails.userId
                              ).img
                            : "./assets/avatar-me.jpg"
                        }
                        alt="Jese image"
                      />
                      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {msg.sender === 0
                              ? mylistchat.findLast(
                                  (user) => user.id === showUserDetails.userId
                                ).name
                              : "Kaouthar ESH Pro"}
                          </span>
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            {msg.date}
                          </span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                          {msg.content}
                        </p>
                        {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {"Delivered"}
                    </span> */}
                      </div>
                    </div>
                  ))}
                {/* Cas 1: she send me */}
                {/* <div className="flex items-start gap-2.5 my-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={
                      mylistchat.findLast(
                        (user) => user.id === showUserDetails.userId
                      ).img
                    }
                    alt="Jese image"
                  />
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {
                          mylistchat.findLast(
                            (user) => user.id === showUserDetails.userId
                          ).name
                        }
                      </span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {
                          discussionsUser.findLast(
                            (user) => user.peerId === showUserDetails.userId
                          ).msgs[0].date
                        }
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                      {
                        discussionsUser.findLast(
                          (user) => user.peerId === showUserDetails.userId
                        ).msgs[0].content
                      }
                    </p>
                     <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {"Delivered"}
                    </span> 
                  </div>
                </div> */}
                {/* Cas 2: Me the sender */}
                {/* <div className="flex flex-row-reverse items-end gap-2.5 my-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={
                      mylistchat.findLast(
                        (user) => user.id === showUserDetails.userId
                      ).img
                    }
                    alt="Jese image"
                  />
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {
                          mylistchat.findLast(
                            (user) => user.id === showUserDetails.userId
                          ).name
                        }
                      </span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {
                          discussionsUser.findLast(
                            (user) => user.peerId === showUserDetails.userId
                          ).msgs[0].date
                        }
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                      {
                        discussionsUser.findLast(
                          (user) => user.peerId === showUserDetails.userId
                        ).msgs[0].content
                      }
                    </p>
                    
                  </div>
                </div> */}
                {/* Write your new msg */}
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    let i = discussionsUser.findLastIndex(
                      (listmsgsOne) =>
                        listmsgsOne.peerId === showUserDetails.userId
                    );
                    var newtable = [...discussionsUser];
                    const msg = {
                      date: "00:00",
                      content: sendmsg.current.value,
                      sender: 1,
                    };
                    newtable[i].msgs.push(msg);
                    setdiscussionsUser(newtable);
                    addnewelement(msgsUrl, msg);
                  }}
                >
                  <label for="chat" className="sr-only">
                    Your message
                  </label>
                  <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          fill="currentColor"
                          d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                        />
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                        />
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                        />
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                        />
                      </svg>
                      <span className="sr-only">Add emoji</span>
                    </button>
                    <textarea
                      ref={sendmsg}
                      id="chat"
                      rows="1"
                      className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your message..."
                    ></textarea>
                    <button
                      type="submit"
                      className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-5 h-5 rotate-90 rtl:-rotate-90"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                      </svg>
                      <span className="sr-only">Send message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
