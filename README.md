OCAT - ITSC Internship Project Summary
This project involved developing a simplified version of the ORAS (Ohio Risk Assessment System) used by probation officers to assess the recidivism risk of offenders. My primary focus was on building both the front-end and back-end of a web application, utilizing technologies such as React.js, Node.js, Express, and PostgreSQL. The application allowed users to create and review assessments through a user-friendly interface and featured a system for managing and displaying offender data. Below is an overview of the key elements and technologies used in this project.

Technologies Used
Version Control:

Git and GitHub were employed for source code management, ensuring proper versioning and collaboration.
Front-End Framework:

React.js: The primary framework for building the client-side UI, ensuring a dynamic and responsive user experience.
React-Bootstrap: Used to style the application, integrating with React components to improve the look and feel.
Back-End Framework:

Node.js: Handled the server-side operations, acting as the runtime environment for JavaScript on the server.
Express: The web framework for handling API requests and routing between the front-end and back-end.
Database:

PostgreSQL: The database system used to store and manage all assessment data, ensuring secure and reliable storage of user inputs.
Sequelize (ORM): Used to interact with the PostgreSQL database, providing an abstraction layer for CRUD operations.
Password Encryption:

Bcrypt: Implemented to securely hash and store passwords for user authentication in the database.
Other Tools:

npm: Node.js package manager used to install and manage project dependencies.
Webpack: Used via Create React App for bundling and optimizing JavaScript, CSS, and other assets.
Application Architecture
The application followed a Client-Server architecture, separating the front-end from the back-end via an API. This allowed the client to communicate with the server using HTTP requests, exchanging data in JSON format. The server, built with Node.js and Express, processed these requests, accessed the database using Sequelize, and returned the necessary information to the front-end.

Key Features and Implementations
User Interface for Submitting Assessments:

I developed a form using React Hook Form that allowed users to submit assessments. Each assessment consisted of an instrument name, cat name, date of birth, score (automatically calculated), and risk level. I ensured that the form validation was in place, and proper data handling was implemented on submission.
Assessment List with Sorting, Searching, and Filtering:

I implemented a feature that allowed users to view a list of all submitted assessments. I utilized React Table to make the list sortable and searchable. Only assessments that were not marked as deleted (via soft delete) were displayed.
Soft Delete Functionality for Supervisors:

Supervisors could log into the system (using Bcrypt for password hashing) and delete assessment submissions. I implemented a soft delete feature using Sequelize, which flagged assessments as deleted without actually removing them from the database. This way, they were excluded from the front-end view but could still be audited or recovered.
Authentication and User Roles:

I implemented a basic authentication system for supervisors. The supervisors' passwords were hashed using Bcrypt, and I ensured secure authentication with proper role-based access control.
Audit Log:

I created an audit log feature that recorded when each assessment was created or deleted. This was crucial for maintaining data integrity and tracking user actions within the system.
Project Management and Collaboration
Throughout the project, I made use of a GitHub Project Board to manage tasks and track progress. Issues related to specific features such as assessment creation, list viewing, and supervisor functionality were added to the board. The code was developed using a branching strategy to facilitate collaboration and code reviews. This ensured a smooth workflow and prevented conflicts when integrating features.

Challenges and Learning Outcomes
During this project, I faced several challenges, including integrating React Hook Form with the complex structure of assessments, setting up the API to handle HTTP requests efficiently, and ensuring seamless communication between the front-end and back-end. By overcoming these, I gained valuable experience in full-stack development, particularly in using React.js, Node.js, and PostgreSQL together.

Additionally, I improved my ability to work with Sequelize, learned about best practices in password encryption with Bcrypt, and enhanced my understanding of managing user roles and permissions.

This project not only improved my technical skills but also deepened my understanding of building scalable, user-friendly web applications with modern JavaScript frameworks and databases.
