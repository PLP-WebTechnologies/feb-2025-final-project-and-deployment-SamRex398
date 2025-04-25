document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Blog posts data (could be fetched from API in real app)
  const posts = [
    {
      id: 1,
      title: "Building Modern Web Applications",
      date: "April 10, 2025",
      author: "Admin",
      content: "Learn the latest techniques in building scalable and maintainable web apps."
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use Which",
      date: "April 8, 2025",
      author: "Admin",
      content: "A deep dive into CSS layout modules and their best use cases."
    },
    {
      id: 3,
      title: "JavaScript ES2025 Features",
      date: "April 5, 2025",
      author: "Admin",
      content: "Explore the new features introduced in the latest JavaScript standard."
    },
    {
      id: 4,
      title: "Accessibility Best Practices",
      date: "April 2, 2025",
      author: "Admin",
      content: "How to make your web applications accessible to all users."
    },
    {
      id: 5,
      title: "Performance Optimization Tips",
      date: "March 30, 2025",
      author: "Admin",
      content: "Techniques to improve the speed and responsiveness of your site."
    }
  ];

  // Pagination variables
  const postsPerPage = 2;
  let currentPage = 1;
  const postsContainer = document.getElementById('posts-container');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  const pageInfo = document.getElementById('page-info');

  function renderPosts() {
    postsContainer.innerHTML = '';
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = posts.slice(start, end);

    paginatedPosts.forEach(post => {
      const postEl = document.createElement('article');
      postEl.classList.add('post');
      postEl.innerHTML = "\
        <h3><a href=\"post.html?id=" + post.id + "\">" + post.title + "</a></h3>\
        <p class=\"post-meta\">" + post.date + " | by " + post.author + "</p>\
        <p>" + post.content + "</p>\
      ";
      postsContainer.appendChild(postEl);
    });

    pageInfo.textContent = "Page " + currentPage;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = end >= posts.length;
  }

  prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPosts();
    }
  });

  nextPageBtn.addEventListener('click', () => {
    if ((currentPage * postsPerPage) < posts.length) {
      currentPage++;
      renderPosts();
    }
  });

  renderPosts();
});
