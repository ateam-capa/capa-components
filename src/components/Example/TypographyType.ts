import { BrandColor } from "../../utils/theme";
import { TBaseComponent } from "../../utils/types";

export interface ITypographyProps extends TBaseComponent {
  /** The content of the component */
  children: React.ReactNode;
  /** true 인 경우 margin bottom */
  gutterBottom?: boolean;
  /** Applies the theme typography styles */
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption";
  /** Set the text-align on the component */
  align?: "inherit" | "left" | "center" | "right";
  /** The color of the component */
  color?: string;
  /** Controls the display type */
  display?: "initial" | "block" | "inline";
  /** Set the maxWidth of the component */
  maxWidth?: number;
  /** Set the fontUnit of the component */
  fontUnit?: "px" | "em";
}
