import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Fikr",
  description:
    "Learn how Fikr collects, uses, and safeguards your information.",
};

export default function PrivacyPolicy() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 prose-legal">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-muted-foreground !mb-8">
          Last updated: February 15, 2025
        </p>

        <h2>1. Introduction</h2>
        <p>
          Fikr (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed
          to protecting your privacy. This Privacy Policy explains how we
          collect, use, and safeguard your information when you use the Fikr
          mobile application (&quot;App&quot;).
        </p>

        <h2>2. Information We Collect</h2>

        <h3>2.1 Information You Provide</h3>
        <ul>
          <li>
            <strong>Voice Recordings:</strong> Audio recordings you create within
            the App for note-taking purposes.
          </li>
          <li>
            <strong>Notes &amp; Text Content:</strong> Transcriptions and notes
            generated from your voice recordings, as well as any notes you create
            manually.
          </li>
          <li>
            <strong>API Keys:</strong> If you choose to use your own AI provider,
            you may provide API keys which are stored locally on your device.
          </li>
          <li>
            <strong>App Preferences:</strong> Settings and configuration choices
            you make within the App.
          </li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>
        <ul>
          <li>
            <strong>Device Information:</strong> Device type, operating system
            version, and unique device identifiers.
          </li>
          <li>
            <strong>Usage Data:</strong> How you interact with the App, including
            features used and time spent.
          </li>
          <li>
            <strong>Crash Reports:</strong> Diagnostic data if the App crashes or
            encounters errors.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve the App.</li>
          <li>
            Process your voice recordings into text using AI services.
          </li>
          <li>Generate insights and organize your notes.</li>
          <li>Respond to your requests and provide customer support.</li>
          <li>
            Monitor and analyze usage trends to improve user experience.
          </li>
        </ul>

        <h2>4. Data Storage and Security</h2>

        <h3>4.1 Local Storage</h3>
        <p>
          By default, all your data (notes, recordings, preferences, and API
          keys) is stored <strong>locally on your device</strong>. We do not have
          access to this data unless you explicitly enable cloud sync features.
        </p>

        <h3>4.2 Cloud Sync (Optional)</h3>
        <p>
          If you subscribe to a plan that includes cloud sync, your notes and
          settings may be stored on our cloud servers (powered by Google
          Firebase) to enable cross-device access. This data is:
        </p>
        <ul>
          <li>Encrypted in transit using TLS.</li>
          <li>Stored securely in Google Cloud infrastructure.</li>
          <li>Accessible only to your authenticated account.</li>
        </ul>

        <h3>4.3 Third-Party AI Services</h3>
        <p>
          When processing voice recordings, your audio data is sent to
          third-party AI providers (such as OpenAI) for transcription and
          analysis. Please review the privacy policies of these providers:
        </p>
        <ul>
          <li>
            <a
              href="https://openai.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google AI Privacy Policy
            </a>
          </li>
        </ul>

        <h2>5. Data Sharing</h2>
        <p>
          We do <strong>not</strong> sell, rent, or share your personal data with
          third parties for marketing purposes. We may share data only:
        </p>
        <ul>
          <li>
            With AI service providers to process your recordings (as described
            above).
          </li>
          <li>To comply with legal obligations or protect our rights.</li>
          <li>With your explicit consent.</li>
        </ul>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>
            <strong>Access</strong> your data at any time through the App.
          </li>
          <li>
            <strong>Export</strong> all your notes and data using the built-in
            export feature.
          </li>
          <li>
            <strong>Delete</strong> all your data using the &quot;Clear All
            Data&quot; option in Settings.
          </li>
          <li>
            <strong>Revoke</strong> API key access by removing your provider
            configuration.
          </li>
        </ul>

        <h2>7. Children&apos;s Privacy</h2>
        <p>
          The App is not intended for use by children under 13 years of age. We
          do not knowingly collect personal information from children under 13.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy within the App and
          updating the &quot;Last updated&quot; date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          📧{" "}
          <a href="mailto:support@fikr.app">
            <strong>support@fikr.app</strong>
          </a>
        </p>
      </div>
    </section>
  );
}
