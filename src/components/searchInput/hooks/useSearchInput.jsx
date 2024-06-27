import { useState } from 'react';

const useSearchInput = (list) => {
  const [keyword, setKeyword] = useState('');
  const [searchList, setSearchList] = useState([]);

  const handleInputKeyword = ({ target }) => {
    const { value } = target;

    setKeyword(value);
    setSearchList(list?.filter((item) => item.includes(value) && value));
  };

  const convertKeyword = (searchItem) => {
    if (!keyword) {
      return searchItem;
    }

    const highlighted = searchItem.replace(new RegExp(`(${keyword})`, 'gi'), `<b>${keyword}</b>`);

    return { __html: highlighted };
  };

  return { keyword, searchList, handleInputKeyword, convertKeyword };
};

export default useSearchInput;
