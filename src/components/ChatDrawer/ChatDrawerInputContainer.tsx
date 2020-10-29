import React, { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import { AttachFile, Send } from "@material-ui/icons";
import ChatDrawerInputPresenter from "./ChatDrawerInputPresenter";
import { DrawerInput } from "./styled";

export interface Props {
  onSend: (_: string) => void;
  onUpload: (_: FileList) => void;
}

const ChatDrawerInputContainer: React.FC<Props> = props => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const uploadInputId = "upload-chat-file";

  const onUpload = () => {
    const upload = document.getElementById(uploadInputId);
    if (!upload) return console.error("not find upload input");
    return upload.click();
  };

  const onSend = () => {
    if (!value) setError(true);
    else {
      setError(false);
      setValue("");
      props.onSend(value);
    }
  };

  const InputProps = {
    startAdornment: (
      <InputAdornment className="input-adornment" position="start">
        <AttachFile fontSize="inherit" onClick={onUpload} />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment className="input-adornment" position="end">
        <Send fontSize="inherit" onClick={onSend} />
      </InputAdornment>
    )
  };

  return (
    <DrawerInput>
      <input
        type="file"
        name={uploadInputId}
        id={uploadInputId}
        onChange={e => {
          setError(false);
          props.onUpload(e.target.files);
        }}
      />
      <ChatDrawerInputPresenter
        error={error}
        value={value}
        onChange={setValue}
        InputProps={InputProps}
      />
    </DrawerInput>
  );
};

export default ChatDrawerInputContainer;
