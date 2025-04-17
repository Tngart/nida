import { fetchPositions } from '@/service/account';

import RegisterForm from './register-form';

export default async function RegisterPage() {
  const positionResponse = await fetchPositions();

  return (
    <div>
      <RegisterForm positionList={positionResponse.positions} />
    </div>
  );
}
