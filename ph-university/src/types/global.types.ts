import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TErrorProps = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TErrorProps;
  meta?: TMeta;
  sucess: boolean;
  message: string;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
