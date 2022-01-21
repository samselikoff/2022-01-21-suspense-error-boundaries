export default function Card({ children }) {
  return (
    <div className="flex items-center justify-center px-10 overflow-hidden bg-white rounded-lg shadow h-28">
      {children}
    </div>
  );
}
