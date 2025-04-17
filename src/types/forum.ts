export interface ForumLisPayload {
  keyword?: string;
  offset?: number;
  max: number;
}

export interface User {
  name: string;
  profileImageUrl: string;
}

export interface Forum {
  allAccess: boolean;
  canDelete: boolean;
  canEdit: boolean;
  canShare: boolean;
  comments: number;
  createBy: User;
  createDate: string;
  createTime: string;
  detail: string;
  id: number;
  iamges: any[];
  isLike: boolean;
  likes: number;
  positions: any[];
  published: boolean;
  shareCount: number;
  title: string;
  updateDate: string;
  updateTime: string;
  views: number;
}

export interface ForumListResponse {
  forums: Forum[];
  total: number;
}
