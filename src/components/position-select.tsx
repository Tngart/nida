/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { Control } from 'react-hook-form';

import { Position } from '@/types/account';

import Select from './select';

export default function PositionSelect({
  control,
  name,
  positions,
}: {
  control: Control<any>;
  name: string;
  positions: Position[];
}) {
  const options = useMemo(
    () =>
      positions.map(({ id, name }) => ({
        id: id.toString(),
        label: name,
      })),
    [positions]
  );

  return <Select control={control} name={name} options={options} />;
}
