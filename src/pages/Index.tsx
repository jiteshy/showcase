import { Projects } from "@/components/Projects";
import { Social } from "@/components/Social";
import { MediumPosts } from "@/components/MediumPosts";
import { Contributions } from "@/components/Contributions";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-zinc-100 p-4 lg:p-10 flex flex-col items-center justify-start">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Left Sidebar */}
          <aside className="w-full lg:w-[40%] border-b lg:border-b-0 lg:border-r border-zinc-100 p-6 lg:p-8 flex flex-col">
            <Hero />
            <Social />
          </aside>

          {/* Right Content */}
          <main className="flex-1 divide-y divide-zinc-100">
            <Projects />
            <MediumPosts />
            <Contributions />
          </main>

        </div>
        <Footer />
      </div>
    </div>
  );
}
