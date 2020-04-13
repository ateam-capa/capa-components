import { isString } from "util";

/**
 * className에 빈 값이 있으면 undefined가 아닌 empty string으로 반환해주는 function
 * @param {string} value
 * @return {string}
 */
export function clearClassName(value?: string) {
  if (isString(value)) return value;
  return "";
}

/**
 * 브라우저가 IE 인지 체크하기 위한 function
 * @return {boolean}
 */
export function isIE() {
  const agent = navigator.userAgent.toLowerCase();
  const appName = navigator.appName;
  if (
    (appName === "Netscape" && agent.indexOf("trident") !== -1) ||
    agent.indexOf("msie") !== -1
  ) {
    return true;
  } else {
    return false;
  }
}
