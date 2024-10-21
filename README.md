# OCAT - ITSC Internship Project Summary

This project involved developing a simplified version of the **Ohio Risk Assessment System (ORAS)** used by probation officers to assess the recidivism risk of offenders. My primary focus was on building both the front-end and back-end of a web application, utilizing technologies such as **React.js**, **Node.js**, **Express**, and **PostgreSQL**. The application allowed users to create and review assessments through a user-friendly interface and featured a system for managing and displaying offender data. Below is an overview of the key elements and technologies used in this project.

---

## Technologies Used

### Version Control:
- **Git** and **GitHub**: Employed for source code management, ensuring proper versioning and collaboration.

### Front-End Framework:
- **React.js**: The primary framework for building the client-side UI, ensuring a dynamic and responsive user experience.
- **React-Bootstrap**: Used to style the application, integrating with React components to improve the look and feel.

### Back-End Framework:
- **Node.js**: Handled server-side operations, acting as the runtime environment for JavaScript on the server.
- **Express**: Web framework for handling API requests and routing between the front-end and back-end.

### Database:
- **PostgreSQL**: Database system used to store and manage all assessment data, ensuring secure and reliable storage.
- **Sequelize (ORM)**: Used to interact with the PostgreSQL database, providing an abstraction layer for CRUD operations.

### Password Encryption:
- **Bcrypt**: Implemented to securely hash and store passwords for user authentication in the database.

### Other Tools:
- **npm**: Node.js package manager used to install and manage project dependencies.
- **Webpack**: Used via Create React App for bundling and optimizing JavaScript, CSS, and other assets.

---

## Application Architecture

The application followed a **Client-Server architecture**, separating the front-end from the back-end via an API. This allowed the client to communicate with the server using **HTTP requests**, exchanging data in **JSON format**. The server, built with **Node.js** and **Express**, processed these requests, accessed the database using **Sequelize**, and returned the necessary information to the front-end.

---

## Key Features and Implementations

### 1. **User Interface for Submitting Assessments**:
- A form was developed using **React Hook Form** that allowed users to submit assessments.
- Each assessment consisted of:
  - Instrument name
  - Cat name
  - Date of birth
  - Score (automatically calculated)
  - Risk level
- Implemented form validation and proper data handling on submission.

### 2. **Assessment List with Sorting, Searching, and Filtering**:
- Implemented a feature using **React Table** to allow users to view a list of submitted assessments.
- Only assessments not marked as deleted (via soft delete) were displayed.
- Added sorting and searching functionality.

### 3. **Soft Delete Functionality for Supervisors**:
- Supervisors could log in and delete assessments.
- Implemented a **soft delete** feature using **Sequelize**, flagging assessments as deleted without removing them from the database.

### 4. **Authentication and User Roles**:
- Implemented a basic authentication system for supervisors using **Bcrypt** for password hashing.
- Ensured secure authentication with proper role-based access control.

### 5. **Audit Log**:
- Created an **audit log** feature to record when assessments were created or deleted, ensuring data integrity and tracking user actions.

---

## Project Management and Collaboration

- Managed tasks and progress using a **GitHub Project Board**.
- Utilized a branching strategy to facilitate collaboration and code reviews.
- Ensured a smooth workflow and prevented conflicts during feature integration.

---

## Challenges and Learning Outcomes

### Challenges Faced:
- Integrating **React Hook Form** with the complex structure of assessments.
- Setting up the API to handle HTTP requests efficiently.
- Ensuring seamless communication between the front-end and back-end.

### Learning Outcomes:
- Gained valuable experience in full-stack development, particularly in using **React.js**, **Node.js**, and **PostgreSQL** together.
- Improved skills with **Sequelize** and **Bcrypt** for database interaction and password encryption.
- Deepened understanding of managing **user roles** and permissions.

---

This project not only enhanced my technical skills but also deepened my understanding of building scalable, user-friendly web applications with modern JavaScript frameworks and databases.
