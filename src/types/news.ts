import { CommentData } from './comment';
import { ResponseDefault } from './default';

export interface NewsData {
  allAccess: boolean;
  attachType: AttachType;
  canShare: boolean;
  comments: number;
  description: string;
  duration: string;
  id: number;
  imageUrl: string;
  isLiked: boolean;
  likes: number;
  positions: string[];
  publishDate: string;
  title: string;
  topicType: TopicType;
  total: number;
  updateDate: string;
  updateTime: string;
  views: number;
}
export interface NewsListResponse {
  news: NewsData[];
  total: number;
}
export interface NewsDetailResponse {
  news: NewsData;
  comments: CommentData[];
  total: number;
}

export interface AttachType {
  id: number;
  name: string;
}

export interface TopicType {
  id: number;
  name: string;
}

export interface NewsFile {
  id: number;
  type: string;
  fileSize: number;
  isThumbnail: boolean;
  originalFileName: string;
  url: string;
  orientation: string;
  soundUrl: string;
}

export interface NewsListPayload {
  keyword?: string;
  offset: number;
  max: number;
}

export interface NewsDetailPayload {
  offset: number;
  max: number;
}

export interface NewsDetailResponseObject extends ResponseDefault {
  responseObject: NewsDetailResponse;
}
export interface NewsListResponseObject extends ResponseDefault {
  responseObject: NewsListResponse;
}
