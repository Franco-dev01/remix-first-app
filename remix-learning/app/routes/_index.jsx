import { Link } from "@remix-run/react"
import homeStyles from '~/styles/home.css';
export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id='content'>
    <h1>A better way of keeping track of tyour notes</h1>
    <p>Try our earky beta and never loose track of your agains</p>
    <p id="cta">
      <Link to="notes">Try Now!</Link>
    </p>
    </main>
  );
}

export function links(){
  return[{rel:"stylesheet", href: homeStyles}]
}