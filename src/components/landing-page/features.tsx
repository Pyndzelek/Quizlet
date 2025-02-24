import { FaBrain, FaClock, FaTrophy } from "react-icons/fa";

export default function Features() {
  return (
    <section className="bg-white py-20" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose QuizMaster?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FaTrophy,
              title: "Compete & Learn",
              text: "Join daily challenges and climb leaderboards",
            },
            {
              icon: FaClock,
              title: "Quick Sessions",
              text: "10-minute quizzes perfect for busy schedules",
            },
            {
              icon: FaBrain,
              title: "Smart Learning",
              text: "Personalized recommendations based on your progress",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
