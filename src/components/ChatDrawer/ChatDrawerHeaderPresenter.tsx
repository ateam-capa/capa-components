import React from "react";
import { IconButton, Chip, Grid } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DrawerHeader } from "./styled";
import colorSet from "../../styles/colorSet";

export interface Props {
  status: string;
  isConnect: boolean;
  title: string;
  subTitle?: string;
  extra?: React.ReactNode;
  onClose: () => void;
}

const ChatDrawerHeaderPresenter: React.FC<Props> = props => {
  const Extra = () => {
    if (!props.extra) return null;
    return <span className="extra">{props.extra}</span>;
  };

  const TitleWrapper = () => {
    const MuiChip = () => {
      if (props.status !== "CONNECTED") return null;

      const style = {
        color: colorSet.gray000,
        marginRight: 8
      };

      if (props.isConnect)
        return (
          <Grid item xs="auto">
            <Chip
              size="small"
              label="업체확정"
              style={{ backgroundColor: colorSet.successBase, ...style }}
            />
          </Grid>
        );
      return (
        <Grid item xs="auto">
          <Chip
            size="small"
            label="타업체확정"
            style={{ backgroundColor: colorSet.warningBase, ...style }}
          />
        </Grid>
      );
    };

    return (
      <span className="title-wrapper">
        <Grid container alignItems="center" spacing={1}>
          <MuiChip />
          <Grid item xs="auto">
            <p className="title">{props.title}</p>
          </Grid>
          <Grid item xs={12} sm="auto">
            {props.subTitle && <p className="sub-title">{props.subTitle}</p>}
          </Grid>
        </Grid>
      </span>
    );
  };

  return (
    <DrawerHeader>
      <IconButton onClick={props.onClose} size="small">
        <Close fontSize="large" />
      </IconButton>

      <TitleWrapper />

      <Extra />
    </DrawerHeader>
  );
};

export default ChatDrawerHeaderPresenter;
