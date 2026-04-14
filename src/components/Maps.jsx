const maps = [
  "Corrode",
  "Abyss",
  "Sunset",
  "Lotus",
  "Pearl",
  "Fracture",
  "Breeze",
  "Icebox",
  "Ascent",
  "Haven",
  "Bind",
  "Split",
];

export default function Maps() {
  return (
    <select className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/30">
      {maps.map((map, index) => (
        <option key={index} value={map}>
          {map}
        </option>
      ))}
    </select>
  );
}
