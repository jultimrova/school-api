import { Subject } from './Lesson';

export interface Teacher {
  id?: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  subject_taught: Subject;
  years_of_experience: number;
}
