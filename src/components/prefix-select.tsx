import { useMemo } from 'react';
import { Control } from 'react-hook-form';
import Select from './select';

export const prefixs = ['นาย', 'นาง', 'นางสาว', 'อื่นๆ'] as const;

export default function PrefixSelect({ control, name }: { control: Control<any>; name: string }) {
  const options = useMemo(
    () =>
      prefixs.map((id) => ({
        id,
        label: id,
      })),
    []
  );

  return <Select control={control} name={name} options={options} />;
}
