/*
 * @Author: liujian
 * @Date: 2019-12-27 15:03:49
 * @LastEditors  : liujian
 * @Description: 记一些工具
 */

export const getCount = (count) => {
  if(count < 0) return 0
  if (count < 10000) {
    return count;
  } else if (Math.floor (count / 10000) < 10000) {
    return Math.floor (count/1000)/10 + "万";
  } else  {
    return Math.floor (count / 10000000)/ 10 + "亿";
  }
}
