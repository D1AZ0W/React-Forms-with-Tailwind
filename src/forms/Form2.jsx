import { Link } from "react-router-dom";
import Agents from "../components/Agents";
import Maps from "../components/Maps";
export default function Form2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-red-950 to-zinc-950 px-4 py-8 text-slate-100">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-red-500/40 bg-zinc-900/90 p-6 shadow-xl shadow-red-900/30 sm:p-8">
        <h2 className="text-red-300">Form 2: Valorant Player Profile</h2>

        <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="formField">
            <label htmlFor="valoUsername" className="formlabel">
              Valorant Username
            </label>
            <input
              id="valoUsername"
              type="text"
              placeholder="Example: SharpAim"
            />
          </div>

          <div className="formField">
            <label htmlFor="valoTag" className="formlabel">
              Riot Tag
            </label>
            <input id="valoTag" type="text" placeholder="Example: #APAC" />
          </div>

          <div className="formField">
            <label htmlFor="valoPassword" className="formlabel">
              Password
            </label>
            <input
              id="valoPassword"
              type="password"
              placeholder="Enter account password"
            />
          </div>

          <div className="formField">
            <label htmlFor="mainAgent" className="formlabel">
              Main Agent
            </label>
            <Agents />
          </div>

          <div className="formField">
            <label htmlFor="secondAgent" className="formlabel">
              Secondary Agent
            </label>
            <Agents />
          </div>

          <div className="formField">
            <label htmlFor="region" className="formlabel">
              Region
            </label>
            <select
              id="region"
              className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/30"
            >
              <option>APAC</option>
              <option>EU</option>
              <option>NA</option>
              <option>LATAM</option>
            </select>
          </div>

          <div className="formField">
            <label htmlFor="rank" className="formlabel">
              Current Rank
            </label>
            <select
              id="rank"
              className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/30"
            >
              <option>Iron</option>
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
              <option>Platinum</option>
              <option>Diamond</option>
              <option>Ascendant</option>
              <option>Immortal</option>
              <option>Radiant</option>
            </select>
          </div>

          <div className="formField">
            <label htmlFor="favMap" className="formlabel">
              Favorite Map
            </label>
            <Maps />
          </div>

          <div className="formField">
            <label htmlFor="weeklyHours" className="formlabel">
              Hours Per Week
            </label>
            <input
              id="weeklyHours"
              type="number"
              placeholder="10"
              min="1"
              max="70"
            />
          </div>

          <div className="formField sm:col-span-2 md:col-span-3">
            <label className="formlabel">Preferred Role</label>
            <div className="mt-1 flex flex-wrap gap-4 text-sm text-slate-200">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  className="h-4 w-4 accent-red-500"
                />
                Duelist
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  className="h-4 w-4 accent-red-500"
                />
                Controller
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  className="h-4 w-4 accent-red-500"
                />
                Initiator
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  className="h-4 w-4 accent-red-500"
                />
                Sentinel
              </label>
            </div>
          </div>

          <div className="formField sm:col-span-2 md:col-span-3">
            <label htmlFor="playstyle" className="formlabel">
              Playstyle / Notes
            </label>
            <textarea
              id="playstyle"
              rows="4"
              className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-500/30"
              placeholder="Example: Aggressive entry, likes fast executes, practices aim daily."
            ></textarea>
          </div>

          <div className="formField sm:col-span-2 md:col-span-3">
            <label className="mt-1 flex items-center gap-2 text-sm text-slate-200">
              <input type="checkbox" className="h-4 w-4 accent-red-500" />I
              confirm this is my current Valorant profile info.
            </label>
          </div>
        </form>

        <div className="mt-6 flex items-center gap-4">
          <button
            type="button"
            className="rounded-lg bg-red-600 p-4 text-sm font-semibold text-white hover:bg-red-800"
          >
            Save Profile
          </button>
          <button
            type="button"
            className="rounded-lg bg-zinc-600 p-4 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Clear Form
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
