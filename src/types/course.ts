export interface CourseData {
  allAccess: boolean;
  avgRating: number;
  category: Category;
  chapterTotal: number;
  code: string;
  continue: ContinueProgress;
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

export interface Category {
  id: number;
  name: string;
}

export interface ContinueProgress {
  chapterId: number;
  courseId: number;
  subType: string;
  targetId: number;
  type: string;
}

export interface Trainer {
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

export interface CourseListPayload {
  keyword?: string;
  offset: number;
  max: number;
  categoryIds?: string;
  ratings?: number;
  trainerIds?: number;
  orderBy: string;
  orderType: string;
}

export interface CourseObjectResponse {
  courses: CourseData[];
  total: number;
}

export interface CourseCategoryResponse {
  categories: Category[];
  total: number;
}
