import React, { useState } from "react";

import Provider from "../components/Provider";
import DatePicker from "../components/DatePicker";

export default {
  title: "COMMON | DatePicker", // 스토리북에서 보여질 그룹과 경로를 명시
  component: DatePicker // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [value, setValue]: any = useState();

  return (
    <Provider>
      <div style={{ padding: 40 }}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
      </div>
    </Provider>
  );
};
