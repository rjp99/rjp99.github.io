import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProjectsContent from '@/components/projects/ProjectsContent';

export const metadata = {
  title: 'Projects | Rani Patel',
  description: 'Explore my portfolio of web development projects, games, and applications.',
};

export default function Projects() {
  return (
    <>
      <NavBar />
      <main>
        <ProjectsContent />
      </main>
      <Footer />
    </>
  );
}
