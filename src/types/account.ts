// position API
export enum PositionCodeEnum {
  GENERAL = 'General',
  REGISTER_STUDENT = 'RegisterStudent',
  ADDITIONAL_STUDENT = 'AdditionalStudent',
}

export interface Position {
  code: PositionCodeEnum;
  enabled: boolean;
  id: number;
  name: string;
  requireCode: boolean;
}

export interface PositionResponseObject {
  positions: Position[];
}

// register API
export interface RegisterPayload {
  title: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  tel: string;
  position: string;
  userCode: any;
}
