export interface Lesson {
    id?: string;
    classroom_id: string;
    teacher_id: string;
    subject: Subject;
    day_of_week: string;
    time_from: string;
}

enum Subject {
    Alchemy = 'Alchemy',
    Physiology = 'Physiology',
    Science = 'Science',
    Speech = 'Speech',
    Strategy = 'Strategy',
    Tactics = 'Tactics ',
    Law = 'Law ',
    Biology = 'Biology',
    Math = 'Math',
    Physics = 'Physics'
}