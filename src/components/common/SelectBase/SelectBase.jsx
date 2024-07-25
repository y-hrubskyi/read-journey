import Select from 'react-select';

import { selectStyles } from './SelectBase.styled';

export const SelectBase = ({ name, defaultValue, options, onChange }) => {
  return (
    <Select
      name={name}
      styles={selectStyles}
      options={options}
      defaultValue={defaultValue}
      onChange={selected => onChange(selected?.value || '')}
    />
  );
};
