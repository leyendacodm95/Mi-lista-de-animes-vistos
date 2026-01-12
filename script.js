// --- 1. LISTA DE PELÍCULAS (Nombres optimizados) ---
const misPeliculas = [
    "I want to eat your pancreas",
    "The Cat Returns",             
    "Howl's Moving Castle",        
    "A Silent Voice",              
    "Perfect Blue",
    "Your Name.",                  
    "Suzume",
    "Uchiage Hanabi",              // Fireworks
    "The Garden of Words",
    "My Oni Girl",                 
    "To Me, The One Who Loved You", 
    "To Every You I've Loved Before", 
    "The Secret World of Arrietty",
    "Over the Sky",                
    "Josee, the Tiger and the Fish" // La moví aquí porque es película
];

// --- 2. LISTA DE SERIES (Nombres corregidos para la API) ---
const misSeries = [
    // --- LISTA GENERAL CORREGIDA ---
    "Komi Can't Communicate",
    "Mysterious Girlfriend X", // Nazo no Kanojo X
    "School Rumble",
    "School Days",
    "Onegai Teacher",
    "One Piece",
    "Naruto",
    "Naruto Shippuden",
    "Dragon Ball",
    "Chobits",
    "Saikano",
    "Oshi no Ko",
    "Clannad",
    "Spy x Family",
    "Slam Dunk",
    "Yu-Gi-Oh!",
    "My Dress-Up Darling", // Sono Bisque Doll
    "Domestic Girlfriend", // Domestic na Kanojo
    "Hokkaido Gals Are Super Adorable!", // Dosanko Gal
    "The Dangers in My Heart", // Boku no Kokoro
    "Mashle",
    "One Punch Man",
    "Farming Life in Another World", // Isekai Nonbiri Nouka
    "Chainsaw Man",
    "Girlfriend, Girlfriend", // Kanojo mo Kanojo
    "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You",
    "Yosuga no Sora",
    "The Kingdoms of Ruin",
    "Horimiya",
    "Ya Boy Kongming!", // Paripi Koumei
    "Kotoura-san",
    "My Tiny Senpai", // Uchi no Kaisha...
    "Kaguya-sama: Love is War",
    "Say I Love You", // Suki-tte Ii na yo
    "How Heavy Are the Dumbbells You Lift?",
    "The Seven Deadly Sins", // Nanatsu no Taizai
    "Yamada-kun and the Seven Witches",
    "Rent-a-Girlfriend", // Kanojo Okarishimasu
    "Golden Boy",
    "Our Dating Story: The Experienced You and the Inexperienced Me",
    "Fuuka",
    "7th Time Loop",
    "Zom 100: Bucket List of the Dead",
    "Undead Unluck",
    "World's End Harem",
    "A Sign of Affection", // Yubisaki to Renren
    "The Quintessential Quintuplets", // Go-Toubun
    "Don't Toy with Me, Miss Nagatoro",
    "My Love Story!!", // Ore Monogatari
    "Rascal Does Not Dream of Bunny Girl Senpai",
    "More than a Married Couple, but Not Lovers",
    "Demon Slayer: Kimetsu no Yaiba",
    "Tomo-chan Is a Girl!",
    "The Angel Next Door Spoils Me Rotten",
    "Tsuredure Children",
    "Bottom-Tier Character Tomozaki",
    "Miss Kobayashi's Dragon Maid",
    "Classroom of the Elite",
    "The Apothecary Diaries",
    "Solo Leveling",
    "The Girl Downstairs", // Aishang ta de liyou (Donghua, a veces Jikan no lo tiene, veremos)
    "Love After World Domination",
    "Doctor Elise",
    "Violet Evergarden",
    "Villainess Level 99",
    "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
    "86",
    "Wotakoi: Love is Hard for Otaku",
    "Tsukimichi: Moonlit Fantasy",
    "Gushing over Magical Girls", // Mahou Shoujo ni Akogarete
    "And you thought there is never a girl online?", // Netoge no Yome
    "Kiss Him, Not Me", // Watashi ga Motete Dousunda
    "My Happy Marriage",
    "Jujutsu Kaisen",
    "Spice and Wolf: Merchant Meets the Wise Wolf", // Versión 2024
    "Grandpa and Grandma Turn Young Again",
    "Studio Apartment, Good Lighting, Angel Included",
    "A Condition Called Love",
    "Frieren: Beyond Journey's End",
    "Noragami",
    "That Time I Got Reincarnated as a Slime",
    "Shikimori's Not Just a Cutie",
    "Orange",
    "Bocchi the Rock!",
    "Unnamed Memory",
    "Shangri-La Frontier",
    "Death Note",
    "Code Geass",
    "Konosuba",
    "Attack on Titan",
    "Your Lie in April",
    "Overlord",
    "Mushoku Tensei: Jobless Reincarnation",
    "I Got a Cheat Skill in Another World",
    "How a Realist Hero Rebuilt the Kingdom",
    "The Girl I Like Forgot Her Glasses",
    "Uncle from Another World", // Isekai Ojisan
    "Re:ZERO",
    "I'm Quitting Heroing",
    "My Love Story with Yamada-kun at Lv999",
    "The Pet Girl of Sakurasou",
    "Re:Monster",
    "Delicious in Dungeon", // Dungeon Meshi
    "Chillin' in Another World with Level 2 Super Cheat Powers",
    "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
    "Saga of Tanya the Evil",
    "Alya Sometimes Hides Her Feelings in Russian",
    "The Strongest Magician in the Demon Lord's Army was a Human",
    "My Deer Friend Nokotan", // Shikanoko Nokonoko
    "The Ossan Newbie Adventurer",
    "2.5 Dimensional Seduction", // 2.5 jigen no ririsa
    "A Journey Through Another World",
    "Failure Frame",
    "Pseudo Harem",
    "Love Is Indivisible by Twins",
    "No Longer Allowed in Another World",
    "The Magical Girl and the Evil Lieutenant Used to Be Archenemies",
    "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill",
    "Recovery of an MMO Junkie",
    "My Unique Skill Makes Me OP Even at Level 1",
    "VTuber Legend",
    "Fire Force",
    "The Fruit of Evolution",
    "In Another World With My Smartphone",
    "Astro Note",
    "Drug Store in Another World",
    "Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?", // Okaasan Online
    "Food Wars!", // Shokugeki no Soma
    "The Wrong Way to Use Healing Magic",
    "Neon Genesis Evangelion",
    "Darling in the FranXX",
    "Soul Eater",
    "The Hidden Dungeon Only I Can Enter",
    "Tales of Wedding Rings",
    "Classroom for Heroes",
    "Skeleton Knight in Another World",
    "I'm the Villainess, So I'm Taming the Final Boss",
    "Wistoria: Wand and Sword",
    "Vermeil in Gold", // Kinsou no Vermeil
    "Arifureta",
    "ReLIFE",
    "How Not to Summon a Demon Lord",
    "Reincarnated as a Sword",
    "Grand Blue Dreaming",
    "Is It Wrong to Try to Pick Up Girls in a Dungeon?", // Danmachi
    "Loner Life in Another World",
    "You Are Ms. Servant",
    "Dandadan",
    "The Healer Who Was Banished From His Party",
    "The Rising of the Shield Hero",
    "The Eminence in Shadow",
    "Goblin Slayer",
    "My One-Hit Kill Sister",
    "Black Summoner",
    "Anohana: The Flower We Saw That Day",
    "Am I Actually the Strongest?",
    "Masamune-kun's Revenge",
    "Banished from the Hero's Party",
    "So I'm a Spider, So What?",
    "My Daughter Left the Nest and Returned an S-Rank Adventurer",
    "The Misfit of Demon King Academy",
    "Goodbye, Dragon Life",
    "I'll Become a Villainess Who Goes Down in History",
    "The Most Notorious Talker Runs the World's Greatest Clan",
    "Let This Grieving Soul Retire",
    "Shimoneta",
    "Death March to the Parallel World Rhapsody",
    "Parallel World Pharmacy",
    "The Genius Prince's Guide to Raising a Nation Out of Debt",
    "High School of the Dead",
    "Erased",
    "I Parry Everything",
    "Welcome to Demon School! Iruma-kun",
    "The Banished Former Hero Lives as He Pleases",
    "Wind Breaker",
    "The Future Diary", // Mirai Nikki
    "I'm a Behemoth, an S-Ranked Monster",
    "Possibly the Greatest Alchemist of All Time",
    "Headhunted to Another World", // Salaryman...
    "Beast Tamer",
    "Saving 80,000 Gold in Another World for My Retirement",
    "Chillin' in My 30s after Getting Fired from the Demon King's Army",
    "Even Given the Worthless 'Appraiser' Class, I'm Actually the Strongest", // Manga/LN? Veremos si hay anime
    "Zenshu",
    "The Great Cleric",
    "From Bureaucrat to Villainess", // Nota: Puede que no tenga anime aún
    "My Isekai Life",
    "Welcome to Japan, Ms. Elf!",
    "The Red Ranger Becomes an Adventurer in Another World",
    "An Archdemon's Dilemma: How to Love Your Elf Bride",
    "The Legendary Hero Is Dead!",
    "Cautious Hero",
    "Monster Musume: Everyday Life with Monster Girls",
    "I May Be a Guild Receptionist", // Anime anunciado para 2024/25
    "Cyberpunk: Edgerunners",
    "Kimi ni Todoke",
    "Death Parade",
    "Oresuki",
    "My Little Monster", // Tonari no Kaibutsu-kun
    "I Left my A-Rank Party to Help my Former Students", // Manga?
    "My Next Life as a Villainess: All Routes Lead to Doom!",
    "GATE",
    "Dr. STONE",
    "Koi Kaze",
    "After the Rain",
    "Sweetness & Lightning",
    "Oreimo",
    "The Café Terrace and Its Goddesses",
    "Kemono Michi: Rise Up",
    "Trapped in a Dating Sim",
    "Akame ga Kill!",
    "Orb: On the Movements of the Earth",
    "Gurren Lagann",
    "Summoned to Another World for a Second Time",
    "Suppose a Kid from the Last Dungeon Boonies Moved to a Starter Town",
    "Gamers!",
    "The Unaware Atelier Meister", // Manga?
    "The Gorilla God's Go-To Girl", // Manga?
    "Kowloon Generic Romance", // Manga
    "The Brilliant Healer's New Life in the Shadows", // Manga/LN
    "I'm the Evil Lord of an Intergalactic Empire!",
    "The Weakest Tamer Began a Journey to Pick Up Trash",
    "The Daily Life of a Middle-Aged Online Shopper in Another World",
    "From Old Country Bumpkin to Master Swordsman",
    "Vivy -Fluorite Eye's Song-",
    "Sasaki and Peeps",
    "Restaurant to Another World",
    "No Game No Life",
    "I Somehow Got Strong By Raising Skills Related To Farming",
    "Sankarea",
    "The Greatest Demon Lord Is Reborn as a Typical Nobody",
    "Osamake: Romcom Where The Childhood Friend Won't Lose",
    "Uma Musume: Pretty Derby",
    "Handyman Saitou in Another World",
    "Go! Go! Loser Ranger!", // Sentai Daishikkaku
    "Skip and Loafer",
    "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
    "My First Girlfriend is a Gal", // Hajimete no Gal
    "Takopi's Original Sin", // Manga
    "Watari-kun's is about to collapse", // Manga
    "The Shy Hero and the Assassin Princesses", // Manga/LN
    "Scooped Up by an S-Rank Adventurer", // Manga/LN
    "Apocalypse Bringer Mynoghra", // LN
    "Gachiakuta", // Anime anunciado
    "Witch Watch", // Anime anunciado
    "Uglymug, Epicfighter", // Manga
    "Clevatess", // Anime anunciado
    "Welcome to the Outcast's Restaurant",
    "The Water Magician", // Manga
    "Sweet Reincarnation",
    "Seirei Gensouki: Spirit Chronicles",
    "Life With an Ordinary Guy Who Reincarnated Into a Total Fantasy Knockout",
    "The 8th Son? Are You Kidding Me?",
    "Nukitashi", // Anime anunciado
    "Black Clover",
    "Why Raeliana Ended Up at the Duke's Mansion",
    "A Gatherer's Adventure in Isekai", // Manga/LN
    "My Hero Academia",
    "May I Ask for One Final Thing?", // Manga
    "In the Land of Leadale",
    "Kono Kaisha ni Suki na Hito ga Imasu", // Manga/Anime?
    "My Status as an Assassin Obviously Exceeds the Hero's",
    "The Faraway Paladin",
    "Honey Lemon Soda",
    "The Unwanted Undead Adventurer",
    "Elfen Lied",
    "Reborn to Master the Blade",
    "My Clueless First Friend", // A veces confundido con Awkward Senpai
    "Plastic Memories",
    "Parasyte -the maxim-",
    "Prison School",
    "Eromanga Sensei",
    "Chained Soldier", // Mato Seihei no Slave
    "Mugen Gacha", // Manga
    "3D Kanojo: Real Girl",
    "Golden Time",
    "Wise Man's Grandchild",
    "I'm Standing on a Million Lives",
    "By the Grace of the Gods",
    "Ascendance of a Bookworm",
    "Monster Girl Doctor",
    "Re:CREATORS",
    "Dagashi Kashi",
    "Tada Never Falls in Love",
    "Senryu Girl",
    "Rokudo's Bad Girls",
    "Actually, I Am...", // Jitsu wa Watashi wa
    "The Dreaming Boy is a Realist"
];

