import React from "react";
import { Button } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DrawerContent, DrawerContentItem, DrawerEmpty } from "./styled";
import { MessageFile, MessageItem } from "./types";

export interface Props {
  senderId?: string;
  senderLastSeen?: string;
  receiverLastSeen?: string;
  messageItems: MessageItem[];
  emptyImg?: string;
  onDownload: (_?: MessageFile) => void;
}

const ChatDrawerContentContainer: React.FC<Props> = props => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  if (props.messageItems.length === 0) {
    return (
      <DrawerEmpty>
        <img
          src="https://ncr-creatable-request-file-staging.s3.ap-northeast-2.amazonaws.com/chat_empty_guide.png"
          alt="파트너 안내"
        />
        <p className="description">
          안녕하세요 파트너님! <br />
          <strong>고객에게 첫 번째 메세지를 보내보세요</strong>
        </p>
      </DrawerEmpty>
    );
  }

  return (
    <DrawerContent>
      {props.messageItems.map((item, index) => {
        const isSender = item.id === props.senderId;
        const isSeen = () => {
          if (!isSender && props.senderLastSeen) {
            return new Date(props.senderLastSeen) > new Date(item.createdAt);
          }
          if (props.receiverLastSeen) {
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
            const shortFileName = (text: string) => {
              if (matches && text.length > 20) {
                return (
                  text.substr(0, 20) +
                  "..." +
                  text.substr(text.lastIndexOf("."), text.length)
                );
              }
              return text;
            };

            return (
              <Button
                className="file-download-btn"
                variant="contained"
                onClick={onDownload}
                endIcon={<GetApp />}
                fullWidth
              >
                {shortFileName(item.file.file_name)}
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
                <p className="created">{item.createdAtFormat}</p>
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
