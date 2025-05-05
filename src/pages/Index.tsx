import { Resume } from '../components/Resume';
import { Projects } from '../components/Projects';
import { Social } from '../components/Social';
import { MediumPosts } from '../components/MediumPosts';
import { Contributions } from '../components/Contributions';

export default function Index() {
  return (
    <div className="h-screen p-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-50">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Resume */}
        <div className="h-full w-full overflow-hidden shadow rounded-xl">
          <Resume />
        </div>

        {/* Right Column - Projects, Articles, Activity, Social */}
        <div className="h-full overflow-y-auto">
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