const modal = document.getElementById('modal');
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// --- CARGA ROBUSTA DE PELÍCULAS ---
async function cargarSeccionPeliculas() {
    const contenedorId = 'movies-wrapper';
    const wrapper = document.getElementById(contenedorId);
    if (!wrapper) return;

    const section = document.getElementById('section-movies');
    const swiperEl = section.querySelector('.swiper');
    const swiperInstance = iniciarSwiper(swiperEl, section, true);

    console.log("🎬 Iniciando películas...");

    for (const nombre of misPeliculas) {
        await cargarItemRobusto(nombre, 'movie', swiperInstance);
    }
}

// --- CARGA ROBUSTA DE SERIES ---
async function cargarSeccionSeries() {
    const contenedorId = 'series-wrapper';
    const wrapper = document.getElementById(contenedorId);
    if (!wrapper) return;

    const section = document.getElementById('section-series');
    const swiperEl = section.querySelector('.swiper');
    const swiperInstance = iniciarSwiper(swiperEl, section, true);

    console.log(`📺 Iniciando carga masiva de ${misSeries.length} series...`);
    
    for (const nombre of misSeries) {
        // Usamos 'tv' para series, pero si falla podríamos intentar sin filtro
        // Nota: Dejé 'tv' porque tu lista es 99% anime de TV. 
        // Los Mangas que no tienen anime darán error 404 (Not found) y se saltarán.
        await cargarItemRobusto(nombre, 'tv', swiperInstance);
    }
    console.log("✅ Carga de series finalizada.");
}

