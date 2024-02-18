# Software Technologies 2023-2024

## Team: softeng23-49

| ID        | Last Name        | First Name      |
|-----------|------------------|-----------------|
| 03120034  | ΜΑΡΝΤΙΡΟΣΙΑΝ   | ΦΙΛΙΠΠΟΣ       |
| 03120166  | ΑΝΑΓΝΟΥ          | ΛΕΩΝΙΔΑΣ ΦΙΛΙΠΠΟΣ |
| 03120844  | ΛΑΣΔΑΣ          | ΧΡΗΣΤΟΣ         |
| 03120176  | ΚΟΝΤΟΣ          | ΓΕΩΡΓΙΟΣ         |


## Use Cases
1. **Use Case 1:**
   - Allows users to navigate and view lists of movies, actors, and directors within the application.

2. **Use Case 2:**
   - Enables users to perform targeted searches for movies, actors, or directors based on specific criteria like title, genre, or rating.

### Implementation
- **BACKEND:** Node.js  
- **DATABASE:** TMDb API (No Database)  
- **REST API:** ExpressJS  
- **API DOC:** OpenAPI 3.0.0, Postman  
- **CLI:** Javascript  
- **FRONTEND:** React.js, Next.js, Redux  
  React.js with Next.js for server-side rendering. Redux for state management.

### Testing
- **API Testing:** Postman  
- **CLI Functional Testing:** Python


### Development Environment Setup
1. Navigate to the folder you want to clone the Source Code into.
2. Run `git clone https://github.com/ntua-el20166/softeng-2023.git`
3. a) Download nodejs from this website: https://nodejs.org/en/download

   b) Download Python from this website: https://www.python.org/downloads/
4. Run `cd softeng-2023`
5. Run `npm install` (in order to install necessary packages)
6. Run `npm install next react react-dom` (in order to install Next.js)
7. Run `cd frontend` and then `npm install` (in order to install frontend specific packages)
8. Run `cd ..` and then `npm link` (with admin privileges)
9. Run `npm run start` (in order to start the application)
10. Navigate to http://localhost:3000/
11. You can now browse our application :)

This is how it should look like:
![image](https://github.com/ntua-el20166/softeng-2023/assets/147999065/4f70d1a4-d2f7-4658-bdfb-36e4416e54bf)
