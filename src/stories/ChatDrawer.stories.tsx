import React, { useState } from "react";

import { Button } from "@material-ui/core";
import Provider from "../components/Provider";
import ChatDrawer from "../components/ChatDrawer";
import { MessageItem } from "../components/ChatDrawer/types";

export default {
  title: "COMMON | ChatDrawer", // 스토리북에서 보여질 그룹과 경로를 명시
  component: ChatDrawer // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
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

  const dummyChat: MessageItem[] = [
    {
      avatar:
        "data:image/jpeg;base64,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",
      content:
        "프디팀 실비실님과 AteamVentures 조준호님이 업체 확정되었습니다.",
      createdAt: "2020-11-26T02:29:29.598966",
      createdAtFormat: "오전 11:29",
      file: undefined,
      id: null,
      name: "실비실",
      type: "CONNECTED"
    },
    {
      id: "1",
      name: "aimho",
      createdAt: new Date().toString(),
      createdAtFormat: "YYYY-MM-DD",
      content: "안녕하세요고개잉니림ㄴ아ㅓㄹㅇㄴㅁㅇ랜야머란이러매"
    }
  ];

  return (
    <Provider>
      <Button color="primary" onClick={() => setOpen(true)}>
        채팅창 열기
      </Button>

      <ChatDrawer
        isConnect
        open={open}
        status="CONNECTED"
        title="업체이름"
        subTitle="업체주소"
        extra={extra}
        onClose={() => setOpen(false)}
        onSend={console.log}
        onUpload={console.log}
        onDownload={console.log}
        messageItems={dummyChat}
        senderId="1"
        receiverLastSeen="2020-10-28"
      />
    </Provider>
  );
};
