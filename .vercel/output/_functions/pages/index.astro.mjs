/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as addAttribute } from '../chunks/astro/server_rAI1YHAK.mjs';
import 'kleur/colors';
import { $ as $$PlayerTable, p as playerData, a as $$Layout } from '../chunks/player_DTwQ3Pso.mjs';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_lLXSjB_e.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full main-container grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-auto md:h-[500px] py-8 md:py-[50px]"> <!-- Left Content (Text Section) --> <div class="text-text w-full flex items-start justify-center flex-col relative p-6 md:p-0"> <h1 class="font-heading text-center md:text-left text-3xl sm:text-4xl md:text-5xl mb-4 w-full relative">
Discover In-Depth Hero Insights, Player Stats & Match Schedules
</h1> <p class="font-body text-center md:text-left text-base sm:text-lg md:text-xl mb-6 relative">
Stay ahead of the competition with exclusive blogs, strategy guides, and
      real-time updates on players, heroes, and match schedules!
</p> </div> <!-- Right Content (Image Section) --> <div class="w-full h-[300px] sm:h-[400px] md:h-full bg-red-500 bg-[url('/images/hero_bg.webp')] bg-cover bg-center relative"> <div class="absolute inset-0 bg-black bg-opacity-60 p-4 sm:p-6 md:p-8 flex flex-col justify-end"> <span class="text-xs sm:text-sm uppercase bg-highlight text-white px-2 sm:px-3 py-1 rounded-full w-max mb-4">
Player Tips
</span> <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
Pro Tips to Level Up Your Game
</h2> <a href="#" class="mt-4 text-text text-sm sm:text-base font-semibold hover:text-highlight">
Read More →
</a> </div> </div> </div>`;
}, "/Users/ryan/Desktop/razar/src/components/home/HeroSection.astro", void 0);

const $$HomeSecondSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full main-container grid grid-cols-4 gap-5 items-start py-8 md:py-[50px]"> <!-- Left Section --> <div class="col-[1/5] lg:col-[1/4] w-full"> <section id="stats" class="text-text min-h-[50vh] w-full"> <div class="flex flex-row items-center justify-between w-full mb-6"> <h2 class="font-heading text-2xl sm:text-3xl">Players In Myanmar</h2> <a href="/players" class="text-text text-xs uppercase py-1 px-2 rounded hover:bg-orange-500 transition-all">
See More →
</a> </div> <!-- Scrollable Table Wrapper --> ${renderComponent($$result, "PlayerTable", $$PlayerTable, { "playerData": playerData.slice(0, 10) })} </section> </div> <!-- Right Section (Optional) --> <div class="col-[1/5] lg:col-[4/5] w-full"> <h2 class="font-heading text-2xl sm:text-3xl mb-6">Recent Blogs</h2> <div class="flex flex-col gap-5"> ${[
    {
      title: "Master Hero Skills Like a Pro",
      description: "Learn the best skills to master heroes and dominate the arena.",
      link: "/blog/master-hero-skills"
    },
    {
      title: "Top 5 Hero Counters You Must Know",
      description: "Counter the strongest heroes with our detailed guide.",
      link: "/blog/hero-counters"
    },
    {
      title: "The Rise of Mobile Esports",
      description: "How Mobile Legends is shaping the future of mobile esports.",
      link: "/blog/mobile-esports-rise"
    }
  ].map((blog, index) => renderTemplate`<div class="bg-gray-800 p-4 rounded-md shadow-md"> <h3 class="font-heading text-lg sm:text-xl mb-2">${blog.title}</h3> <p class="text-sm sm:text-base text-gray-400 mb-4"> ${blog.description} </p> <a${addAttribute(blog.link, "href")} class="text-highlight text-sm sm:text-base font-semibold hover:underline">
Read More →
</a> </div>`)} </div> </div> </div>`;
}, "/Users/ryan/Desktop/razar/src/components/home/HomeSecondSection.astro", void 0);

const $$FeaturedHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-[50px] bg-gray-900"> <div class="main-container"> <h2 class="font-heading text-3xl text-left mb-4">Featured Heroes</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${[
    {
      name: "Shadow Ninja",
      role: "Assassin",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Dragon Knight",
      role: "Fighter",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Magic Healer",
      role: "Support",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Ice Archer",
      role: "Marksman",
      image: "https://via.placeholder.com/150"
    }
  ].map((hero, index) => renderTemplate`<div class="bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col gap-[10px]"> ${renderComponent($$result, "Image", $$Image, { "src": hero.image, "alt": hero.name, "class": "w-24 h-24 mx-auto rounded-full", "width": 300, "height": 300 })} <h3 class="text-lg font-semibold">${hero.name}</h3> <p class="text-gray-400 text-sm">${hero.role}</p> <a href="#" class=" text-highlight text-sm font-semibold hover:underline">
View Details →
</a> </div>`)} </div> </div> </section>`;
}, "/Users/ryan/Desktop/razar/src/components/home/FeaturedHero.astro", void 0);

const $$UpcomingMatch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="my-8 sm:my-12 bg-gray-900"> <div class="main-container"> <!-- Title --> <h2 class="font-heading text-2xl sm:text-3xl text-center sm:text-left mb-6">
Upcoming Matches
</h2> <!-- Matches Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"> ${[
    {
      date: "Dec 15, 2024",
      match: "Team Alpha vs Team Bravo",
      time: "18:00 UTC"
    },
    {
      date: "Dec 16, 2024",
      match: "Team Echo vs Team Delta",
      time: "20:00 UTC"
    },
    {
      date: "Dec 17, 2024",
      match: "Team Omega vs Team Sigma",
      time: "22:00 UTC"
    },
    {
      date: "Dec 18, 2024",
      match: "Team Beta vs Team Zeta",
      time: "21:00 UTC"
    },
    {
      date: "Dec 19, 2024",
      match: "Team Delta vs Team Theta",
      time: "19:00 UTC"
    }
  ].map((match, index) => renderTemplate`<div class="flex flex-col sm:flex-row items-start sm:items-center bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"> <!-- Date --> <span class="block text-gray-400 mb-2 sm:mb-0 sm:mr-4 text-xs sm:text-sm w-full sm:w-auto"> ${match.date} </span> <!-- Match Info --> <span class="flex-1 font-normal text-sm sm:text-base text-left"> ${match.match} </span> <!-- Time --> <span class="text-highlight text-sm sm:text-base font-semibold mt-2 sm:mt-0"> ${match.time} </span> </div>`)} </div> </div> </section>`;
}, "/Users/ryan/Desktop/razar/src/components/home/UpcomingMatch.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "HomeSecondSection", $$HomeSecondSection, {})} ${renderComponent($$result2, "FeaturedHero", $$FeaturedHero, {})} ${renderComponent($$result2, "UpcomingMatch", $$UpcomingMatch, {})} </div> ` })}`;
}, "/Users/ryan/Desktop/razar/src/pages/index.astro", void 0);

const $$file = "/Users/ryan/Desktop/razar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
