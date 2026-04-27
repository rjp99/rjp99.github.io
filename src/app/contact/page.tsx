import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactContent from '@/components/contact/ContactContent';

export const metadata = {
  title: 'Contact | Rani Patel',
  description: 'Get in touch with me for collaboration opportunities or just to say hello.',
};

export default function Contact() {
  return (
    <>
      <NavBar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