// --- FUNCIÓN MAESTRA DE CARGA CON REINTENTOS ---
async function cargarItemRobusto(nombre, tipo, swiperInstance) {
    let cargado = false;
    let intentos = 0;
    const maxIntentos = 5; 

    while (!cargado && intentos < maxIntentos) {
        try {
            // Encodeamos para caracteres especiales
            const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(nombre)}&type=${tipo}&limit=1`;
            const response = await fetch(url);

            // ERROR 429: DEMASIADAS PETICIONES (Wait & Retry)
            if (response.status === 429) {
                intentos++;
                const tiempoEspera = 2500; // 2.5 seg de castigo
                console.warn(`⏳ API saturada (${nombre}). Esperando ${tiempoEspera}ms...`);
                await sleep(tiempoEspera);
                continue; 
            }

            if (!response.ok) {
                // Si es otro error (404), simplemente lo saltamos
                cargado = true; 
                return;
            }

            const data = await response.json();

            if (data.data && data.data.length > 0) {
                const anime = data.data[0];
                
                const div = document.createElement('div');
                div.className = 'swiper-slide slide-entrada';
                div.innerHTML = generarSlideInner(anime);
                div.addEventListener('click', () => abrirModal(anime));
                
                swiperInstance.appendSlide(div);
                swiperInstance.update();
                swiperInstance.navigation.update();
                
                cargado = true;
            } else {
                console.warn(`❌ No encontrado: "${nombre}"`);
                cargado = true; 
            }
            
            // Pausa exitosa (800ms para ir seguro)
            await sleep(800); 

        } catch (error) {
            console.error(`Error con ${nombre}:`, error);
            cargado = true; 
        }
    }
}

// --- UTILIDADES ---

function generarSlideInner(anime) {
    const imgUrl = anime.images.jpg.large_image_url;
    const titulo = anime.title_english || anime.title;
    return `
        <div class="slide-title" title="${titulo}"><span>${titulo}</span></div>
        <div class="slide-img-wrapper">
            <img src="${imgUrl}" alt="${titulo}" loading="lazy">
        </div>
    `;
}

function iniciarSwiper(swiperElement, sectionParent, autoPlay) {
    const nextBtn = sectionParent.querySelector('.next-btn');
    const prevBtn = sectionParent.querySelector('.prev-btn');

    return new Swiper(swiperElement, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: false, 
        autoplay: autoPlay ? {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        } : false,
        observer: true, 
        observeParents: true,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
    });
}

function abrirModal(anime) {
    document.getElementById('modal-title').innerText = anime.title;
    document.getElementById('modal-synopsis').innerText = anime.synopsis || "Sinopsis no disponible.";
    document.getElementById('modal-img').src = anime.images.jpg.large_image_url;
    document.getElementById('modal-score').innerText = `⭐ ${anime.score || 'N/A'}`;
    document.getElementById('modal-year').innerText = `📅 ${anime.year || '?'}`;
    document.getElementById('modal-type').innerText = `📺 ${anime.type || 'Anime'}`;
    modal.style.display = 'flex';
}

document.querySelector('.close-btn').addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target == modal) modal.style.display = 'none'; });

async function iniciarApp() {
    await cargarSeccionPeliculas();
    // Esperamos un poco antes de empezar la carga masiva de series
    await sleep(1000); 
    cargarSeccionSeries();
}

iniciarApp();