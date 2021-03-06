export interface LessonComponentProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
 };
 
 export interface VideoComponentProps {
    lessonSlug: string;
 };