export default function PracticeTailwind() {
  return (
    <>
      <textarea
        class="my-5 flex h-20 w-full items-center justify-center rounded-xl border-2 bg-amber-700 p-6 text-xl text-amber-50 caret-blue-800 sm:bg-orange-300 md:bg-blue-600"
        placeholder="You Can Write Here!"
      ></textarea>
      <div class="flex border-2 bg-white p-5 dark:border-white dark:bg-black dark:text-white">
        Dark mode enabled!
      </div>
      <div class="m-20 bg-stone-300 p-4 text-[30px] text-royalblue">
        JIT and using manual values
      </div>
    </>
  );
}
