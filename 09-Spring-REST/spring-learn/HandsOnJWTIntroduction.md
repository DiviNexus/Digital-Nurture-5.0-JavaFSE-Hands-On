# Spring REST using Spring Boot 3
## Hands-on: Introduction to JWT Authentication

## Objective

Understand the first step of JWT (JSON Web Token) based authentication in a Spring Boot application.

This hands-on introduces the authentication flow where a client sends its credentials to an authentication service, which validates the user and returns a JWT token. This token is then used to access protected REST APIs without sending the username and password repeatedly.

---

## What is JWT?

JWT (JSON Web Token) is a secure, compact, and self-contained token used for authentication and authorization between a client and a server.

Instead of sending the username and password with every request, the client sends the JWT token received after successful authentication.

---

## Authentication Flow

```text
Client
   │
   │ Username + Password
   ▼
Authentication Service
   │
   │ Validate Credentials
   ▼
Generate JWT Token
   │
   ▼
Client Receives Token
   │
   │ Sends JWT in future requests
   ▼
Protected REST APIs
```

---

## Sample Request

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

### Explanation

- `-u user:pwd` sends the username and password using HTTP Basic Authentication.
- `/authenticate` is the authentication endpoint.
- If the credentials are valid, the server generates and returns a JWT token.

---

## Sample Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

## Major Steps in JWT Authentication

### 1. Create Authentication Controller

- Create an endpoint `/authenticate`.
- Accept user credentials.
- Process the authentication request.

### 2. Read Authorization Header

- Read the `Authorization` header from the incoming request.
- Decode the Base64 encoded username and password.
- Validate the user credentials.

### 3. Generate JWT Token

- If authentication succeeds, generate a JWT.
- Return the token to the client.
- The client will use this token for all future API requests.

---

## Advantages of JWT

- Stateless authentication
- No need to send credentials repeatedly
- Improved security
- Compact and lightweight
- Widely used in RESTful web services
- Easy integration with Spring Security

---

## Key Concepts Learned

- JSON Web Token (JWT)
- Authentication
- Authorization
- HTTP Basic Authentication
- Authorization Header
- Token Generation
- Secure REST APIs
- Spring Security (Introduction)

---

## Conclusion

This hands-on provides the conceptual understanding of JWT-based authentication in Spring Boot. The actual implementation of the authentication controller, security configuration, JWT generation, and validation will be covered in the subsequent hands-on exercises.