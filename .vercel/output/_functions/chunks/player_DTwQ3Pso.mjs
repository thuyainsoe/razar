import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, f as renderScript, b as createAstro, F as Fragment, e as addAttribute, g as renderHead, h as renderSlot } from './astro/server_rAI1YHAK.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_lLXSjB_e.mjs';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$PlayerTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlayerTable;
  const { playerData } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="overflow-x-auto w-full text-nowrap"> <table class="table-auto w-full border-collapse border border-primary"> <thead> <tr class="bg-primary text-left"> <th class="p-2 sm:p-3 text-sm sm:text-base border border-primary">Country</th> <th class="p-2 sm:p-3 text-sm sm:text-base border border-primary">Ingame Name</th> <th class="p-2 sm:p-3 text-sm sm:text-base border border-primary">Name</th> <th class="p-2 sm:p-3 text-sm sm:text-base border border-primary">Team</th> </tr> </thead> <tbody> ${playerData.map((player, index) => renderTemplate`<tr class="hover:bg-gray-800 transition-all"> <td class="p-2 sm:p-3 text-lg sm:text-xl font-semibold">🇲🇲</td> <td class="p-2 sm:p-3 text-sm sm:text-base font-semibold text-highlight"> ${player.ingame_name} </td> <td class="p-2 sm:p-3 text-white text-sm sm:text-base font-semibold"> ${player.name} </td> <td class="p-2 sm:p-3 text-sm sm:text-base font-semibold flex items-center gap-2"> ${player.team && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": player.team.logo, "width": 24, "height": 24, "alt": `${player.team.name} logo`, "class": "rounded-full" })} <span class="whitespace-nowrap">${player.team.name}</span> ` })}`} </td> </tr>`)} </tbody> </table> </div> ${renderScript($$result, "/Users/ryan/Desktop/razar/src/components/PlayerTable.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ryan/Desktop/razar/src/components/PlayerTable.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo_d.DCrV-88o.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ryan/Desktop/razar/src/images/logo_d.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div x-data="{ open: false }" class="w-full main-container bg-primary flex items-center justify-between h-[70px] py-2 sticky top-0 z-50 shadow-lg transition-shadow duration-300" data-astro-cid-5blmo7yk> <!-- Logo Section --> <div class="flex items-center relative" data-astro-cid-5blmo7yk> <a href="/" class="absolute top-0 left-0 w-full h-full opacity-0" data-astro-cid-5blmo7yk></a> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logo image", "class": "w-[40px] h-[40px] md:w-[60px] md:h-[60px] drop-shadow-lg", "width": 70, "height": 70, "data-astro-cid-5blmo7yk": true })} <span class="font-heading text-2xl tracking-wider" data-astro-cid-5blmo7yk>Razar</span> </div> <!-- Desktop Navigation --> <nav class="hidden md:block" data-astro-cid-5blmo7yk> <ul class="flex gap-8 text-xl font-heading text-text" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk> <a href="/" class="relative hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>
