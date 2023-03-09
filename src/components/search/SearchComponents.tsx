import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { PrimaryButton } from "../../pages/search/SearchPage";
import { QueryParam } from "../../api/types";

const SearchComponentStyle = styled("div")({
  textAlign: "center",
  padding: "30px 0",
  minWidth: 350,
  "& form": {
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiFormControl-root": {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 0px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;

type SearchComponentProps = {
  handleSearch: (searchString: QueryParam) => void;
  isLoading: boolean;
};

const SearchComponent = ({ handleSearch, isLoading }: SearchComponentProps) => {
  const searchUser = (event: any) => {
    event.preventDefault();

    const elements = [...event.target.elements];
    const formData = elements.reduce((acc, element) => {
      if (element.id) {
        acc[element.id] = element.value;
      }
      return acc;
    }, {});
    handleSearch(formData);
  };

  return (
    <SearchComponentStyle>
      <form onSubmit={searchUser} id="search-form">
        <StyledTextField
          id="search"
          name="form-search"
          label="Search name"
          variant="outlined"
          size="small"
          sx={{ height: 40 }}
        ></StyledTextField>
        <PrimaryButton
          name="form-search-button"
          type="submit"
          sx={{ height: 40, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          disabled={isLoading}
        >
          Search
        </PrimaryButton>
      </form>
    </SearchComponentStyle>
  );
};

export default SearchComponent;
