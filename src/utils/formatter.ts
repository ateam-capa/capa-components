/**
 * px을 em 값으로 계산해주는 function
 * @param {number} px
 * @return {number} px / 16
 */
export const pxToEm = (px: number) => {
  if (isNaN(px)) {
    return px / 16;
  }
  return console.error("this type is not number");
};

/**
 * maxLength를 초과하는 부분은 ...으로 잘라서 반환하는 함수
 * @param {number} maxLength
 * @param {string} text
 * @return {string}
 */
export const overTextEllipsis = (maxLength: number, text: string) => {
  if (text.length > maxLength) {
    const cutText = text.slice(0, maxLength);
    return `${cutText}...`;
  }
  return text;
};
