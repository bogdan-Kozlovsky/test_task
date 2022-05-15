const maximumStringLength = 25;
const minimumStringLength = 0;
export const fixLengthText = (text: string) => text && (text)?.length >= maximumStringLength ? `${text.substr(minimumStringLength, maximumStringLength)}...` : text