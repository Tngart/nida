import { ResponseDefault } from './default';

export interface NewsResponseObject extends ResponseDefault {
  responseObject: NewsResponse;
}

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

export interface AttachType {
  id: number;
  name: string;
}

export interface TopicType {
  id: number;
  name: string;
}

export interface NewsResponse {
  news: NewsData[];
  total: number;
}

export interface NewsPayload {
  keyword?: string;
  offset: number;
  max: number;
}
