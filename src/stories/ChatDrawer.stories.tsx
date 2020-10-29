import React, { useState } from "react";

import { Button } from "@material-ui/core";
import Provider from "../components/Provider";
import ChatDrawer from "../components/ChatDrawer";
import { MessageItem } from "../components/ChatDrawer/types";
import avatarPartner from "./assets/avatarPartner.jpg";

export default {
  title: "COMMON | ChatDrawer", // 스토리북에서 보여질 그룹과 경로를 명시
  component: ChatDrawer // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const exampleItem: MessageItem = {
    id: "1",
    name: "조준호",
    createdAt: new Date("2019-03-05").toDateString(),
    file: {
      file_key: "test",
      file_name: "aimho.stl"
    }
  };
  const exampleItem2: MessageItem = {
    id: "2",
    avatar: avatarPartner,
    name: "크블",
    createdAt: new Date().toDateString(),
    content: "안녕하세요 반갑습니다."
  };
  const [messages] = useState(
    Array.from({ length: 3 }, (_, index) =>
      index % 2 ? exampleItem : exampleItem2
    ) as MessageItem[]
  );
  const [open, setOpen] = useState(false);
  const extra = (
    <Button
      color="primary"
      variant="outlined"
      onClick={() => console.log("업체 소개 !!")}
    >
      업체소개
    </Button>
  );

  return (
    <Provider>
      <Button color="primary" onClick={() => setOpen(true)}>
        채팅창 열기
      </Button>

      <ChatDrawer
        title="업체이름"
        subTitle="업체주소"
        extra={extra}
        open={open}
        onClose={() => setOpen(false)}
        onSend={console.log}
        onUpload={console.log}
        onDownload={console.log}
        messageItems={messages}
        senderId="1"
        receiverLastSeen="2020-10-28"
      />
    </Provider>
  );
};
