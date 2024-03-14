#  `0x04-TypeScript`

![](https://res.cloudinary.com/de4rvmslk/image/upload/w_1600/f_auto,q_auto/Javascript_vs_typescript_key_differences.png)
## AUTHOR: Ntuthuko Zimu
## TASKS

### 0. Creating an interface for a student - `task_0/js/main.ts`

### 1. Let's build a Teacher interface - `task_1/js/main.ts`

### 2. Extending the Teacher class - `task_1/js/main.ts`
Writing an interface named Directors that extends Teacher

### 3. Printing teachers - `task_1/js/main.ts`
function `printTeacher`
 * It accepts two arguments `firstName` and `lastName`
 * It returns the first letter of the firstName and the full lastName
then a interface for the function `printTeacherFunction`

### 4. Writing a class - `task_1/js/main.ts`
Class named `studentClass`:
 * The constructor accepts `firstName(string)` and `lastName(string)` arguments
 * The class has a method named `workOnHomework` that return the string `Currently working`
 * The class has a method named `displayName`. It returns the firstName of the student
 * The constructor of the class should be described through an Interface
 * The class should be described through an Interface
run the program with `npm run build`

### 5. Advanced types Part 1 - `task_2/js/main.ts`
Create the `DirectorInterface` interface with the 3 expected methods:

 * `workFromHome()` returning a string
 * `getCoffeeBreak()` returning a string
 * `workDirectorTasks()` returning a string

Create the `TeacherInterface` interface with the 3 expected methods:

 * `workFromHome()` returning a string
 * `getCoffeeBreak()` returning a string
 * `workTeacherTasks()` returning a string

Create a class `Director` that will implement DirectorInterface

 * `workFromHome` should return the string Working from home
 * `getToWork should` return the string Getting a coffee break
 * `workDirectorTasks` should return the string Getting to director tasks

Create a class `Teacher` that will implement `TeacherInterface`

 * `workFromHome` should return the string `Cannot work from home`
 * `getCoffeeBreak` should return the string `Cannot have a break`
 * `workTeacherTasks` should return the string `Getting to work`

Create a function `createEmployee` with the following requirements:

 * It can return either a `Director` or a `Teacher` instance
 * It accepts 1 arguments:
    * `salary`(either number or string)
 * if `salary` is a number and less than 500 - It should return a new     `Teacher`. Otherwise it should return a `Director`

### 6. Creating functions specific to employees - `task_2/js/main.ts`
Write a function `isDirector`:

 * it accepts `employee` as an argument
 * it will be used as a type predicate and if the employee is a director

Write a function `executeWork`:

 * it accepts `employee` as an argument
 * if the employee is a Director, it will call `workDirectorTasks`
 * if the employee is a Teacher, it will call `workTeacherTasks`

 ### 7. String literal types - `task_2/js/main.ts`
 Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only. Write a function named `teachClass`:

 * it takes `todayClass` as an argument
 * it will return the string `Teaching Math` if `todayClass` is `Math`
 * it will return the string `Teaching History` if `todayClass` is `History`

 ### 8. Ambient Namespaces - `task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts`

 ### 9. Namespace & Declaration merging - `task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts`

 ### 10. Update task_4/js/main.ts `task_4/js/main.ts`
 * create and export a constant `cpp` for Cpp Subjects
 * create and export a constant `java` for Java Subjects
 * create and export a constant `react` for React Subjects
 * create and export one Teacher object `cTeacher` with `experienceTeachingC = 10`
 * for Cpp subject, log to the console `C++`, set `cTeacher` as the teacher,call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return
 * for Java subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
 * for React subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
 
 # 11. Brand convention & Nominal typing `task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json`
 Create a directory `task_5` and copy these configuration files into the root of `task_5: package.json, tsconfig.json, webpack.config.js`

Create two interfaces `MajorCredits` and `MinorCredits` in `task_5/js/main.ts`:

  * Each interface defines a number named `credits`
  * Add a brand property to each interface in order to uniquely identify  each of them
Create two functions named `sumMajorCredits` and `sumMinorCredits` in `task_5/js/main.ts`:

  * Each function takes two arguments `subject1` and `subject2`
  * `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value
  * Each function sums the credits of the two subjects