import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const myRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (myRef.current) onSearch(myRef.current.value);
      }}
    >
      <InputGroup borderRadius="100px">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          ref={myRef}
          type="text"
          variant="filled"
          placeholder="Search Games"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
