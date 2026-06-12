import { findUser } from "./src/users.mjs";
import { renderWelcome, renderFooter } from "./src/render.mjs";

const user = findUser(42);

setTimeout(() => {
  console.log(renderWelcome(user));
  console.log(renderFooter());
}, 400);
