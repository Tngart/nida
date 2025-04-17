/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { Control } from 'react-hook-form';

import Select from './select';

export const prefixes = ['นาย', 'นาง', 'นางสาว', 'อื่นๆ'] as const;

export default function PrefixSelect({ control, name }: { control: Control<any>; name: string }) {
  const options = useMemo(
    () =>
      prefixes.map((id) => ({
        id,
        label: id,
      })),
    []
  );

  return <Select control={control} name={name} options={options} />;
}
