import posts from "../posts";

const sortedPosts = [...Object.entries(posts)].sort(
  (a, b) => b[1].date - a[1].date
);

export default function () {
  return /* html */ `
    <section>
        <h2>Wszystkie posty</h2>
        <div class="section-content two-columns">
            ${sortedPosts
              .map(([key, value]) => renderPost(`/blog/${key}`, value))
              .join("")}
        </div>
    </section
    `;
}

function renderPost(url, post) {
  return /* html */ `
    <div class="post-wrapper">
        <div class="post">
            <h3 class="post__title">
                <a href="${url}" class="internal">${post.title}</a>
            </h3>
            <p class="post__date">${post.date.toLocaleString()}</p>
            <div class="post__content">
                ${post.content.slice(
                  0,
                  post.content.length < 100 ? post.content.length : 100
                )}...
            </div>
        </div>
    </div>
    `;
}
