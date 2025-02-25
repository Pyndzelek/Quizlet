export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="bg-white rounded-xl shadow-lg p-8">{children}</div>
    </div>
  );
}
