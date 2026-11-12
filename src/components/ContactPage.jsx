import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Send } from 'lucide-react';
import { profile, serviceOptions } from '../data/portfolioData';
import { GitHubMark, LinkedInMark, PageHeading } from './Layout';
import { useSearchParams } from './Router';

const TOPIC_ALIASES = {
  'ai-automation': 'ai-automation',
  'agentic-workflows': 'ai-automation',
  'custom-ai-model': 'custom-ai-model',
  'custom-ai': 'custom-ai-model',
  'web-app-mvp': 'web-app-mvp',
  'startup-architecture': 'web-app-mvp',
  'tech-consulting': 'tech-consulting',
  consulting: 'tech-consulting',
  'qa-systems': 'qa-systems',
  qa: 'qa-systems',
};

/**
 * Resolves an incoming `?topic=` query parameter into a valid `<select name="service">`
 * option value, returning empty string when absent or unrecognized.
 *
 * @param {string|null} rawTopic - Query parameter value from URLSearchParams.
 * @returns {string} Canonical service option value or empty string.
 */
function resolveTopicValue(rawTopic) {
  if (!rawTopic) return '';
  const normalized = rawTopic.trim().toLowerCase();
  if (TOPIC_ALIASES[normalized]) {
    return TOPIC_ALIASES[normalized];
  }
  const match = serviceOptions.find((option) => option.value === normalized);
  return match ? match.value : '';
}

/**
 * Submits a contact enquiry to the configured host-agnostic form provider (Web3Forms or Formspree).
 *
 * @param {FormData} formData - Collected form fields from the contact form.
 * @returns {Promise<void>} Resolves on accepted delivery.
 * @throws {Error} When no form provider key/endpoint is configured or the provider rejects the request.
 */
async function submitEnquiry(formData) {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  // Reject automated submissions that fill the hidden honeypot field without alerting bots.
  if (formData.get('bot-field')) {
    return;
  }

  if (web3FormsKey) {
    const selectedValue = String(formData.get('service') || '');
    const serviceLabel =
      serviceOptions.find((option) => option.value === selectedValue)?.label || 'General Inquiry';

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        subject: `Portfolio Inquiry (${serviceLabel}) — ${formData.get('name')}`,
        from_name: String(formData.get('name') || 'Portfolio Visitor'),
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        service: serviceLabel,
        message: String(formData.get('message') || ''),
      }),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
      throw new Error(
        result.message || 'The form could not be sent. Please try again or reach out on LinkedIn.',
      );
    }
    return;
  }

  if (formspreeEndpoint) {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
    if (!response.ok) {
      throw new Error('The form could not be sent. Please try again or reach out on LinkedIn.');
    }
    return;
  }

  throw new Error(
    'Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY (or VITE_FORMSPREE_ENDPOINT) to your .env or hosting environment variables.',
  );
}

/**
 * Renders the interactive host-agnostic contact form section with `?topic=` query
 * pre-selection, validation, submission state, and confirmation screen.
 *
 * @returns {React.ReactElement} Contact form and profile links section.
 */
function ContactSection() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get('topic');
  const [selectedService, setSelectedService] = useState(() => resolveTopicValue(topicParam));
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const resolved = resolveTopicValue(topicParam);
    if (resolved) {
      setSelectedService(resolved);
    }
  }, [topicParam]);

  /**
   * Handles contact form submission and updates status (`sending`, `sent`, or `error`).
   *
   * @param {React.FormEvent<HTMLFormElement>} event - Form submit event.
   * @returns {Promise<void>} Resolves once submission state transitions to `sent` or `error`.
   */
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await submitEnquiry(data);
      setStatus('sent');
      form.reset();
      setSelectedService(resolveTopicValue(topicParam));
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">
            Have a challenge or build in mind? <span className="eyebrow-line" />
          </div>
          <h2>
            Let’s make
            <br />
            something <em>matter.</em>
          </h2>
          <p>
            Share what you’re building or where a technical bottleneck sits—whether it’s a startup
            MVP, web/mobile platform, AI automation, or custom AI model.
          </p>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInMark /> Connect on LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <GitHubMark /> Find me on GitHub <ArrowUpRight size={14} />
            </a>
          </div>
          <span className="contact-spark">✳</span>
        </div>

        <div className="contact-form-wrap">
          {status === 'sent' ? (
            <div className="form-success" role="status">
              <span className="success-icon">
                <Check size={20} />
              </span>
              <h3>Message received.</h3>
              <p>Thanks for reaching out. I’ll review your note and get back to you soon.</p>
              <button type="button" className="text-link" onClick={() => setStatus('idle')}>
                Send another note <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <form className="contact-form" name="contact" onSubmit={handleSubmit}>
              <p className="honeypot">
                <label>
                  Leave this field empty
                  <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <div className="form-intro">
                <span>Tell me about your project</span>
                <span className="form-required">* Required</span>
              </div>

              <label className="field">
                <span>
                  Your name <i>*</i>
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="What should I call you?"
                  required
                  minLength="2"
                  maxLength="100"
                />
              </label>

              <label className="field">
                <span>
                  Email address <i>*</i>
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  maxLength="254"
                />
              </label>

              <label className="field">
                <span>What can I help with?</span>
                <select
                  name="service"
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>
                  A little about the project <i>*</i>
                </span>
                <textarea
                  name="message"
                  placeholder="The product, the AI workflow, or the engineering problem you want to solve..."
                  required
                  minLength="10"
                  maxLength="3000"
                  rows="3"
                />
              </label>

              {status === 'error' && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="button button-dark form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send your note'}{' '}
                {status === 'sending' ? <span className="spinner" /> : <Send size={15} />}
              </button>

              <p className="form-privacy">
                Sent securely via encrypted form delivery to reply to your enquiry, never for a
                mailing list.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the Contact route page combining the editorial heading and Netlify contact form.
 *
 * @returns {React.ReactElement} Complete Contact route page.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeading
        eyebrow="Contact · Start a conversation"
        title={
          <>
            Tell me what
            <br />
            <em>you’re building.</em>
          </>
        }
        detail="A brief note on your goals, timeline, or technical bottleneck is enough. We’ll map out the sharpest next step together."
      />
      <ContactSection />
    </>
  );
}
