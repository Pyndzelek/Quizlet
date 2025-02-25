import Welcome from "@/components/landing-page/welcome";
import RandomQuestion from "@/components/landing-page/random-question";
import Features from "@/components/landing-page/features";
import Challenge from "@/components/landing-page/challenge";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto  py-20">
        <div className="flex flex-col md:flex-row md:gap-5 items-center">
          <Welcome />

          <RandomQuestion />
        </div>
      </div>

      <Features />
      <Challenge />
    </div>
  );
}
