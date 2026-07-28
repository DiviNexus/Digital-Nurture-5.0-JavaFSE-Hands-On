import "./App.css";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  const books = [
    { id: 101, bname: "Master React", price: 670 },
    { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 103, bname: "Mongo Essentials", price: 450 }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Basics",
      author: "John"
    },
    {
      id: 2,
      title: "Understanding JSX",
      author: "David"
    },
    {
      id: 3,
      title: "Hooks in React",
      author: "Smith"
    }
  ];

  const courses = [
    {
      id: 1,
      cname: "React",
      duration: "2 Months"
    },
    {
      id: 2,
      cname: "Angular",
      duration: "3 Months"
    },
    {
      id: 3,
      cname: "Node JS",
      duration: "2 Months"
    }
  ];

  return (
  <div className="container">

    {showBooks && (
      <div className="section">

        <h1>Book Details</h1>

        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>₹ {book.price}</h4>
          </div>
        ))}

      </div>
    )}

    {showBlogs && (
      <div className="section v1">

        <h1>Blog Details</h1>

        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>Author : {blog.author}</p>
          </div>
        ))}

      </div>
    )}

    {showCourses && (
      <div className="section">

        <h1>Course Details</h1>

        {courses.map((course) => (
          <div key={course.id}>
            <h3>{course.cname}</h3>
            <p>Duration : {course.duration}</p>
          </div>
        ))}

      </div>
    )}

  </div>
);

}

export default App;