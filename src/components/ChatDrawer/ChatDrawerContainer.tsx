import React from "react";
import { Drawer, useMediaQuery } from "@material-ui/core";
import ChatDrawerHeaderPresenter, {
  Props as HeaderProps
} from "./ChatDrawerHeaderPresenter";
import ChatDrawerContentPresenter, {
  Props as ContentProps
} from "./ChatDrawerContentPresenter";
import ChatDrawerInputContainer, {
  Props as InputProps
} from "./ChatDrawerInputContainer";
import theme from "../../styles/theme";
import colorSet from "../../styles/colorSet";

interface Props
  extends Pick<
      HeaderProps,
      "status" | "isConnect" | "title" | "subTitle" | "extra" | "onClose"
    >,
    Pick<
      ContentProps,
      | "senderId"
      | "senderLastSeen"
      | "receiverLastSeen"
      | "messageItems"
      | "onDownload"
    >,
    Pick<InputProps, "onSend" | "onUpload" | "disableInput"> {
  open: boolean;
}

const ChatDrawerContainer: React.FC<Props> = props => {
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const disableInput =
    props.disableInput || (props.status === "CONNECTED" && !props.isConnect);

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={props.onClose}
      PaperProps={{
        style: {
          width: "100%",
          maxWidth: !matches ? "600px" : "100%",
          backgroundColor: colorSet.backgroundLight
        }
      }}
      elevation={4}
    >
      <ChatDrawerHeaderPresenter {...props} />
      <ChatDrawerContentPresenter {...props} />
      <ChatDrawerInputContainer {...props} disableInput={disableInput} />
    </Drawer>
  );
};

export default ChatDrawerContainer;
