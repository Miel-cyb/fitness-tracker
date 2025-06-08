
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Input Your Goals",
    description: "Choose country, goals, weight, allergies."
  },
  {
    title: "Receive Recommendations",
    description: "Get workouts and meals tailored to you."
  },
  {
    title: "Track Progress",
    description: "Log your activities and watch your stats grow."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4">
        {steps.map((step, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
