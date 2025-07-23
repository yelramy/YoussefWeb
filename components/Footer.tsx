export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
      © {year} Youssef El Ramy — All rights reserved.
    </footer>
  );
}
