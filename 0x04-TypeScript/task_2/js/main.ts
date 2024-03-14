// Define the Teacher interface
export interface ITeacher 
{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;

}

  // Define the Directors interface extending the Teacher interface
export interface IDirector
{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
  
// Create a class for Teacher
export class Director implements IDirector
{
    workFromHome(): string
    {
        return "Working from home";   
    }
    getCoffeeBreak(): string
    {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string 
    {
        return "Getting to director tasks";
    }
}

export class Teacher implements ITeacher
{
   
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

export function createEmployee(salary: number)
{
    if (salary < 500 && typeof salary === 'number')
    {
        return Teacher;
    }
    else
    {
        return Director;
    }
}