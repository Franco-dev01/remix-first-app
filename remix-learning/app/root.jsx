import { cssBundleHref } from "@remix-run/css-bundle";
import styles from "~/styles/main.css"
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MainNavigation from "./components/MainNavigation";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [{ rel: "stylesheet", href: styles  }]),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation/>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }){
  return(
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occurred</title>
      </head>
      <body>
        <header>
          <MainNavigation/>
        </header>
        <main className="error">
          <h1>An error occured!</h1>
          <p>{error.message}</p>
          <p>Back to <Link to="/">safety</Link>!</p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
