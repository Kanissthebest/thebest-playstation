// --- LOGIQUE DU MENU (Sur toutes les pages) ---
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('nav');

// On vérifie que le menu existe sur la page actuelle avant de mettre l'écouteur
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        console.log("Menu cliqué !"); // Pour tester dans la console (F12)
    });
}
// --- LOGIQUE DE LA BOUCLE DE JEUX (Uniquement si la grille existe) ---
const container = document.getElementById('games_container');

if(container){

    const jeux = [
    {titre:"Fc 26", description:"Simulation de football avec mode Compétitif ou Realiste.", image:"images/fc26.jpg", console:"PS4"},
    {titre:"Far Cry 6", description:"Guérilla tropicale pour renverser un dictateur sur une île des Caraïbes.", image:"images/FARCRY_6.jpg", console:"PS4"},
    {titre:"UFC 4", description:"Simulation de MMA réaliste, du combat debout au sol dans l'octogone.", image:"images/ufc-video-game.jpg.webp", console:"PS4"},
    {titre:"The Last of Us II", description:"Survie brutale et récit de vengeance dans un monde post-apocalyptique.", image:"images/The-Last-of-Us-2.jpg", console:"PS4"},
    {titre:"Need for Speed Heat", description:"Courses urbaines légales le jour et poursuites de police la nuit.", image:"images/NFS_heat.jpg", console:"PS4"},
    {titre:"GTA V", description:"Braquages et chaos en monde ouvert à travers trois destins croisés à Los Santos.", image:"images/GTA_5.jpg", console:"PS4"},
    {titre:"Mortal Kombat 11", description:"Combat sanglant avec personnalisation de combattants et manipulation du temps.", image:"images/MK11.png", console:"PS4"},
    {titre:"Spiderman 2", description:"Voltige urbaine avec Peter et Miles face à Venom dans New York.", image:"images/marvels-spider-man-2-ps5.jpeg", console:"PS4"},
    {titre:"God of War", description:"Épopée brutale dans la mythologie nordique d'un père et son fils.", image:"images/God_of_war.jpg", console:"PS4"},
    {titre:"Ghost of Tsunami", description:"Épopée samouraï sublime pour libérer le Japon de l'invasion mongole.", image:"images/GHOST_OF_TSUNAMI.jpg", console:"PS4"},
    {titre:"Assassin's Creed", description:"Infiltration et parkour historique dans un conflit millénaire secret.", image:"images/Assassin's_Creed_Mirage_cover.jpeg", console:"PS4"},
    {titre:"Elden Ring Nightreign", description:"Action-RPG exigeant dans un univers de dark fantasy monumental.", image:"images/elden-ring-nightreign-HD-scaled.jpg", console:"PS4"},
    {titre:"Days Gone", description:"Survie à moto face à des hordes massives de mutants dans l'Oregon.", image:"images/Days_Gone_cover_art.jpg", console:"PS4"},
    {titre:"Basket NBA", description:"Simulation de basketball ultime avec nouveaux modes sociaux et carrière pro.", image:"images/nba.jpg", console:"PS4"},
    {titre:"TEKKEN 7", description:"Duel d'arts martiaux technique centré sur la conclusion du clan Mishima.", image:"images/TEKKEN_7.jpg", console:"PS4"},
    {titre:"WOLONG FALLEN DYNASTY", description:"Action-RPG nerveux façon Soulslike dans une version sombre et démoniaque de la Chine des Trois Royaumes.", image:"images/WOLONG_FALLEN_DYNASTY.jpeg", console:"PS4"},
    {titre:"Red Dead Redemption 2", description:"Aventure ouverte dans le Far West américain à la fin du XIXe siècle.", image:"images/Red_Dead_Redemption_II.jpg", console:"PS4"},
    {titre:"WWE 2K25", description:"Simulation de catch professionnel avec des luttes intenses et des personnages emblématiques.", image:"images/WWE_2K25.webp", console:"PS4"},
];

jeux.forEach(jeu => {
    console.log(jeu)
        const card = `
            <div class="game">
                <img src="${jeu.image}" alt="${jeu.titre}" />
                <h3>${jeu.titre}</h3>
                <p>${jeu.description}</p>
                <p class="console">${jeu.console}</p>
            </div>
        `;
        container.innerHTML += card;
    })
}




