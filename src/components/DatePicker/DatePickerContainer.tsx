import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

import InputPresenter, { Props as InputPresenterProps } from "./InputPresenter";
import PopoverPresenter, {
  Props as PopoverPresenterProps
} from "./PopoverPresenter";

interface Props
  extends Pick<InputPresenterProps, "value" | "placeholder" | "errorMsg">,
    Pick<PopoverPresenterProps, "onChange"> {}

const DatePickerContainer = (props: Props) => {
  const [anchorEl, setAnchorEl]: any = useState(undefined);

  return (
    <React.Fragment>
      <InputPresenter {...props} setAnchorEl={setAnchorEl} />
      <PopoverPresenter
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(undefined)}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};

export default DatePickerContainer;
