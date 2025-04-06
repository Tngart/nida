import { useMemo } from 'react';
import { Control } from 'react-hook-form';
import Select from './select';
import { Position } from '@/types/account';

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
    []
  );

  return <Select control={control} name={name} options={options} />;
}
