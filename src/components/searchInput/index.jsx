import React from 'react';
import { useSearchInput } from './hooks';

const SearchInput = ({ list }) => {
  const { keyword, searchList, handleInputKeyword, convertKeyword } = useSearchInput(list);

  return (
    <section>
      <h1>
        1. 검색 INPUT에 검색어를 입력하여 검색할 때 검색 결과가 검색어에 해당하는 내용만 두껍게
        나오는 것을 만들어서 제출해주세요 (ex: b 태그)
      </h1>
      <input
        type='search'
        value={keyword}
        onChange={handleInputKeyword}
        placeholder='검색 목록 ex) "지", "지인", "지인혁"'
      />
      <ul>
        {searchList?.map((searchItem, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={convertKeyword(searchItem)}
          />
        ))}
      </ul>
    </section>
  );
};

export default SearchInput;
