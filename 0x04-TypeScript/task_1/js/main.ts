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
  class TeacherImpl implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalAttributes: Record<string, any> = {}) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.location = location;
      Object.assign(this, additionalAttributes); // Add additional attributes
    }
  }
  