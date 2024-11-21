import { useState, useEffect } from "react";

export const TransitionEffects = ({ visible, children }) => {
  const [show, setShow] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (visible) {
      setRendered(true);
      setTimeout(() => setShow(true), 10); // Small timeout to allow CSS transition
    } else {
      setShow(false);
      setTimeout(() => setRendered(false), 200); // Match duration of CSS transition
    }
  }, [visible]);

  if (!rendered) return null;

  return (
    <div
      className={`transition-all ease-in-out duration-200 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transition: "all 200ms ease-in-out",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(1.5rem)",
      }}
    >
      {children}
    </div>
  );
};
