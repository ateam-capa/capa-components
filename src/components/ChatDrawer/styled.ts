import styled, { css } from "styled-components";
import colorSet from "../../styles/colorSet";

export const DrawerHeader = styled.header`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  background-color: ${colorSet.gray000};

  .title-wrapper {
    margin-left: 30px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 600px) {
      display: block;
      margin-left: 20px;
      max-width: 176px;
    }

    .title {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
    .sub-title {
      margin-left: 8px;
      font-size: 12px;
      line-height: 20px;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      @media only screen and (max-width: 600px) {
        margin-left: 0px;
      }
    }
  }

  .extra {
    margin-left: auto;
  }
`;

export const DrawerEmpty = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 130px);
  padding: 20px;
  padding-bottom: 0px;
  img {
    width: 278px;
    margin-bottom: 40px;
  }
  .description {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    strong {
      font-weight: 500;
    }
  }
`;

export const DrawerContent = styled.section`
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;
  padding-bottom: 0px;
  height: calc(100vh - 130px);
  overflow-y: scroll;
`;

export const DrawerContentItem = styled.span.attrs(
  (props: { isSender: boolean }) => ({
    isSender: props.isSender ? true : false
  })
)`
  width: 100%;
  display: inline-flex;
  flex: 0 0 auto;

  ${props =>
    props.isSender &&
    css`
      margin-left: auto;
      flex-direction: row-reverse;
    `}

  &:not(:first-child) {
    margin-bottom: 12px;
  }

  > :nth-child(2n) {
    margin: 0px 8px;
  }

  img {
    width: 28px;
    height: 28px;
    border-radius: 4px;
  }

  .msg-content {
    width: 400px;
    padding: 12px 16px;
    background-color: ${props =>
      props.isSender ? colorSet.primary100 : colorSet.gray000};
    border-radius: 8px;
    @media only screen and (max-width: 600px) {
      width: 280px;
    }

    .msg-info {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .name {
        ${props =>
          props.isSender &&
          css`
            display: none;
          `}
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin-right: 8px;
      }
      .created {
        font-size: 12px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.4);
      }
    }

    .content {
      font-size: 14px;
      line-height: 20px;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .file-download-btn {
      background-color: ${colorSet.backgroundLight};
      .MuiButton-label {
        text-transform: none;
        justify-content: space-between;
      }
    }
  }

  .seen {
    margin-top: auto;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: ${colorSet.backgroundDark};
  }
`;

export const DrawerInput = styled.div`
  margin-top: auto;
  margin: 20px;
  background-color: ${colorSet.gray000};
  #upload-chat-file {
    display: none;
  }
  .input-adornment {
    font-size: 20px;
    padding-bottom: 10px;
    margin-top: auto;
  }
`;
