import type { Metadata } from "next";
import { images } from "@/lib/images";
import { CourseFinder } from "@/components/CourseFinder";
import { Container, CtaBand, PageHeader } from "@/components/ui";
import { totalCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "All courses",
  description: "Browse accredited courses in Health & Social Care, Functional Skills, Business, Teaching, IQA, Advice & Guidance and Leadership.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        image={images.courses}
        eyebrow="Courses"
        title="Find the right qualification"
        intro={`${totalCourses} accredited courses from Entry Level to Level 5. Search, filter by subject or level, and send an enquiry in one click.`}
      />
      <Container className="py-12 sm:py-16">
        <CourseFinder />
      </Container>
      <CtaBand />
    </>
  );
}
