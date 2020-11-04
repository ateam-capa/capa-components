import styled from "styled-components";
import { Popover } from "@material-ui/core";
import colorSet from "../../styles/colorSet";

export const MuiPopover = styled(Popover)`
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${colorSet.primary50};
  }
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${colorSet.backgroundBase};
  }
`;
