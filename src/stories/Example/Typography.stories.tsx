import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/Example/Typography";

export default {
  title: "Example|Typography", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Typography, // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const dummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const variants = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
  ];

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Typography
      </Typography>

      {variants.map((variant, index) => (
        <div key={index}>
          <Typography
            variant="body1"
            style={{ marginBottom: "8px", color: "#fff" }}
          >
            {variant} Typography
          </Typography>
          <Typography variant={variant as any} style={{ marginBottom: "12px" }}>
            {dummyText}
          </Typography>
        </div>
      ))}
    </section>
  );
};
