import Contact from "./pages/contact.vue";
import Explorer from "./pages/explorer.vue";
import Guide from "./pages/guide.vue";
import Home from "./pages/Home.vue";
import Idees from "./pages/idees.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/guide", component: Guide },
  { path: "/idées", component: Idees },
  { path: "/contact", component: Contact },
  { path: "/explorer", component: Explorer },
];
