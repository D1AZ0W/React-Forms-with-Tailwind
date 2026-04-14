import { Link } from "react-router-dom";

export default function Form1() {
  return (
    <div className="min-h-screen bg-slate-900 px-4 py-8 text-slate-100">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-800/80 p-6 shadow-xl sm:p-8">
        <h2 className="text-cyan-200">Form 1: Contact Details</h2>

        <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="formField">
            <label htmlFor="fullName" className="formlabel">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="formField">
            <label htmlFor="email" className="formlabel">
              Email Address
            </label>
            <input id="email" type="email" placeholder="example@mail.com" />
          </div>

          <div className="formField">
            <label htmlFor="phone" className="formlabel">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="formField">
            <label htmlFor="topic" className="formlabel">
              Topic
            </label>
            <select
              id="topic"
              className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
            >
              <option>General Question</option>
              <option>Feedback</option>
              <option>Support</option>
            </select>
          </div>

          <div className="formField sm:col-span-2">
            <label htmlFor="message" className="formlabel">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="formField sm:col-span-2">
            <label className="mt-1 flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" className="h-4 w-4 accent-cyan-500" />
              Send me a copy of this message
            </label>
          </div>
        </form>

        <div className="flex items-center gap-4 mt-6">
          <button
            type="button"
            className="rounded-lg bg-cyan-600 p-4 text-sm font-semibold text-white hover:bg-cyan-950"
          >
            Submit
          </button>
          <button
            type="button"
            className="rounded-lg bg-red-600 p-4 text-sm font-semibold text-white hover:bg-red-950"
          >
            Reset
          </button>
          <Link
            to="/"
            className="rounded-lg border border-black p-4 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
