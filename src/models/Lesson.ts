export interface Lesson {
  id?: string;
  classroom_id: string;
  teacher_id: string;
  subject: Subject;
  day_of_week: WeekDay;
  time_from: string;
  time_to: string;
}

export enum Subject {
  Alchemy = 'Alchemy',
  Physiology = 'Physiology',
  Science = 'Science',
  Law = 'Law',
  Biology = 'Biology',
  Math = 'Math',
}

enum WeekDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}