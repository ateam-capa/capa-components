import { useMediaQuery } from "@material-ui/core";
import { Breakpoint } from "./theme";

/**
 * set media query in css
 * @param {Breakpoint} breakpoint
 * @param {any} changeStyle
 * @return {string} breakpoint 적용된 mediaQuery 스타일
 */
export const setCSS = (breakpoint: Breakpoint, changeStyle: any) => {
  // maxWidth 이하에서 적용할 style
  return `
    @media only screen and (max-width: ${breakpoint}) {
      ${changeStyle}
    }
  `;
};

/**
 * 현재 화면이 breakpoint 이하 인지 확인하기 위한 function
 * @param {Breakpoint} breakpoint
 * @return {boolean}
 */
export function Match(breakpoint: Breakpoint) {
  return useMediaQuery(`(max-width: ${breakpoint} )`);
}
