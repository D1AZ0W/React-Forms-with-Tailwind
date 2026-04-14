const agents = [
  "Astra",
  "Breach",
  "Brimstone",
  "Chamber",
  "Clove",
  "Cypher",
  "Deadlock",
  "Fade",
  "Gekko",
  "Harbor",
  "Iso",
  "Jett",
  "KAY/O",
  "Killjoy",
  "Miks",
  "Neon",
  "Omen",
  "Phoenix",
  "Raze",
  "Reyna",
  "Sage",
  "Skye",
  "Sova",
  "Tejo",
  "Veto",
  "Viper",
  "Vyse",
  "Waylay",
];

export default function Agents() {
  return (
    <select className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/30">
      {agents.map((agent, index) => (
        <option key={index} value={agent}>
          {agent}
        </option>
      ))}
    </select>
  );
}
