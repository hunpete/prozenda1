import http from "../http";
import { PeopleResponse, QueryParam } from "../types";

const getPeopleData = (queryParam: QueryParam) => {
  return http.get<PeopleResponse>("people/", {
    params: { ...queryParam },
  });
};

const getNextPage = (url: string) => {
  return http.get<PeopleResponse>(url);
};

export const swapiService = {
  getPeopleData,
  getNextPage,
};
