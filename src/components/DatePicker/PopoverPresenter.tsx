import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Props as InputPresenterProps } from "./InputPresenter";
import { MuiPopover } from "./styled";

export interface Props extends Pick<InputPresenterProps, "value"> {
  anchorEl: any;
  onClose: () => void;
  onChange: (_: Date) => void;
  minDate?: Date;
}

const PopoverPresenter = (props: Props) => (
  <MuiPopover
    anchorEl={props.anchorEl}
    open={props.anchorEl ? true : false}
    onClose={props.onClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
    }}
  >
    <Calendar
      locale={"ko"}
      value={props.value}
      minDate={props.minDate}
      onChange={date => {
        props.onChange(date as Date);
        props.onClose();
      }}
    />
  </MuiPopover>
);

export default PopoverPresenter;
