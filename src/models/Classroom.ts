export interface Classroom {
  id?: string;
  capacity: Capacity;
  classroom_name: string;
}

enum Capacity {
  Ten = 10,
  Twenty = 20,
  Thirty = 30,
  Forty = 40,
  Fifty = 50,
}