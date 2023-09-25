import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <span className="messageName">Jane</span>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Message;
