/*
 * @brief 判断字符串所占的字节数
 * */
export const GetCharLength = str => {
  let iLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127) iLength += 2;
    else iLength += 1;
  }
  return iLength;
};

/*
 * @brief 若字符串长度超过要求，截掉多余部分
 * */
export const CutStr = (str = '', len = 0) => {
  let curStr = '';
  for (let i = 0; i < str.length; i++) {
    curStr += str.charAt(i);
    if (len && GetCharLength(curStr) >= len) return curStr;
  }
  return str;
};

/*
 * @brief 两数组相等
 * */
export const isArrayEqu = (arr1, arr2) => {
  return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())
}