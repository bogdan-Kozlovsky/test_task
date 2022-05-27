const MAX_TEXT_LENGTH = 32;
const MIN_TEXT_LENGTH = 0;

export const fixLengthText = (text: string) => {
  if (text && text?.length >= MAX_TEXT_LENGTH) {
    return `${text.substr(MIN_TEXT_LENGTH, MAX_TEXT_LENGTH)}...`;
  }
  return text;
};
