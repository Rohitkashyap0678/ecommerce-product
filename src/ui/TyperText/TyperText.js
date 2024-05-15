import React, { useState, useEffect } from "react";
import "./index.css"

const TYPING_SPEED = 500000000;
const DELETING_SPEED = 500000000;

const TyperText = (props) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);
 
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % props.dataText.length;
      const fullText = props.dataText[i];

      setText((prevText) =>
        isDeleting
          ? fullText.substring(0, prevText.length - 1)
          : fullText.substring(0, prevText.length + 1)
      );

      setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTimeout(handleType, typingSpeed);
    };

    handleType();

    return () => clearTimeout(handleType);
  }, [isDeleting, loopNum, props.dataText, text, typingSpeed]);

  return (
    <h1>
      {props.heading}&nbsp;
      <span>{text}</span>
      <span id="cursor"></span>
    </h1>
  );
};

const dataText = [
  "Vinyl swag.",
  "Seitan jianbing.",
  // "Enamel pin meditation.",
  // "Denim seitan.",
  // "Semiotics austin.",
  // "Sriracha fanny pack.",
  // "Vape raw dreamcatcher.",
  // "Fam blog.",
  // "90s church-key.",
  // "Pabst distillery.",
  // "Street art unicorn."
];

const App = () => {
  return (
    <div id="app">
      <TyperText heading="Things for hipsters:" dataText={dataText} />
    </div>
  );
};

export default App;
