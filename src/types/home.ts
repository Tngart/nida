import { ResponseDefault } from "./default";
import { AxiosPromise } from 'axios';


interface ContinueInfo {
  chapterId: number;
  courseId: number;
  subType: string;
  targetId: number;
  type: string;
}

interface Trainer {
  bio: string;
  career: string;
  experience: string;
  firstname: string;
  id: number;
  lastname: string;
  name: string;
  nickname: string;
  profileImageUrl: string;
  title: string;
}

interface Course {
  allAccess: boolean;
  avgRating: number;
  category: NameID;
  chapterTotal: number;
  code: string;
  continue: ContinueInfo;
  courseImageUrl: string;
  coursePrerequisite: string;
  id: number;
  inSession: boolean;
  isCertificate: boolean;
  isHighlight: boolean;
  isLocked: boolean;
  isOpenToRegister: boolean;
  isRegister: boolean;
  isWishlist: boolean;
  learningEndDate: string;
  learningStartDate: string;
  name: string;
  progress: number;
  published: boolean;
  registerEndDate: string;
  registerStartDate: string;
  reviewCount: number;
  trainer: Trainer;
}

interface NameID {
  id: number;
  name: string;
}

interface User {
  birthDate: string;
  branch: NameID;
  cardId: string;
  code: string;
  department: NameID;
  employeeCode: string;
  firstname: string;
  gender: string;
  hasBranch: boolean;
  id: number;
  isLogin: boolean;
  jobAttent: string;
  jobType: NameID;
  lastname: string;
  name: string;
  nickname: string;
  position: NameID;
  profileImageUrl: string;
  registerDate: string;
  status: string;
  tel: string;
  title: string;
  username: string;
  positions: Array<{
    id: number;
    name: string;
    total: number;
    department: NameID;
  }>;
}

interface Reply {
  id: number;
  answer: string;
  createTime: string;
  createDate: string;
  image: string;
  updateDate?: string;
  updateTime: string;
  birthDate: string;
  userReply: User;
  reply: Reply[];
  totalReply: number;
}

interface Forum {
  id: number;
  allAccess: boolean;
  canDelete: boolean;
  canEdit: boolean;
  canShare: boolean;
  comments: number;
  createBy: User;
  createDate: string;
  createTime: string;
  detail: string;
  images: string[];
  isLiked: boolean;
  likes: number;
  positions: unknown[];
  published: boolean;
  replies: Reply[];
  shareCount: number;
  title: string;
  updateDate: string;
  updateTime: string;
  views: number;
}

export interface News {
  allAccess: boolean;
  attachType: NameID;
  canShare: boolean;
  comments: number;
  description: string;
  duration: string;
  id: number;
  imageUrl: string;
  isLiked: boolean;
  likes: number;
  positions: unknown[];
  publishDate: string;
  title: string;
  topicType: NameID;
  total: number;
  updateDate: string;
  updateTime: string;
  views: number;
}

export interface HomeResponseObject {
  course: Course[];
  forum: Forum[];
  news: News[];
}

export interface FetchHomeResponse extends ResponseDefault {
  responseObject: HomeResponseObject;
}