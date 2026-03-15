import Hero from "@/components/hero-home";
import CourseSections from "@/components/course-sections";

export const metadata = {
  title: "Rethink Forex | Understand How Price Actually Moves",
  description:
    "A modern market education page built around the real question serious traders ask: why can you be right on direction and still lose before the move happens?",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CourseSections />
    </>
  );
}