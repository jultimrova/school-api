# school-api

## DB structure visualization

***

* Conceptual database model

![](sql/images/conceptual_model.jpg)

* Logical database model

![](sql/images/logical_model.jpg)

* Physical database model

![](sql/images/physical_model.jpg)

* Future database model

![](sql/images/future_model.jpg)

***

## DB content examples

* Teachers

![](sql/images/teachers_content.png)

* Lessons

![](sql/images/lesson_content.png)

* Classrooms

![](sql/images/classroom_content.png)

* getTargetMathTeachers(get all math teachers who have more than 10 years of experience and teach in the classroom
  number 100 every Thursday between 8:30 and 14:30.)

![](sql/images/get_target_math_teachers.png)

* getTeachers(get all female teachers with experience more then 15 years)

![](sql/images/get_all_teachers.png)

***
You should clone this repository and run command *npm install* to download dependencies

Then run *npm run dev* to start our server. When you see in the console the server is running on the **** port. Open
your browser on localhost(****).

***

## TEACHER operations about teacher

***POST / teachers*** Create teacher

***GET / teachers?gender=F&yearsOfExperience=15limit=5*** Read all teachers

***GET / teachers / {id}?yearsOfExperience=20*** get teacher with id=?

***GET / teachers / mathTeachers?subjectTaught=Math&yearsOfExperience=5&dayOfWeek=Monday&timeFrom=12:00:00&timeTo=13:00:
00&classroomName=105&limit=20*** get all math teachers who have more than 10 years of experience and teach in the
classroom with number 100 every Thursday between 8:30 and 14:30.

***PUT / teachers / {id}*** update teacher with id=?

***DELETE / teachers / {id}*** delete teacher with id=?



