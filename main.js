import Home from "./pages/home";
import NotFound from "./pages/404";
import posts from "./posts";
import Blog from "./pages/blog";
import Post from "./pages/post";

const app = document.querySelector("#app");

const routes = {
  "/": { title: "Strona główna", component: Home },
  "/404": { title: "Not Found", component: NotFound },
  "/blog": { title: "Blog", component: Blog },
};

Object.entries(posts).forEach(([key, value]) => {
  Object.assign(routes, {
    [`/blog/${key}`]: { title: value.title, component: () => Post(value) },
  });
});

function router() {
  const view = routes[location.pathname];

  if (view) {
    document.title = view.title;
    app.innerHTML = view.component();
  } else {
    history.replaceState("", "", "/404");
    router();
  }
}

window.addEventListener("click", (event) => {
  if (!event.target.matches("a.internal")) return;

  event.preventDefault();
  history.pushState("", "", event.target.href);
  router();
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
