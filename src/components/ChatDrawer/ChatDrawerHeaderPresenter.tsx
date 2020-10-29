import React from "react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DrawerHeader } from "./styled";

export interface Props {
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
    const subTitle = props.subTitle && (
      <p className="sub-title">{props.subTitle}</p>
    );

    return (
      <span className="title-wrapper">
        <p className="title">{props.title}</p>
        {subTitle}
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
