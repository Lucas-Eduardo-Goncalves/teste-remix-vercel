import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "fb:token",
    expires: new Date(Date.now() + 604_800), // one week
    httpOnly: true,
    maxAge: 600,
    path: "/",
    sameSite: "lax",
    secrets: ["tacos"],
    secure: true
  }
});

export { 
  getSession as getSessionAuth, 
  commitSession as commitSessionAuth, 
  destroySession as destroySessionAuth,
};