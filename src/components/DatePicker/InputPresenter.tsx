import React from "react";
import { BaseTextFieldProps, TextField } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import "react-calendar/dist/Calendar.css";

export interface Props {
  value?: Date;
  setAnchorEl: (_: any) => void;
  textFieldProps?: BaseTextFieldProps;
}

const formatDate = (value: Date): string => {
  let year = value.getFullYear(),
    month = "" + (value.getMonth() + 1),
    day = "" + value.getDate(),
    hour = "" + value.getHours(),
    minutes = "" + value.getMinutes();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (hour.length < 2) hour = "0" + hour;
  if (minutes.length < 2) minutes = "0" + minutes;

  const result = "~YYYY.MM.DD"
    .replace("YYYY", String(year))
    .replace("MM", String(month))
    .replace("DD", String(day))
    .replace("HH", String(hour))
    .replace("mm", String(minutes));

  return result;
};

const InputPresenter = (props: Props) => {
  const value = props.value ? formatDate(props.value) : "";

  return (
    <TextField
      {...props.textFieldProps}
      value={value}
      variant="outlined"
      onClick={e => props.setAnchorEl(e.currentTarget)}
      InputProps={{
        endAdornment: <CalendarToday style={{ color: "#DADADA" }} />
      }}
    />
  );
};

export default InputPresenter;