Home
</a> </li> <li data-astro-cid-5blmo7yk> <a href="/players" class="relative hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>
Players
</a> </li> <li data-astro-cid-5blmo7yk> <a href="/heroes" class="relative hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>
Heroes
</a> </li> <li data-astro-cid-5blmo7yk> <a href="/schedule" class="relative hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>
Schedule
</a> </li> </ul> </nav> <!-- Mobile Menu Button --> <button @click="open = !open" class="block md:hidden p-2 text-highlight focus:outline-none focus:ring-2 focus:ring-highlight rounded-lg hover:shadow-glow transition-transform duration-200" aria-label="Open Menu" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-5blmo7yk></path> </svg> </button> <!-- Mobile Navigation --> <div x-show="open" class="fixed top-0 right-0 w-full h-full bg-background z-50 flex md:hidden transform transition-transform duration-500 ease-in-out" data-astro-cid-5blmo7yk> <div class="w-full h-full flex flex-col items-start" data-astro-cid-5blmo7yk> <div class="w-full flex items-center justify-between py-4 px-[20px]" data-astro-cid-5blmo7yk> <div class="flex items-center" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logo image", "class": "w-[40px] h-[40px] md:w-[60px] md:h-[60px] drop-shadow-lg", "width": 70, "height": 70, "data-astro-cid-5blmo7yk": true })} <span class="font-heading text-2xl tracking-wider" data-astro-cid-5blmo7yk>Razar</span> </div> <button @click="open = false" class="p-2 text-highlight focus:outline-none focus:ring-2 focus:ring-highlight rounded-lg hover:shadow-glow transition-transform duration-200" aria-label="Close Menu" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-5blmo7yk></path> </svg> </button> </div> <ul class="flex flex-col gap-4 text-xl font-heading text-text p-[20px]" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk> <a href="/" class="hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>Home</a> </li> <li data-astro-cid-5blmo7yk> <a href="/players" class="hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>Players</a> </li> <li data-astro-cid-5blmo7yk> <a href="/heroes" class="hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>Heroes</a> </li> <li data-astro-cid-5blmo7yk> <a href="/schedule" class="hover:text-highlight transition-all hover:shadow-highlight" data-astro-cid-5blmo7yk>Schedule</a> </li> </ul> </div> </div> </div> `;
}, "/Users/ryan/Desktop/razar/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary text-text pt-[50px]"> <div class="main-container grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Brand Section --> <div> <h3 class="font-heading text-2xl mb-4">Razar</h3> <p class="font-body text-sm mb-6">
Track Player Stats, Hero Info & Match Schedules. Your go-to source for
        tracking pro players, mastering heroes, and following match schedules.
</p> </div> <!-- Quick Links --> <div> <h4 class="font-heading text-lg mb-4">Quick Links</h4> <ul class="space-y-2"> <li> <a href="/about" class="hover:text-highlight transition-colors text-sm">About Us</a> </li> <li> <a href="/privacy" class="hover:text-highlight transition-colors text-sm">Privacy Policy</a> </li> <li> <a href="/terms" class="hover:text-highlight transition-colors text-sm">Terms of Service</a> </li> <li> <a href="/contact" class="hover:text-highlight transition-colors text-sm">Contact Us</a> </li> </ul> </div> <!-- Follow Us Section --> <div> <h4 class="font-heading text-lg mb-4">Follow Us</h4> <ul class="flex space-x-4"> <li> <a href="#" class="bg-highlight p-3 rounded-full text-white flex items-center justify-center hover:bg-orange-500 transition-colors"> <!-- <img src="/icons/youtube.svg" alt="YouTube" class="w-5 h-5" /> --> </a> </li> <li> <a href="#" class="bg-highlight p-3 rounded-full text-white flex items-center justify-center hover:bg-orange-500 transition-colors"> <!-- <img src="/icons/tiktok.svg" alt="TikTok" class="w-5 h-5" /> --> </a> </li> <li> <a href="#" class="bg-highlight p-3 rounded-full text-white flex items-center justify-center hover:bg-orange-500 transition-colors"> <!-- <img src="/icons/facebook.svg" alt="Facebook" class="w-5 h-5" /> --> </a> </li> </ul> </div> <!-- Newsletter Section --> <div> <h4 class="font-heading text-lg mb-4">Subscribe to Our Newsletter</h4> <p class="font-body text-sm mb-4">
Get the latest updates on player stats, hero insights, and upcoming
        matches directly to your inbox.
</p> <form action="/subscribe" method="POST" class="flex flex-col space-y-3"> <input type="email" name="email" placeholder="Enter your email" class="bg-gray-800 p-3 rounded-md text-sm placeholder-gray-400" required> <button type="submit" class="bg-highlight text-white p-3 rounded-md hover:bg-orange-500 transition-all">
Subscribe
</button> </form> </div> </div> <!-- Bottom Footer --> <div class="border-t border-gray-700 mt-8 py-6 text-center"> <p class="text-sm font-body">
&copy; 2024 Razar. All rights reserved. Built with passion for gamers.
</p> </div> </footer>`;
}, "/Users/ryan/Desktop/razar/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Add this in your <head> tag --><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="icon" type="image/png" href="/logo_d.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Razar</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/ryan/Desktop/razar/src/layouts/Layout.astro", void 0);

