import React, { useCallback, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import events from "../data/events";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const [eventsData, setEventsData] = useState(events);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.WEEK);

  const [openModal, setOpenModal] = useState(false);
  const [OpenEventCollect, setOpenEventCollect] = useState(false);

  const onNavigate = useCallback((newDate) => setDate(newDate), [setDate]);
  const onView = useCallback((newView) => setView(newView), [setView]);
  const [currentEvent, setcurrentEvent] = useState("");
  const [Currentdateselected, setCurrentdateselected] = useState({
    start: "",
    end: "",
  });
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    //inputs info, get title and description, and close form
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
  };
  return (
    <div className="App">
      <Calendar
        views={["month", "week", "day", "agenda"]}
        selectable
        localizer={localizer}
        date={date}
        defaultView="week"
        events={eventsData}
        style={{ height: "70vh", width: "70vw" }}
        onSelectEvent={(event) => {
          setcurrentEvent(event);
          setOpenModal(true);
        }}
        onSelectSlot={(date) => {
          setCurrentdateselected(date);
          setOpenEventCollect(true);
        }}
        onNavigate={onNavigate}
        onView={onView}
        view={view}
      />
      {/* Modal for collecting and getting information from event selected inputs */}
      <Modal
        show={OpenEventCollect}
        size="md"
        onClose={() => setOpenEventCollect(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className=" text-center text-xl font-medium text-gray-900 dark:text-white">
              Event Details
            </h3>
            <form
              className="flex flex-col gap-5"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const formJson = Object.fromEntries(formData.entries());
                let title = formJson["event-title"];
                let desc = formJson["event-desc"];
                let allday = formJson["event-allday"]
                  ? formJson["event-allday"]
                  : false;
                let start = Currentdateselected["start"];
                let end = Currentdateselected["end"];
                setEventsData([
                  ...eventsData,
                  {
                    title: title,
                    desc: desc,
                    start: start,
                    end: end,
                    allDay: allday,
                  },
                ]);
                setOpenEventCollect(false);
              }}
            >
              <div className="flex flex-col gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Event title" />
                  </div>
                  <TextInput id="event-title" name="event-title" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Event description" />
                  </div>
                  <TextInput id="event-desc" name="event-desc" />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="event-allday"
                      name="event-allday"
                      value={true}
                    />
                    <Label htmlFor="remember">
                      Repeat this event all days ?
                    </Label>
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <Button type="submit">Add event at selected date</Button>
                  <Button onClick={() => setOpenEventCollect(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modal for desplaying event selected */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          {currentEvent.title ? currentEvent.title : ""}
        </Modal.Header>

        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {currentEvent.desc ? currentEvent.desc : ""}
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {"start date: " +
                (currentEvent.start ? currentEvent.start : "") +
                " end date: " +
                (currentEvent.end ? currentEvent.end : "")}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
