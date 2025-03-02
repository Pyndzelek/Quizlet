export default function CircularDiagram({
  percentage,
}: {
  percentage: number;
}) {
  return (
    <div className="relative w-48 h-48">
      <svg viewBox="0 0 36 36" className="absolute top-0 left-0 w-full h-full">
        {/* Background Circle */}
        <path
          className="stroke-gray-300 stroke-2 fill-none"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {/* Progress Circle */}
        <path
          className="stroke-indigo-600 stroke-2 fill-none transition-all duration-1000 ease-in-out"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          style={{ strokeDashoffset: 0 }} // Adjust as needed
        />
      </svg>
      {/* Percentage Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-4xl font-bold text-gray-800">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
}
