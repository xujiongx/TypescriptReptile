/*
 * @Author: your name
 * @Date: 2020-09-06 16:05:03
 * @LastEditTime: 2020-09-06 16:08:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \30使用装饰器express改良\responseResult,d.ts
 */
declare namespace responseResult {
  interface ImageItem {
    imgSrc: string;
    imgInfo: string;
  }
  interface Tdata {
    [key: string]: ImageItem[];
  }
  export type isLogin = boolean;
  export type login = boolean;
  export type logout = boolean;

  export type getData = boolean;
  export type showData = boolean | Tdata;
}
