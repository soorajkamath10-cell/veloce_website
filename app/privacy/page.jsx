import Logo from '@/components/Logo';
import { CONTACT_EMAIL } from '@/lib/siteConfig';

export const metadata = {
  title: 'Privacy policy | Veloce',
  description:
    'How Veloce collects and uses personal information through veloce7.com, our WhatsApp service, and our ads and lead forms on Facebook and Instagram.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy policy | Veloce',
    url: 'https://www.veloce7.com/privacy',
    siteName: 'Veloce',
    type: 'website',
  },
};

const UPDATED = '28 October 2026';
const COMPANY = 'Veloce';
const ADDRESS = 'San Francisco · Bengaluru';

const Mail = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <>
      <header className="legal-top wrap">
        <Logo href="/" height={34} />
        <a className="btn btn-quiet btn-sm" href="/">Back to the site</a>
      </header>
      <main className="wrap">
        <article className="legal">
          <h1>Privacy policy</h1>
          <p className="fine legal-date">Last updated: {UPDATED}</p>

          <p>
            This policy explains how {COMPANY} ("Veloce", "we", "us") collects and uses personal information through
            veloce7.com, our WhatsApp service, and our ads and lead forms on Facebook and Instagram.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><b>Information you give us:</b> your name, work email, phone number, company name, number of properties you manage, your role, and anything else you type into our forms or messages.</li>
            <li><b>Information from lead forms on Facebook and Instagram:</b> the details you submit in a Veloce lead form. Meta shares these with us when you submit the form.</li>
            <li><b>Information about your use of our website:</b> pages you visit, device and browser type, and approximate location, collected through cookies and similar tools.</li>
            <li><b>Information you share while using Veloce:</b> messages, photos and tasks sent through our WhatsApp service by you, your staff or your guests.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To reply to you, show you a demo and set up your free trial.</li>
            <li>To provide and improve the Veloce service.</li>
            <li>To send you updates about Veloce. You can opt out at any time.</li>
            <li>To measure and improve our advertising. For example, we tell Meta whether a lead became a qualified lead so it can show our ads to similar businesses.</li>
            <li>To meet legal obligations and keep our service secure.</li>
          </ul>

          <h2>Who we share it with</h2>
          <p>We do not sell your personal information. We share it only with:</p>
          <ul>
            <li><b>Service providers</b> that help us run Veloce, such as hosting, email, CRM and messaging providers, under contracts that protect your data.</li>
            <li><b>Meta Platforms</b> for advertising measurement, as described above.</li>
            <li><b>Authorities</b>, when the law requires it.</li>
          </ul>

          <h2>How long we keep it</h2>
          <p>
            We keep lead and customer information for as long as needed for the purposes above, or as the law requires.
            After that, we delete it or make it anonymous.
          </p>

          <h2>Your choices and rights</h2>
          <p>
            You can ask us to access, correct or delete your personal information, or to stop sending you marketing
            messages. Email us at <Mail /> and we will reply within 30 days. Depending on where you live, including under
            India's Digital Personal Data Protection Act, 2023 and UAE data protection law, you may have further rights.
            You may also complain to your local data protection authority.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable technical and organisational measures to protect your information. No method of sending or
            storing data is completely secure, however.
          </p>

          <h2>Changes</h2>
          <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>

          <h2>Contact</h2>
          <address>
            {COMPANY}<br />
            {ADDRESS}<br />
            Email: <Mail />
          </address>
        </article>
      </main>
      <footer className="wrap">
        <div className="foot-bar"><span>&copy; 2026 gAI Ventures</span><a href="/">veloce7.com</a></div>
      </footer>
    </>
  );
}
