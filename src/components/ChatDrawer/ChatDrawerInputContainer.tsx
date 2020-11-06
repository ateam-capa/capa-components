import React, { useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import { AttachFile, Send } from "@material-ui/icons";
import ChatDrawerInputPresenter, {
  Props as PresenterProps
} from "./ChatDrawerInputPresenter";
import { DrawerInput } from "./styled";

export interface Props extends Pick<PresenterProps, "disableInput"> {
  onSend: (_: string) => void;
  onUpload: (_: FileList) => void;
}

const Adornment: React.FC<{
  position: "end" | "start";
  onClick: () => void;
  disabled?: boolean;
}> = props => (
  <InputAdornment
    className="input-adornment"
    position={props.position}
    onClick={props.onClick}
    disablePointerEvents={props.disabled}
  >
    <IconButton disabled={props.disabled}>{props.children}</IconButton>
  </InputAdornment>
);

const ChatDrawerInputContainer: React.FC<Props> = props => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const uploadInputId = "upload-chat-file";

  const onUpload = () => {
    if (props.disableInput) return console.error("disable input");
    const upload = document.getElementById(uploadInputId);
    if (!upload) return console.error("not find upload input");
    return upload.click();
  };

  const onSend = () => {
    if (props.disableInput) return console.error("disable input");
    if (!value) setError(true);
    else {
      setError(false);
      setValue("");
      props.onSend(value);
    }
  };

  const onChangeFile = (e: any) => {
    setError(false);
    if (e.target.files) {
      props.onUpload(e.target.files);
    }
  };

  const onEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const InputProps = {
    startAdornment: (
      <Adornment
        position="start"
        onClick={onUpload}
        disabled={props.disableInput}
      >
        <AttachFile fontSize="inherit" />
      </Adornment>
    ),
    endAdornment: (
      <Adornment position="end" onClick={onSend} disabled={props.disableInput}>
        <Send fontSize="inherit" />
      </Adornment>
    )
  };

  return (
    <DrawerInput>
      <input
        type="file"
        name={uploadInputId}
        id={uploadInputId}
        onChange={onChangeFile}
      />
      <ChatDrawerInputPresenter
        error={error}
        value={value}
        onChange={setValue}
        onEnter={onEnter}
        InputProps={InputProps}
        disableInput={props.disableInput}
      />
    </DrawerInput>
  );
};

export default ChatDrawerInputContainer;
