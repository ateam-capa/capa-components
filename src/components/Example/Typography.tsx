import React from "react";
import MaterialTypography from "@material-ui/core/Typography";

import { ITypographyProps } from "./TypographyType";
import { clearClassName } from "../../utils/checker";

import "./Typography.scss";

/**
 * Typography Component 입니다.
 *
 * 기본 클래스로 `cr-typography`을 가지고 있습니다.
 */
export const Typography = (props: ITypographyProps) => {
  const m_maxWidth = () => {
    const isInit = props.display !== "block" || !props.maxWidth;
    if (isInit) return "none";
    return props.maxWidth;
  };

  const className = `
    cr-typography
    ${props.fontUnit}
    ${clearClassName(props.className)}
  `;

  const style = {
    textAlign: props.align,
    color: props.color,
    display: props.display,
    maxWidth: m_maxWidth(),
    ...props.style
  };

  const m_props: any = {
    style: style,
    className: className,
    gutterBottom: props.gutterBottom,
    variant: props.variant
  };

  return <MaterialTypography {...m_props}>{props.children}</MaterialTypography>;
};

Typography.defaultProps = {
  align: "inherit",
  color: "inherit",
  display: "block",
  fontUnit: "px"
} as ITypographyProps;

export default Typography;
