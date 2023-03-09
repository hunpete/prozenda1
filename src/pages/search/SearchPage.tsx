import React, { useState } from "react";
import { styled } from "@mui/system";
import ListComponent from "../../components/list/ListComponent";
import SearchComponent from "../../components/search/SearchComponents";
import TitleComponent from "../../components/title/TitleComponent";
import { swapiService } from "../../api/services/swapiService";
import { Button, CircularProgress, Typography } from "@mui/material";
import { People, QueryParam } from "../../api/types";

const SearchPageStyle = styled("div")({
  textAlign: "center",
});

export const PrimaryButton = styled(Button)`
  background-color: #871719;
  color: white;
`;

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<null | string>(null);

  const [peopleData, setPeopleData] = useState<People[]>([]);
  const [count, setCount] = useState<number | null>(null);

  const handleSearch = (queryParams: QueryParam): void => {
    setIsLoading(true);
    swapiService.getPeopleData(queryParams).then((response) => {
      const { results, next, count } = response.data;
      setPeopleData(results);
      setNextPage(next);
      setIsLoading(false);
      setCount(count);
    });
  };

  const getNextPage = (): void => {
    setIsLoading(true);
    swapiService.getNextPage(nextPage!).then((response) => {
      const { results, count } = response.data;
      setPeopleData([...peopleData, ...results]);
      setIsLoading(false);
      setCount(count);
    });
  };

  return (
    <SearchPageStyle>
      <TitleComponent />
      <SearchComponent handleSearch={handleSearch} isLoading={isLoading} />
      {isLoading && <CircularProgress />}
      {peopleData.length ? (
        <>
          <Typography variant="body2">
            Showing {peopleData.length} results of {count}
          </Typography>
          <ListComponent peopleData={peopleData} />
        </>
      ) : null}

      {nextPage ? (
        <>
          <PrimaryButton onClick={getNextPage} disabled={isLoading}>
            Load More
            {isLoading ? <CircularProgress size={10} /> : null}
          </PrimaryButton>
        </>
      ) : null}
    </SearchPageStyle>
  );
};

export default SearchPage;
