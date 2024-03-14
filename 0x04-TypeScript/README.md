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