export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
        © {new Date().getFullYear()} Prudhvi Krishna Chinnam
      </div>
    </footer>
  );
}