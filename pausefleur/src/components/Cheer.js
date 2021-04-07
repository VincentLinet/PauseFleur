import React, { useState } from "react";
import classnames from "classnames";

import { postMessage } from "../controllers/message";

import { SadFaceIcon, ExcitedFaceIcon, CloseIcon, HelpIcon, HeartIcon } from "./Icons";

const Cheer = ({ open, closeCheer }) => {
  const [messageFocus, setMessageFocus] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [cancelHover, setCancelHover] = useState(false);
  const [sendHover, setSendHover] = useState(false);
  const [hintHover, setHintHover] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const display = classnames("cheer", { open });
  const name = classnames("name", { focused: nameFocus });
  const help = classnames("help", { hovered: hintHover });

  const messageChanged = e => setMessageValue(e.target.value);
  const messageFocused = e => setMessageFocus(true);
  const messageBlured = e => setMessageFocus(false);

  const nameChanged = e => setNameValue(e.target.value);
  const nameFocused = e => setNameFocus(true);
  const nameBlured = e => setNameFocus(false);

  const sendOver = e => setSendHover(true);
  const sendLeave = e => {
    setSendHover(false);
    sendSuccess && setSendSuccess(false);
  };

  const cancelOver = e => setCancelHover(true);
  const cancelLeave = e => setCancelHover(false);

  const hintOver = e => setHintHover(true);
  const hintLeave = e => setHintHover(false);

  const clickSend = () => {
    const success = !!postMessage({ message: messageValue, name: nameValue });
    if (success) {
      setSendSuccess(success);
      setMessageValue("");
      setNameValue("");
    }
  };

  return (
    <div className={display}>
      <CloseIcon className="close" onClick={closeCheer} />
      <p>
        Toi aussi, contribue à rendre ton thésard heureux et à le soutenir dans son labeur quotidien. Saisis ici le
        message que tu aimerais qu'il voie, avec un peu de chance il apparaîtra l'un des jours prochains !
      </p>
      <input
        value={messageValue}
        onChange={messageChanged}
        onFocus={messageFocused}
        onBlur={messageBlured}
        className="message"
        placeholder="Message"
      />
      <div>
        <div className={name}>
          <input
            value={nameValue}
            onChange={nameChanged}
            onFocus={nameFocused}
            onBlur={nameBlured}
            placeholder="Prénom du Thésard"
          />
          <HelpIcon className="hint" onMouseOver={hintOver} onMouseLeave={hintLeave} />
          <div className={help}>Il n'est pas encore utilisé, mais un jour peut être...</div>
        </div>
        <div className="buttons">
          <div className="button cancel" onMouseOver={cancelOver} onMouseLeave={cancelLeave} onClick={closeCheer}>
            {cancelHover ? <SadFaceIcon /> : "Annuler"}
          </div>
          <div className="button send" onMouseOver={sendOver} onMouseLeave={sendLeave} onClick={clickSend}>
            {sendHover ? sendSuccess ? <HeartIcon /> : <ExcitedFaceIcon /> : "Encourager"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheer;
