/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_rAI1YHAK.mjs';
import 'kleur/colors';
import { p as playerData, $ as $$PlayerTable, a as $$Layout } from '../chunks/player_DTwQ3Pso.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const query = Astro2.url.searchParams.get("country");
  const filteredResult = playerData.filter((player) => {
    if (!query) return player?.country?.name?.toLocaleLowerCase() === "myanmar";
    return query?.toLocaleLowerCase() === player?.country?.name?.toLocaleLowerCase();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row w-full main-container py-[20px] md:py-[50px]"> <!-- Left Sidebar for Country Filter --> <aside class="w-full md:w-1/4 bg-gray-900 p-4"> <h2 class="text-xl font-bold text-white mb-4">Filter by Country</h2> <ul class="space-y-2" x-data="{ country: new URLSearchParams(window.location.search).get('country') || 'myanmar' }"> <li> <button onclick="window.location.href = '/players?country=myanmar'" :class="country === 'myanmar' ? 'bg-highlight' : 'bg-primary'" class="w-full p-2 text-left text-white rounded-md hover:bg-opacity-80 transition">
🇲🇲 Myanmar
</button> </li> <li> <button onclick="window.location.href = '/players?country=philippines'" :class="country === 'philippines' ? 'bg-highlight' : 'bg-primary'" class="w-full p-2 text-left text-white rounded-md hover:bg-opacity-80 transition">
🇵🇭 Philippines
</button> </li> <li> <button onclick="window.location.href = '/players?country=indonesia'" :class="country === 'indonesia' ? 'bg-highlight' : 'bg-primary'" class="w-full p-2 text-left text-white rounded-md hover:bg-opacity-80 transition">
🇮🇩 Indonesia
</button> </li> <li> <button onclick="window.location.href = '/players?country=malaysia'" :class="country === 'malaysia' ? 'bg-highlight' : 'bg-primary'" class="w-full p-2 text-left text-white rounded-md hover:bg-opacity-80 transition">
🇲🇾 Malaysia
</button> </li> <li> <button onclick="window.location.href = '/players?country=thailand'" :class="country === 'thailand' ? 'bg-highlight' : 'bg-primary'" class="w-full p-2 text-left text-white rounded-md hover:bg-opacity-80 transition">
🇹🇭 Thailand
</button> </li> </ul> </aside> <!-- Right Side Table --> <div class="w-full md:w-3/4 overflow-x-auto"> ${renderComponent($$result2, "PlayerTable", $$PlayerTable, { "playerData": filteredResult })} </div> </div> ` })}`;
}, "/Users/ryan/Desktop/razar/src/pages/players/index.astro", void 0);

const $$file = "/Users/ryan/Desktop/razar/src/pages/players/index.astro";
const $$url = "/players";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
