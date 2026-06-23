
export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Prudhvi</h1>

        <ul className="flex gap-6">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}