export interface CommentData {
  id: number;
  answer: string;
  image: string;
  createDate: string;
  createTime: string;
  updateDate: string;
  updateTime: string;
  allAccess: boolean;
  totalReply: number;
  reply: CommentData[];
  userReply: UserReply;
  positions: UserPosition[];
}

export interface UserReply {
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  name: string;
  nickname: string;
  username: string;
  gender: string;
  tel: string;
  status: string;
  birthDate: string;
  registerDate: string;
  cardId: string;
  employeeCode: string;
  code: string;
  jobAttent: string;
  isLogin: boolean;
  hasBranch: boolean;
  profileImageUrl: string;
  department: {
    id: number;
    name: string;
  };
  branch: {
    id: number;
    name: string;
  };
  jobType: {
    id: number;
    name: string;
  };
  position: {
    id: number;
    name: string;
  };
  positions: UserPosition[];
}

export interface UserPosition {
  id: number;
  name: string;
  total: number;
  department: {
    id: number;
    name: string;
  };
}
