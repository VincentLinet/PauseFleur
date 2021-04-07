import React, { useState } from "react";
import classnames from "classnames";

import { addMessages, deleteMessages, getPendingMessages } from "../controllers/message";

import { PlusIcon, MinusIcon } from "./Icons";

const ToolBox = ({ id, update }) => (
  <div className="toolbox">
    <PlusIcon className="plus" onClick={update(id, "action", "add")} />
    <MinusIcon className="minus" onClick={update(id, "action", "delete")} />
  </div>
);

const renderHeader = () => (
  <div className="header entry">
    <div className="message">Message</div>
    <div className="thesard">Thésard</div>
    <div className="toolbox"></div>
  </div>
);

const renderMessages = (messages, update) => (
  <div className="messages">
    {messages.map(({ text, name, action }, id) => (
      <div key={id} className={classnames("entry", action || "")}>
        <div className="message">
          <textarea value={text || undefined} onChange={update(id, "text")} />
        </div>
        <div className="thesard">
          <textarea value={name || undefined} onChange={update(id, "name")} />
        </div>
        <ToolBox id={id} update={update} />
      </div>
    ))}
  </div>
);

const renderApply = apply => (
  <div className={classnames("accept", { changes: apply })} onClick={apply}>
    Accept
  </div>
);

const renderList = (messages, apply, update) => (
  <>
    {renderHeader()}
    {renderMessages(messages, update)}
    {renderApply(apply)}
  </>
);

const renderEmpty = () => "Rien à valider aujourdhui !";

const List = ({ messages }) => {
  const [selection, setSelection] = useState(messages);
  const [refresh, setRefresh] = useState(false);
  const [changes, setChanges] = useState(false);

  const update = (id, field, content) => e => {
    const data = content || e.target.value;
    const messages = selection;
    messages[id] = { ...messages[id], [field]: data };
    setSelection(messages);
    setRefresh(!refresh);
    field === "action" && setChanges(true);
  };

  const process = async () => {
    const additions = selection.filter(({ action }) => action === "add");
    const deletions = selection.reduce((acc, { action, id }) => (action === "delete" ? [...acc, id] : acc), []);
    additions.length > 0 && (await addMessages({ messages: additions }));
    deletions.length > 0 && (await deleteMessages({ messages: deletions }));
    const pending = await getPendingMessages();
    setSelection(pending);
    setChanges(false);
  };

  const apply = changes ? process : undefined;

  return <div className="list">{messages.length > 0 ? renderList(selection, apply, update) : renderEmpty()}</div>;
};

export default List;
