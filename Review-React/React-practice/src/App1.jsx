import { useState } from "react";

const Toggler = () => {
  // state: dong/mo -> isOpen (initialValue: true)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // if (isOpen) {
    //   setIsOpen(false);
    // } else {
    //   setIsOpen(true);
    // }
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        onClick={toggle}
        className="px-4 py-2 rounded bg-blue-500 text-white"
      >
        Toggler
      </button>
      {isOpen ? (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          neque.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

const Cordion = () => {
  const [isOpen, setIsOpen] = useState();

  const open = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={open} className="px-4 py-2 rounded bg-blue-200">
        Today's Quote
      </button>
      {isOpen && (
        <p>
          “Your goals are the road maps that guide you and show you what is
          possible for your life.”
        </p>
      )}
    </div>
  );
};

export default function App1() {
  return (
    <div>
      <Toggler />
      <br />
      <Cordion />
    </div>
  );
}
