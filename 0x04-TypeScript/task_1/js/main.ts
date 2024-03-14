// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow adding any additional attribute
  }
  
  // Create a class for Teacher
  class DirectorImpl implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    numberOfReports: number;
    [key: string]: any;
  
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number, additionalAttributes: Record<string, any> = {}) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.location = location;
      this.numberOfReports = numberOfReports;
      Object.assign(this, additionalAttributes); // Add additional attributes
    }
  }
  
  //Defining a function for printTeacher

  export function printTeacher(firstName : string, lastName : string){
    return `${firstName[0]}, ${lastName}}`;
  }
  interface printTeacherFunction {
    firstName : string;
    lastName : string;
  }