const myanmarPlayer = [
  {
    name: "Htoo Aung Thit",
    ingame_name: "Alitaaa",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Phone Myint Kyi",
    ingame_name: "Ardam",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Min Swan Kon",
    ingame_name: "Beni",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kyaw Khaung Htut",
    ingame_name: "Benno",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Tain Yan Lin",
    ingame_name: "Bird",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Thet Naing Zaw",
    ingame_name: "Black",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Htoo Htet Kyaw",
    ingame_name: "Blank",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kyaw Thuya",
    ingame_name: "Blink",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Yan Moe Aung",
    ingame_name: "Bloodkikaka",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Thiha Kyaw",
    ingame_name: "Carbon",
    team: {
      name: "Blade Violet",
      logo: "/images/myanmar/team_icon/bv.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hsu Yamin Htet",
    ingame_name: "Cassie",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Wint Yadanar Linn",
    ingame_name: "Cko",
    team: {
      name: "Blade Angels",
      logo: "/images/myanmar/team_icon/ba.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Thuya Aung",
    ingame_name: "DK",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kaung Sett",
    ingame_name: "Daxx",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kyaw Hein Zin",
    ingame_name: "FayYan",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Zaw Thu Hein",
    ingame_name: "Gumi",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Yadanar Hlaing",
    ingame_name: "Hlaing",
    team: {
      name: "Blade Angels",
      logo: "/images/myanmar/team_icon/ba.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Aung Htut Myat",
    ingame_name: "Htut Htut",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kaung Min Khant",
    ingame_name: "J3X",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Nyi Ju No",
    ingame_name: "Juno",
    team: {
      name: "Young Legion",
      logo: "/images/myanmar/team_icon/yl.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Pyae Sone Khant",
    ingame_name: "JustiN",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hsu Labb Nyi Nyi Maung",
    ingame_name: "KELL",
    team: {
      name: "Net Angels",
      logo: "/images/myanmar/team_icon/na.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Pyae Hein Ko",
    ingame_name: "Kenn",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Khant Khant",
    ingame_name: "Khant Khant",
    team: {
      name: "Team Star Boyz",
      logo: "/images/myanmar/team_icon/ts.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Khant Thurein Aung",
    ingame_name: "Khant Thurein",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hein Min Thu",
    ingame_name: "Kid",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Yehtet Sithu",
    ingame_name: "KidX",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hsu Wai Zin",
    ingame_name: "Kuu",
    team: {
      name: "Blade Angels",
      logo: "/images/myanmar/team_icon/ba.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Thet Htar Thinzar",
    ingame_name: "LICCA",
    team: {
      name: "Net Angels",
      logo: "/images/myanmar/team_icon/na.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Thura Pyae Sone",
    ingame_name: "Light",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kaung Min Khant",
    ingame_name: "Lina",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Win Min Htoo",
    ingame_name: "Meow",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Moe Ko Ko",
    ingame_name: "Mok",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Min Ko Ko",
    ingame_name: "Naomi",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hein Arkar Htet",
    ingame_name: "Niko",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Khant Kyaw Zay",
    ingame_name: "OHMYJ3NNIE",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Si Thu Min Htet",
    ingame_name: "Policy",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Wai Phyo Aung",
    ingame_name: "Ps",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Yar Zar Mon",
    ingame_name: "Px7",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Arkar Bhone Pyae",
    ingame_name: "Royal Milk",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Swan Htet Aung",
    ingame_name: "Ruby DD",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Htet Wai Kywal",
    ingame_name: "SAYU",
    team: {
      name: "Net Angels",
      logo: "/images/myanmar/team_icon/na.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kaung Htet Hein",
    ingame_name: "Shadow",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hlwan Moe Htet",
    ingame_name: "Shine CG",
    team: {
      name: "9K EsportsxMG",
      logo: "/images/myanmar/team_icon/9k.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Phyo Kyaw Hlaing",
    ingame_name: "Shinshinkick",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Pyae Sone",
    ingame_name: "Silent",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kaung Khant Min",
    ingame_name: "Simple",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Htet Linn Hlyan Aung",
    ingame_name: "Stitch",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Ye Htut Lwin",
    ingame_name: "Tychon",
    team: {
      name: "Young Legion",
      logo: "/images/myanmar/team_icon/yl.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Van Maung",
    ingame_name: "VI VI",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Khant Paing Soe Htet",
    ingame_name: "Vam Vam",
    team: {
      name: "Team Star Boyz",
      logo: "/images/myanmar/team_icon/ts.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Ye Man Wint",
    ingame_name: "XAM",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Thi Ha Aung",
    ingame_name: "Xiao Yan",
    team: {
      name: "Team Star Boyz",
      logo: "/images/myanmar/team_icon/ts.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hein Zaw Aung",
    ingame_name: "Xidde",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kan Kaung",
    ingame_name: "Yato",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hein Htet Oo",
    ingame_name: "Ying",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Kyaw Zin Bo",
    ingame_name: "Zippx",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  },
  {
    name: "Hein Min Khant",
    ingame_name: "yellowflash",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png"
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲"
    }
  }
];
const playerData = [...myanmarPlayer];

export { $$PlayerTable as $, $$Layout as a, playerData as p };
