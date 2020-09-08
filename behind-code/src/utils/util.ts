/*
 * @Author: your name
 * @Date: 2020-09-03 14:27:27
 * @LastEditTime: 2020-09-06 15:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\28使用express改良爬虫\src\utils\util.ts
 */
import express, { Request } from 'express';

interface Result<T> {
  success: boolean;
  errMsg?: string;
  data: T;
}

export const getResponseData = <T>(data: T, errMsg?: string): Result<T> => {
  if (errMsg) {
    return {
      success: false,
      errMsg,
      data,
    };
  }
  return {
    success: true,
    data,
  };
};

export interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

export enum Methods {
  get = 'get',
  post = 'post',
}
