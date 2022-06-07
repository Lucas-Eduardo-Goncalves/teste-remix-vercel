import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Toaster } from "react-hot-toast";
import { GlobalStyles } from "./global/styles/GlobalStyles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Poker Scrum",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },

    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    }, 

    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
    }
  ];
}

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <GlobalStyles />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#202024',
              color: '#E1E1E6',
            }
          }}
        />
      </body>
    </html>
  );
}
