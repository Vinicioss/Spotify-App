import Sidebar from "../components/Sidebar";
import HomePage from "../components/HomePage";

import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <div className="pl">
      <main>
        <Sidebar/>
        <HomePage/>
      </main>
    </div>
  );
}
