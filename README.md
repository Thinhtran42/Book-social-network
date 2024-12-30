# Book Social Network

## Introduction
The **Book Social Network** project is an application that allows users to manage their books, interact with others' books, and share reading experiences. The application is built with a Java backend and an Angular frontend. Docker is used for easy deployment and management of the development environment.

## Features
- **Login and Registration**: Utilizes JWT for user authentication.
- **Email Verification**: Sends a verification email to activate user accounts.
- **Book Management**:
  - Add, remove, and edit your own books.
  - View books from other users.
  - Borrow books from other users.
  - Return books and track borrowing/return status.
- **Feedback**: Users can provide feedback on books after borrowing and returning them.

## Technologies Used
- **Backend**: Java (Spring Boot)
- **Frontend**: Angular
- **Database**: PostgreSQL
- **Containerization**: Docker

## Installation Guide

### Requirements
- Java 21+
- Node.js 18+
- Docker

### Setting Up the Backend
1. Clone the repository:
   ```bash
   git clone [REPOSITORY_URL]
   cd book-network
   ```
2. Install dependencies:
   ```bash
   ./mvnw install
   ```
3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Setting Up the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd book-network-ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   ng serve
   ```

### Setting Up with Docker
1. Build and run the containers:
   ```bash
   cd book-network
   docker-compose up --build
   ```

## Usage
1. **Register an Account**: Go to the registration page and fill in the required information. Check your email to verify your account.
2. **Login**: Use your registered information to log into the system.
3. **Manage Books**: Add new books, modify or delete your books.
4. **Borrow and Return Books**: Search for books from other users to borrow and track the borrowing/return status.
5. **Feedback**: Provide feedback on books you have borrowed.

## Contributing
We welcome contributions! If you would like to contribute to the project, please create a pull request or open an issue to discuss new features.

## Contact
If you have any questions, please reach out via:
- Email: vanxuatx@gmail.com

