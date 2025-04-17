export interface FaqListPayload {
  filter?: any;
  offset: number;
  limit: number;
  index: boolean;
}

export interface FaqCluster {
  count?: number;
  id: number;
  title: string;
}

export interface FaqListResponse {
  clusters: FaqCluster[];
  total: number;
}

export interface FaqDataListPayload {
  offset: number;
  limit: number;
  keyword?: string;
}

export interface Question {
  answer: string;
  cluster: FaqCluster;
  createDate: string;
  createTime: string;
  dateCreated: string;
  id: number;
  isWishList: boolean;
  tags: string[];
  title: string;
  updateDate: string;
  updateTime: string;
  userReply: string;
  views: number;
}

export interface FaqDataListResponse {
  questions: Question[];
  total: number;
}
