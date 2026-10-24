"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";
import { categories } from "@/lib/courses";
import { site } from "@/lib/site";

const initial: EnquiryState = { status: "idle" };

const field =
  "mt-1.5 block w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-danger">
      {msg}
    </p>
  );
}

export function EnquiryForm({ defaultCourse = "", defaultType = "learner" }: { defaultCourse?: string; defaultType?: string }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const e = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-accent-soft p-8">
        <h3 className="text-4xl text-ink">Enquiry sent</h3>
        <p className="mt-2 text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5">
      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger">
          {state.message}
        </p>
      )}

      <fieldset>
        <legend className="text-sm font-medium">I&apos;m enquiring as</legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {[
            { v: "learner", l: "A learner" },
            { v: "employer", l: "An employer" },
          ].map((o) => (
            <label
              key={o.v}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 has-[:checked]:border-accent has-[:checked]:bg-accent-soft"
            >
              <input type="radio" name="type" value={o.v} defaultChecked={defaultType === o.v} className="accent-ink" />
              <span className="text-sm font-medium">{o.l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Full name</label>
          <input id="name" name="name" autoComplete="name" required aria-invalid={!!e.name} aria-describedby={e.name ? "name-err" : undefined} className={field} />
          <FieldError id="name-err" msg={e.name} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!e.phone} aria-describedby={e.phone ? "phone-err" : undefined} className={field} />
          <FieldError id="phone-err" msg={e.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!e.email} aria-describedby={e.email ? "email-err" : undefined} className={field} />
        <FieldError id="email-err" msg={e.email} />
      </div>

      <div>
        <label htmlFor="course" className="text-sm font-medium">
          Course of interest <span className="font-normal text-muted">(optional)</span>
        </label>
        <select id="course" name="course" defaultValue={defaultCourse} className={field}>
          <option value="">Not sure yet — I&apos;d like advice</option>
          {categories.map((c) => (
            <optgroup key={c.slug} label={c.name}>
              {c.courses.map((course) => (
                <option key={course.title} value={course.title}>
                  {course.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          How can we help? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} aria-invalid={!!e.message} className={field} placeholder="E.g. I work as a carer and want to progress to Level 3." />
        <FieldError id="message-err" msg={e.message} />
      </div>

      {/* Honeypot */}
      <div aria-hidden className="hidden">
        <label htmlFor="company_website">Leave blank</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-ink" aria-invalid={!!e.consent} />
          <span>
            I agree to {site.name} using these details to respond to my enquiry, as set out in the{" "}
            <a href={site.legal.privacy} className="underline">privacy policy</a>.
          </span>
        </label>
        <FieldError id="consent-err" msg={e.consent} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-[var(--radius-btn)] bg-accent px-7 py-3.5 font-label text-xs font-semibold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
