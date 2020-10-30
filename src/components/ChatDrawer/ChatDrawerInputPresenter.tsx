import React from "react";
import { InputProps, TextField } from "@material-ui/core";

export interface Props {
  error?: boolean;
  value?: string;
  onChange: (_: string) => void;
  InputProps: Partial<InputProps>;
  disableInput?: boolean;
}

const ChatDrawerInputPresenter: React.FC<Props> = props => {
  return (
    <TextField
      variant="outlined"
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      placeholder="메세지를 입력해주세요"
      InputProps={props.InputProps}
      error={props.error}
      disabled={props.disableInput}
      multiline
      fullWidth
    />
  );
};

export default ChatDrawerInputPresenter;
