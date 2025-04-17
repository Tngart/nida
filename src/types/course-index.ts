/* eslint-disable @typescript-eslint/no-explicit-any */
interface FileItem {
  bookmarks: any[];
  currentPage: number;
  currentTime: number;
  duration: string;
  filename: string;
  id: number;
  isRestart: boolean;
  maxTime: number;
  orientation: string;
  totalPages: number;
  totalTime: number;
  type: string;
  type_id: number;
}

interface Material {
  code: string;
  files: FileItem[];
  id: number;
  isLocked: boolean;
  isSuccess: boolean;
  name: string;
  no: number;
  published: boolean;
  type: string;
}

interface ChapterInfo {
  code: string;
  id: number;
  name: string;
  no: number;
  studyOrder: boolean;
  time: number;
}

export interface Chapter {
  chapter: ChapterInfo;
  materialTotal: number;
  materials: Material[];
  postQuizTotal: number;
  postQuizs: any[];
  preQuizTotal: number;
  preQuizs: any[];
}

export interface FileResource {
  id: number;
  nameFile: string;
  pathFile: string;
  shareToChat: boolean;
  shareToEmail: boolean;
  size: string;
  title: string;
  type: {
    extension: string;
    id: number;
    name: string;
  };
}

export interface CourseIndexObjectResponse {
  chapters: Chapter[];
  files: FileResource[];
  total: number;
}
