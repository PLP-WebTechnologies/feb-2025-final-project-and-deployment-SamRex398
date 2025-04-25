document.addEventListener('DOMContentLoaded', () => {
  // Sample posts data (should match posts in scripts.js)
  const posts = [
    {
      id: 1,
      title: "Building Modern Web Applications",
      date: "April 10, 2025",
      author: "Admin",
      content: "<p>Building modern web applications requires a deep understanding of both frontend and backend technologies. Developers must be proficient in frameworks such as React, Angular, or Vue, which allow for the creation of dynamic and responsive user interfaces. Additionally, knowledge of backend technologies like Node.js, Django, or Ruby on Rails is essential for handling server-side logic, database interactions, and API development.</p><p>Scalability is a critical factor in modern web development. Applications should be designed to handle increasing loads gracefully, which often involves implementing microservices architectures, load balancing, and efficient database management. Developers also need to consider security best practices to protect user data and prevent vulnerabilities such as SQL injection and cross-site scripting.</p><p>Deployment strategies have evolved with the advent of cloud computing. Platforms like AWS, Azure, and Google Cloud provide robust infrastructure for hosting applications, enabling continuous integration and continuous deployment (CI/CD) pipelines. These tools automate testing and deployment, ensuring that updates can be rolled out quickly and reliably.</p><p>Staying ahead in the web development world requires continuous learning and adaptation. Developers must keep up with emerging technologies, standards, and best practices to build maintainable and high-performance applications that meet user expectations.</p>"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use Which",
      date: "April 8, 2025",
      author: "Admin",
      content: "<p>CSS Grid and Flexbox are powerful layout modules that have revolutionized web design. CSS Grid excels at creating two-dimensional layouts, allowing designers to control both rows and columns with precision. It is ideal for complex layouts like web pages, dashboards, and application interfaces where alignment in both directions is necessary.</p><p>Flexbox, on the other hand, is designed for one-dimensional layouts, either in a row or a column. It is perfect for aligning items along a single axis, such as navigation bars, toolbars, or lists. Flexbox provides flexibility in distributing space and aligning content within containers, making it highly useful for smaller UI components.</p><p>Understanding the strengths and limitations of each module is crucial for effective design. Often, developers combine CSS Grid and Flexbox to leverage the benefits of both. For example, CSS Grid can be used for the overall page layout, while Flexbox manages the alignment of items within individual grid cells.</p><p>Mastering these layout techniques enables developers to create responsive, accessible, and visually appealing websites that adapt seamlessly to different screen sizes and devices.</p>"
    },
    {
      id: 3,
      title: "JavaScript ES2025 Features",
      date: "April 5, 2025",
      author: "Admin",
      content: "<p>JavaScript ES2025 introduces several exciting features that enhance the language's expressiveness and developer productivity. Among these are new syntax improvements that simplify common coding patterns, making code more readable and maintainable. For instance, enhanced pattern matching and optional chaining provide more concise ways to handle complex data structures.</p><p>New APIs have been added to the standard library, offering developers more tools for tasks such as asynchronous programming, data manipulation, and internationalization. These APIs help reduce reliance on third-party libraries and improve performance.</p><p>Performance optimizations in ES2025 ensure that JavaScript engines run code more efficiently, leading to faster load times and smoother user experiences. Developers are encouraged to adopt these new features to write modern, efficient, and robust applications.</p><p>Staying updated with the latest JavaScript standards is essential for developers aiming to leverage the full potential of the language and build cutting-edge web applications.</p>"
    },
    {
      id: 4,
      title: "Accessibility Best Practices",
      date: "April 2, 2025",
      author: "Admin",
      content: "<p>Accessibility is a fundamental aspect of web development that ensures all users, including those with disabilities, can access and interact with websites effectively. Implementing ARIA roles and attributes helps assistive technologies interpret page content correctly, improving navigation for screen reader users.</p><p>Keyboard navigation support is vital for users who cannot use a mouse. Developers should ensure that all interactive elements are reachable and operable via keyboard inputs, following a logical tab order. Focus indicators should be visible to guide users through the interface.</p><p>Color contrast and text sizing are important for users with visual impairments. Designers must choose color schemes that provide sufficient contrast and allow users to adjust text size without breaking the layout. Testing with accessibility tools and real users helps identify and fix issues.</p><p>By prioritizing accessibility, developers create inclusive web experiences that comply with legal standards and broaden their audience reach.</p>"
    },
    {
      id: 5,
      title: "Performance Optimization Tips",
      date: "March 30, 2025",
      author: "Admin",
      content: "<p>Optimizing web performance is crucial for delivering fast and responsive user experiences. Techniques such as lazy loading defer the loading of non-critical resources, reducing initial page load times and saving bandwidth. This approach is especially beneficial for images and videos.</p><p>Code splitting allows developers to break down large JavaScript bundles into smaller chunks that load on demand. This reduces the amount of code executed during initial load, improving performance and perceived speed.</p><p>Caching strategies, including browser caching and service workers, help store frequently accessed resources locally, minimizing network requests and speeding up subsequent visits. Proper cache invalidation ensures users receive the latest content without unnecessary delays.</p><p>Monitoring performance metrics and using tools like Lighthouse and WebPageTest enable developers to identify bottlenecks and optimize accordingly, ensuring a smooth and efficient web experience.</p>"
    }
  ];

  // Utility to get query parameter by name
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const postId = parseInt(getQueryParam('id'), 10);
  const post = posts.find(p => p.id === postId);

  const postTitle = document.getElementById('post-title');
  const postMeta = document.getElementById('post-meta');
  const postBody = document.getElementById('post-body');

  if (post) {
    postTitle.textContent = post.title;
    postMeta.textContent = post.date + " | by " + post.author;
    postBody.innerHTML = post.content;
  } else {
    postTitle.textContent = "Post Not Found";
    postMeta.textContent = "";
    postBody.innerHTML = "<p>Sorry, the post you are looking for does not exist.</p>";
  }

  // Comments functionality
  const commentsList = document.getElementById('comments-list');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');

  // Load comments from localStorage
  function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments_' + postId)) || [];
    commentsList.innerHTML = '';
    comments.forEach(comment => {
      const commentEl = document.createElement('div');
      commentEl.classList.add('comment');
      commentEl.textContent = comment;
      commentsList.appendChild(commentEl);
    });
  }

  // Save comment to localStorage
  function saveComment(comment) {
    const comments = JSON.parse(localStorage.getItem('comments_' + postId)) || [];
    comments.push(comment);
    localStorage.setItem('comments_' + postId, JSON.stringify(comments));
  }

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = commentInput.value.trim();
    if (comment) {
      saveComment(comment);
      loadComments();
      commentInput.value = '';
    }
  });

  loadComments();
});
