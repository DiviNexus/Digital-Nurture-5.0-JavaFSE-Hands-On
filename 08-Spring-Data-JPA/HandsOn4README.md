# Hands-on 4: Difference Between JPA, Hibernate, and Spring Data JPA

## Objective

Understand the relationship and differences between **JPA**, **Hibernate**, and **Spring Data JPA**, and learn how Spring Data JPA reduces boilerplate code compared to Hibernate.

---

# What is JPA?

**JPA (Java Persistence API)** is a Java specification that defines a standard way to map Java objects to relational databases.

- It is **not a framework**.
- It is **not an implementation**.
- It only defines rules and annotations for object-relational mapping (ORM).

Common JPA annotations:

- `@Entity`
- `@Table`
- `@Id`
- `@Column`

Think of JPA as a **rulebook** that explains how persistence should work.

---

# What is Hibernate?

Hibernate is an **ORM (Object Relational Mapping) framework** that implements the JPA specification.

It performs tasks such as:

- Mapping Java objects to database tables
- Generating SQL queries
- Managing sessions
- Managing transactions
- Performing CRUD operations

Without Hibernate, developers would have to write SQL manually for every database operation.

---

# What is Spring Data JPA?

Spring Data JPA is a Spring framework that sits on top of JPA implementations like Hibernate.

It reduces boilerplate code by providing ready-made repository interfaces.

Instead of writing SQL or Hibernate session management code, developers simply extend:

```java
JpaRepository<Entity, PrimaryKeyType>
```

Spring Data JPA automatically provides methods like:

- `save()`
- `findAll()`
- `findById()`
- `delete()`

It also manages transactions using the `@Transactional` annotation.

---

# Relationship Between Them

```
Application
        │
        ▼
Spring Data JPA
        │
        ▼
Hibernate
        │
        ▼
JPA Specification
        │
        ▼
MySQL Database
```

- **JPA** defines the rules.
- **Hibernate** implements those rules.
- **Spring Data JPA** simplifies working with Hibernate.

---

# Hibernate vs Spring Data JPA

## Hibernate

Developers manually manage:

- Session creation
- Transactions
- Exception handling
- Session closing

Example:

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();
session.close();
```

---

## Spring Data JPA

Developers simply use:

```java
employeeRepository.save(employee);
```

Spring automatically handles:

- Sessions
- Transactions
- SQL generation
- CRUD operations

This results in cleaner, more maintainable code.

---

# Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Framework |
| Implementation | ❌ No | ✅ Yes | ❌ Uses Hibernate |
| Defines ORM Rules | ✅ Yes | ✅ Yes | Uses JPA |
| Generates SQL | ❌ No | ✅ Yes | Via Hibernate |
| Boilerplate Code | N/A | More | Very Less |
| Transaction Management | ❌ No | Manual | Automatic |
| CRUD Operations | ❌ No | Manual | Built-in (`JpaRepository`) |
| Ease of Development | Medium | Easy | Very Easy |

---

# Key Takeaways

- JPA is only a specification.
- Hibernate is one of the most popular implementations of JPA.
- Spring Data JPA is built on top of Hibernate and significantly reduces boilerplate code.
- Spring Data JPA automatically provides CRUD methods and transaction management, making application development faster and cleaner.

---

# Conclusion

JPA defines *what* should be done, Hibernate defines *how* it is done, and Spring Data JPA makes using Hibernate much simpler by providing repository interfaces and automatic transaction management.

This abstraction allows developers to focus on business logic instead of writing repetitive database code.