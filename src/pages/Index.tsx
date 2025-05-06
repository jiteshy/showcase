import { Resume } from "../components/Resume";
import { Projects } from "../components/Projects";
import { Social } from "../components/Social";
import { MediumPosts } from "../components/MediumPosts";
import { Contributions } from "../components/Contributions";
import { Hero } from "../components/Hero";
export default function Index() {
  return (
    <div className="container-custom">
      <Hero />
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Resume */}
        <div className="h-full w-full">
          <Resume />
        </div>

        {/* Right Column - Projects, Articles, Activity, Social */}
        <div className="h-full overflow-y-auto no-scrollbar">
          <div className="space-y-4">
            <Projects />
            <MediumPosts />
            <Contributions />
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
