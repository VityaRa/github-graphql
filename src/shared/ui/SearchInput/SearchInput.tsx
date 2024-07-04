import React, { useCallback } from 'react';

interface ISearchInputProps {
  value: string;
  onChange: (val: string) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ onChange , value}) => {
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);
  
  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default SearchInput;
