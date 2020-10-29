import { Button } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import React from "react";
import { DrawerContent, DrawerContentItem } from "./styled";
import { MessageFile, MessageItem } from "./types";

export interface Props {
  senderId?: string;
  senderLastSeen?: string;
  receiverLastSeen?: string;
  messageItems: MessageItem[];
  onDownload: (_?: MessageFile) => void;
}

const ChatDrawerContentContainer: React.FC<Props> = props => {
  return (
    <DrawerContent>
      {props.messageItems.map((item, index) => {
        const isSender = item.id === props.senderId;
        const isSeen = () => {
          if (!isSender && props.senderLastSeen) {
            return new Date(props.senderLastSeen) > new Date(item.createdAt);
          }
          if (isSender && props.receiverLastSeen) {
            return new Date(props.receiverLastSeen) > new Date(item.createdAt);
          }
          return true;
        };
        const Seen = () => (isSeen() ? null : <p className="seen">1</p>);
        const Avatar = () =>
          item.avatar ? <img src={item.avatar} alt="avatar" /> : null;

        const Content = () => {
          if (item.file) {
            const onDownload = () => props.onDownload(item.file);
            return (
              <Button
                className="file-download-btn"
                variant="contained"
                onClick={onDownload}
                endIcon={<GetApp />}
                fullWidth
              >
                {item.file.file_name}
              </Button>
            );
          }
          return <p className="content">{item.content}</p>;
        };

        return (
          <DrawerContentItem isSender={isSender} key={index}>
            <Avatar />

            <div className="msg-content">
              <span className="msg-info">
                <p className="name">{item.name}</p>
                <p className="created">{item.createdAt}</p>
              </span>
              <Content />
            </div>

            <Seen />
          </DrawerContentItem>
        );
      })}
    </DrawerContent>
  );
};

export default ChatDrawerContentContainer;
