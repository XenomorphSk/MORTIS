// script.js - Versão corrigida com incremento da noite
const monologue = `"ELES ACHAM QUE EU SOU LOUCO. 'O LUIS PIROU DE VEZ', DIZEM OS MEUS COLEGAS DESENVOLVEDORES. 'ELE PASSOU TEMPO DEMAIS ISOLADO CODANDO NA INTERNET'. TOLOS... ELES NAO CONSEGUEM VER O OBVIO. ELES NAO SABEM QUEM REALMENTE FINANCIA AS GRANDES BIG TECHS, QUEM DITA AS REGRAS DO FEDERAL RESERVE, QUEM MANIPULA A MIDIA INTERNACIONAL PARA MANTER A POPULACAO CEGA. OS ROTHSCHILDS... A ELITE DE HOLLYWOOD... A CABALA GLOBALISTA QUE CONTROLA CADA CENTAVO QUE CIRCULA NESTE PLANETA MISERAVEL.

EU DESCOBRI OS CODIGOS OCULTOS DELES. EU EXPUS A VERDADE NOS MEUS FORUNS. E QUAL FOI A RESPOSTA DA ELITE? ELES NAO MANDARAM A POLICIA, NEM ADVOGADOS. ELES ABRIRAM OS PORTÕES DO PRÓPRIO INFERNO E ENVIARAM UM COBRADOR DEMONIACO PARA ARRANCAR A MINHA ALMA E QUEIMAR OS MEUS HDS.

O DEMONIO ESTA NA MINHA PORTA. A POSSUICAO E IMINENTE. O GRANDE RESET DELES COMECOU PARA MIM. A MINHA UNICA SALVACAO SAO ESTES MANUSCRITOS ANTIGOS DE EXORCISMO QUE ENCONTREI NA DEEP WEB. EU PRECISO DIGITAR CADA PALAVRA, CADA CARACTERE PERFEITAMENTE, QUEBRANDO A CRIPTOGRAFIA INFERNAL ANTES QUE ESSA ABERRACAO ME ALCANCE... E ME CALE PARA SEMPRE.

QUE DEUS ME PERDOE... E QUE OS BANCOS GLOBAIS VAO PARA O INFERNO!"`;

// 45+ Falas de exorcismo aleatórias
const exorcisms = [
    "VADE RETRO SATANA!",
    "IPSE VENENA BIBAS!",
    "CRUX SACRA SIT MIHI LUX!",
    "NON DRACO SIT MIHI DUX!",
    "IN NOMINE PATRIS, ET FILII, ET SPIRITUS SANCTI.",
    "EXORCIZO TE, IMMUNDISSIME SPIRITUS!",
    "RECEDE ERGO, PRAEDO.",
    "SANCTE MICHAEL ARCHANGELE, DEFENDE NOS.",
    "DOMINE, EXAUDI ORATIONEM MEAM.",
    "ET CLAMOR MEUS AD TE VENIAT.",
    "DEUS, IN ADIUTORIUM MEUM INTENDE.",
    "GLORIA PATRI, ET FILIO, ET SPIRITUI SANCTO.",
    "SICUT ERAT IN PRINCIPIO, ET NUNC, ET SEMPER.",
    "ET IN SAECULA SAECULORUM. AMEN.",
    "ECCE CRUCEM DOMINI! FUGITE, PARTES ADVERSAE!",
    "VICIT LEO DE TRIBU IUDA, RADIX DAVID.",
    "ALLELUIA! ALLELUIA! ALLELUIA!",
    "EU TE EXORCISO, ESPIRITO IMUNDO!",
    "SAI DA CASA DO SENHOR, DEMONIO!",
    "PELO PODER DE CRISTO, EU TE ORDENO!",
    "FOGO DO ESPIRITO SANTO, PURIFICA ESTE LUGAR!",
    "SANGUE DE CRISTO, TEM PODER SOBRE TI!",
    "TODA LEGIAO, DEIXAI ESTE CORPO!",
    "EM NOME DE JESUS, EU TE AMARRO!",
    "VOCE NAO TEM PODER AQUI, SATANAS!",
    "O SENHOR E MEU PASTOR, NADA ME FALTARA!",
    "AINDA QUE EU ANDE PELO VALE DA SOMBRA DA MORTE, NAO TEMEREI MAL NENHUM!",
    "POIS TU ESTAS COMIGO, TUA VARA E TEU CAJADO ME CONSOLAM!",
    "PREPARAS UMA MESA PARA MIM NA PRESENCA DOS MEUS INIMIGOS!",
    "FUGITE, SATANA!",
    "APARECE, DEMONIO! VOU TE DERROTAR!",
    "PELO SANGUE DE CRISTO, CAIA POR TERRA!",
    "EU TE AMARRO EM NOME DE JESUS!",
    "QUE O FOGO DO ESPIRITO TE CONSUMA!",
    "VOCE E DERROTADO, SATANAS!",
    "CRISTO VENCEU, CRISTO REINA!",
    "O INFERNO NAO PREVALECERA!",
    "EU TE ORDENO: CALA-TE E SAIA!",
    "ESSA CASA E SAGRADA, DEMONIO!",
    "MARANATHA!",
    "ABBA, PAI!",
    "ELOI, ELOI, LAMA SABACHTHANI?",
    "AGIOS O THEOS, AGIOS ISCHYROS, AGIOS ATHANATOS!",
    "KYRIE ELEISON! CHRISTE ELEISON!",
    "EU TE EXORCISO, ESPIRITO MALIGNO, EM NOME DO PAI, DO FILHO E DO ESPIRITO SANTO!",
    "QUE O PODER DE CRISTO TE EXPULSE DESTE LUGAR PARA TODO O SEMPRE!",
    "PELO INTERCESSAO DE NOSSA SENHORA, DERRUBO TUAS FORTALEZAS!",
    "COM O ESCUDO DA FE, EU REPELO TODAS AS TUAS SETAS INFLAMADAS!",
    "A GRACA DE NOSSO SENHOR JESUS CRISTO ESTEJA CONOSCO, E O INIMIGO FUGIRA!"
];

// Mapeamento de caracteres com acento para sem acento
const normalizeMap = {
    'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'ä': 'a',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
    'ó': 'o', 'ò': 'o', 'õ': 'o', 'ô': 'o', 'ö': 'o',
    'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
    'ç': 'c',
    'Á': 'A', 'À': 'A', 'Ã': 'A', 'Â': 'A', 'Ä': 'A',
    'É': 'E', 'È': 'E', 'Ê': 'E', 'Ë': 'E',
    'Í': 'I', 'Ì': 'I', 'Î': 'I', 'Ï': 'I',
    'Ó': 'O', 'Ò': 'O', 'Õ': 'O', 'Ô': 'O', 'Ö': 'O',
    'Ú': 'U', 'Ù': 'U', 'Û': 'U', 'Ü': 'U',
    'Ç': 'C'
};

function normalizeChar(char) {
    return normalizeMap[char] || char;
}

function compareChars(char1, char2) {
    const n1 = normalizeChar(char1);
    const n2 = normalizeChar(char2);
    return n1.toLowerCase() === n2.toLowerCase();
}

const jumpscareMessages = [
    "O CHORO DO INFERNO",
    "ALMA CONDENADA",
    "O BERCO VAZIO",
    "CHORO ETERNO",
    "SANGUE DE INOCENTE",
    "O PRIMEIRO PECADO",
    "ALMA PERDIDA",
    "O CHORO DA MORTE",
    "MATERNIDADE MALDITA",
    "O FIM DA INOCENCIA",
    "VOZES DO ALEM",
    "O VENTRE VAZIO",
    "SEMENTE DO MAL",
    "PROLE MALDITA",
    "O CHORO QUE NAO CESA"
];

// --- SISTEMA DE SAVE ---
const SAVE_KEY = 'mortis_save_data';

// --- ITENS DA LOJA ---
const shopItems = [
    {
        id: 'moedas',
        icon: '🪙',
        name: 'MOEDAS',
        desc: 'Cada ritual completado, o demonio recua o DOBRO',
        effect: 'double_recuo'
    },
    {
        id: 'crucifixo',
        icon: '✝️',
        name: 'CRUCIFIXO',
        desc: 'Demonio 10% mais lento',
        effect: 'slow_10'
    },
    {
        id: 'togas',
        icon: '👘',
        name: 'TOGAS',
        desc: 'Vida extra: se encostar, regride a metade da barra',
        effect: 'extra_life'
    },
    {
        id: 'biblia',
        icon: '📖',
        name: 'BIBLIA',
        desc: 'Anula 3 erros de digitacao',
        effect: 'ignore_errors'
    },
    {
        id: 'batata_frita',
        icon: '🍟',
        name: 'BATATA FRITA',
        desc: 'Aumenta o tamanho da barra em 15%',
        effect: 'barra_15'
    },
    {
        id: 'adaga',
        icon: '🗡️',
        name: 'ADAGA',
        desc: 'Demonio espera 10s antes de comecar a andar',
        effect: 'delay_10s'
    }
];

// --- VARIÁVEIS DO JOGO ---
let currentSentence = "";
let typedIndex = 0;
let score = 0;
let demonPosition = 0;
let gameInterval;
let isPlaying = false;
let baseSpeed = 0.4;
let isHurtAnimating = false;
let lastExorcismIndex = -1;

// Atributos do jogador
let playerAttributes = {
    double_recuo: false,
    slow_10: false,
    extra_life: false,
    extra_life_used: false,
    ignore_errors: 0,
    barra_15: false,
    delay_10s: false
};

// Sistema de Noites
let currentNight = 1;
const MAX_NIGHTS = 5;
const RITUALS_PER_NIGHT = 7;
let ritualsCompletedThisNight = 0;
let totalRitualsGlobal = 0;
let gameCompleted = false;
let barMax = 86;
let startDelay = 0;
let demonSpeed = 0.4;

// Áudio
let audioElement = null;
let isAudioReady = false;
let audioEnabled = false;
let babyCryAudio = null;
let babyCryTimeout = null;
let jumpscareTimeout = null;
let babyCryInterval = null;
let stormAudio = null;
let monologueAudio = null;
let monologueTypingInterval = null;

// Áudios do Luis
let luisAudios = [];
let luisAudioTimeout = null;
let lastLuisAudioIndex = -1;

// Elementos
const textDisplay = document.getElementById("text-to-type");
const demonElement = document.getElementById("demon");
const possessionBar = document.getElementById("possession-bar");
const scoreCounter = document.getElementById("score-counter");
const nightCounter = document.getElementById("night-counter");
const ritualCounter = document.getElementById("ritual-counter");
const container = document.getElementById("game-container");
const deadlineText = document.getElementById("deadline-text");
const volumeControl = document.getElementById("volume-control");
const volumeLabel = document.getElementById("volume-label");
const luisElement = document.getElementById("luis");
const jumpscareOverlay = document.getElementById("jumpscare-overlay");
const jumpscareText = document.getElementById("jumpscare-text");

// Elementos do Menu
const menuScreen = document.getElementById("menu-screen");
const monologueScreen = document.getElementById("monologue-screen");
const monologueText = document.getElementById("monologue-text");
const monologueCursor = document.getElementById("monologue-cursor");
const monologueButtonContainer = document.getElementById("monologue-button-container");
const skipButton = document.querySelector('.skip-button');
const continueBtn = document.getElementById('continue-btn');

// Elementos da Loja
const shopScreen = document.getElementById("shop-screen");
const shopItemsContainer = document.getElementById("shop-items");

// Elementos das Telas
const nightCompleteScreen = document.getElementById("night-complete-screen");
const gameCompleteScreen = document.getElementById("game-complete-screen");

// --- FUNÇÃO COPIAR ETH ---
function copyEthAddress() {
    const address = "0xdc34CFc0FD65BDe8Cb16be7010d6215B1d638a46";
    navigator.clipboard.writeText(address).then(() => {
        const btn = document.querySelector('.eth-copy-btn');
        const originalText = btn.textContent;
        btn.textContent = '✅ COPIADO!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(() => {
        alert('ETH Address: ' + address);
    });
}

// --- FUNÇÕES DO MENU ---
function newGame() {
    localStorage.removeItem(SAVE_KEY);
    playerAttributes = {
        double_recuo: false,
        slow_10: false,
        extra_life: false,
        extra_life_used: false,
        ignore_errors: 0,
        barra_15: false,
        delay_10s: false
    };
    currentNight = 1;
    ritualsCompletedThisNight = 0;
    totalRitualsGlobal = 0;
    gameCompleted = false;
    barMax = 86;
    startDelay = 0;
    demonSpeed = 0.4;
    showMonologue();
}

function continueGame() {
    const save = getSaveData();
    if (save) {
        loadSaveData();
        if (totalRitualsGlobal > 0) {
            if (ritualsCompletedThisNight >= RITUALS_PER_NIGHT) {
                showShop();
            } else {
                startGame();
            }
        } else {
            showMonologue();
        }
    }
}

// --- SKIP MONÓLOGO ---
function skipMonologue() {
    console.log('⏭ Pulando monólogo...');
    
    if (monologueTypingInterval) {
        clearTimeout(monologueTypingInterval);
        monologueTypingInterval = null;
    }
    
    if (monologueAudio && audioEnabled) {
        monologueAudio.pause();
        monologueAudio.currentTime = 0;
    }
    
    monologueText.textContent = monologue;
    monologueCursor.style.display = 'none';
    
    if (skipButton) {
        skipButton.style.display = 'none';
    }
    
    monologueButtonContainer.classList.remove('hidden');
}

// --- MOSTRA MONÓLOGO ---
function showMonologue() {
    menuScreen.classList.add('hidden');
    monologueScreen.classList.remove('hidden');
    
    if (skipButton) {
        skipButton.style.display = 'block';
    }
    
    if (stormAudio && audioEnabled) {
        stormAudio.pause();
        stormAudio.currentTime = 0;
    }
    
    typeMonologue();
}

// --- MONÓLOGO ---
function typeMonologue() {
    let charIndex = 0;
    const text = monologue;
    let displayText = "";
    let audioFinished = false;
    
    if (monologueAudio && audioEnabled) {
        monologueAudio.volume = volumeControl.value / 100;
        monologueAudio.play().catch(err => {
            console.warn('Erro ao tocar monólogo:', err);
        });
        
        monologueAudio.addEventListener('ended', function onAudioEnd() {
            audioFinished = true;
            monologueAudio.removeEventListener('ended', onAudioEnd);
            if (monologueButtonContainer.classList.contains('hidden')) {
                monologueButtonContainer.classList.remove('hidden');
                monologueCursor.style.display = 'none';
                if (skipButton) skipButton.style.display = 'none';
            }
        });
    }
    
    function typeNextChar() {
        if (charIndex < text.length) {
            displayText += text[charIndex];
            monologueText.textContent = displayText;
            charIndex++;
            
            let delay = 25 + Math.random() * 35;
            if (text[charIndex - 1] === '.' || text[charIndex - 1] === '!' || text[charIndex - 1] === '?') {
                delay = 300;
            } else if (text[charIndex - 1] === ',') {
                delay = 150;
            } else if (text[charIndex - 1] === '\n') {
                delay = 400;
            }
            
            const container = document.querySelector('.monologue-container');
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
            
            monologueCursor.style.display = 'inline-block';
            
            monologueTypingInterval = setTimeout(typeNextChar, delay);
        } else {
            monologueCursor.style.display = 'none';
            if (audioFinished) {
                monologueButtonContainer.classList.remove('hidden');
                if (skipButton) skipButton.style.display = 'none';
            } else {
                setTimeout(() => {
                    if (!monologueButtonContainer.classList.contains('hidden')) return;
                    monologueButtonContainer.classList.remove('hidden');
                    if (skipButton) skipButton.style.display = 'none';
                }, 8000);
            }
        }
    }
    
    typeNextChar();
}

// --- LOJA ---
function goToShop() {
    nightCompleteScreen.classList.add('hidden');
    // INCREMENTA a noite e RESETA os rituais
    currentNight++;
    ritualsCompletedThisNight = 0;
    saveGameData();
    showShop();
}

function showShop() {
    shopScreen.classList.remove('hidden');
    renderShopItems();
}

function renderShopItems() {
    const shuffled = [...shopItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selected = shuffled.slice(0, 3);
    
    shopItemsContainer.innerHTML = '';
    selected.forEach(item => {
        const div = document.createElement('div');
        div.className = 'shop-item';
        div.innerHTML = `
            <span class="item-icon">${item.icon}</span>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
        `;
        div.onclick = () => buyItem(item);
        shopItemsContainer.appendChild(div);
    });
}

function buyItem(item) {
    switch(item.effect) {
        case 'double_recuo':
            playerAttributes.double_recuo = true;
            break;
        case 'slow_10':
            playerAttributes.slow_10 = true;
            break;
        case 'extra_life':
            playerAttributes.extra_life = true;
            playerAttributes.extra_life_used = false;
            break;
        case 'ignore_errors':
            playerAttributes.ignore_errors = 3;
            break;
        case 'barra_15':
            playerAttributes.barra_15 = true;
            barMax = 86 * 1.15;
            break;
        case 'delay_10s':
            playerAttributes.delay_10s = true;
            break;
    }
    
    saveGameData();
    shopScreen.classList.add('hidden');
    startGame();
}

// --- FUNÇÃO PARA PEGAR EXORCISMO ALEATÓRIO ---
function getRandomExorcism() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * exorcisms.length);
    } while (randomIndex === lastExorcismIndex && exorcisms.length > 1);
    
    lastExorcismIndex = randomIndex;
    return exorcisms[randomIndex];
}

// --- SISTEMA DE ÁUDIO ---
function initAudio() {
    try {
        const audioFiles = [
            { name: 'distant-storm-1', ext: ['wav', 'mp3'] },
            { name: 'monologo', ext: ['mp3', 'wav'] },
            { name: '8-bit-horror-noises', ext: ['mp3', 'wav'] },
            { name: 'baby-crying-1-month', ext: ['wav', 'mp3'] }
        ];
        
        function checkFileExists(url) {
            return new Promise((resolve) => {
                const audio = new Audio();
                audio.addEventListener('canplaythrough', () => resolve(true));
                audio.addEventListener('error', () => resolve(false));
                audio.src = url;
                audio.load();
            });
        }
        
        async function findAvailableFile(baseName, extensions) {
            for (const ext of extensions) {
                const url = `${baseName}.${ext}`;
                const exists = await checkFileExists(url);
                if (exists) {
                    console.log(`✅ Áudio encontrado: ${url}`);
                    return url;
                }
            }
            console.warn(`⚠️ Áudio não encontrado: ${baseName}`);
            return null;
        }
        
        (async function() {
            const stormUrl = await findAvailableFile('distant-storm-1', ['wav', 'mp3']);
            if (stormUrl) {
                stormAudio = new Audio(stormUrl);
                stormAudio.loop = true;
                stormAudio.volume = volumeControl.value / 100 * 0.8;
                audioEnabled = true;
            }
            
            const monoUrl = await findAvailableFile('monologo', ['mp3', 'wav']);
            if (monoUrl) {
                monologueAudio = new Audio(monoUrl);
                monologueAudio.volume = volumeControl.value / 100;
                monologueAudio.loop = false;
                audioEnabled = true;
            }
            
            const gameUrl = await findAvailableFile('8-bit-horror-noises', ['mp3', 'wav']);
            if (gameUrl) {
                audioElement = new Audio(gameUrl);
                audioElement.loop = true;
                audioElement.volume = volumeControl.value / 100;
                audioEnabled = true;
            }
            
            const babyUrl = await findAvailableFile('baby-crying-1-month', ['wav', 'mp3']);
            if (babyUrl) {
                babyCryAudio = new Audio(babyUrl);
                babyCryAudio.volume = Math.min(1, (volumeControl.value / 100) * 1.5);
                babyCryAudio.loop = false;
                audioEnabled = true;
            }
            
            for (let i = 1; i <= 8; i++) {
                const luisUrl = await findAvailableFile(`${i}`, ['mp3']);
                if (luisUrl) {
                    const audio = new Audio(luisUrl);
                    audio.volume = 1.0;
                    audio.loop = false;
                    luisAudios.push(audio);
                    audioEnabled = true;
                }
            }
            
            if (audioEnabled) {
                console.log('🎵 Áudio habilitado!');
                if (stormAudio) {
                    stormAudio.play().catch(() => {
                        console.log('⏳ Aguardando interação para tocar áudio');
                    });
                }
            } else {
                console.log('🔇 Nenhum áudio disponível, modo silencioso');
            }
            
            isAudioReady = true;
        })();
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao criar áudio:', error);
        return false;
    }
}

function updateVolume(value) {
    const volume = value / 100;
    volumeLabel.textContent = Math.round(value) + '%';
    
    if (audioElement) audioElement.volume = volume;
    if (stormAudio) stormAudio.volume = volume * 0.8;
    if (monologueAudio) monologueAudio.volume = volume;
    if (babyCryAudio) babyCryAudio.volume = Math.min(1, volume * 1.5);
}

volumeControl.addEventListener('input', (e) => {
    updateVolume(e.target.value);
});

// --- FUNÇÃO DO BABY CRYING ---
function triggerBabyCry() {
    if (!isPlaying) return;
    if (babyCryTimeout) return;
    
    console.log('👶 BEBÊ CHORANDO!');
    
    if (audioElement && audioEnabled) audioElement.pause();
    
    if (babyCryAudio && audioEnabled) {
        try {
            babyCryAudio.currentTime = 0;
            babyCryAudio.volume = Math.min(1, (volumeControl.value / 100) * 1.8);
            babyCryAudio.play().catch(err => console.warn('Erro ao tocar baby cry:', err));
            
            let count = 0;
            babyCryInterval = setInterval(() => {
                if (babyCryAudio) {
                    babyCryAudio.volume = Math.min(1, (0.5 + Math.random() * 0.8) * 1.5);
                    count++;
                    if (count > 30) {
                        clearInterval(babyCryInterval);
                        babyCryInterval = null;
                    }
                }
            }, 100);
        } catch (err) {
            console.warn('Erro ao tocar baby cry:', err);
        }
    }
    
    const randomMessage = jumpscareMessages[Math.floor(Math.random() * jumpscareMessages.length)];
    const randomColor = Math.floor(Math.random() * 8) + 1;
    
    jumpscareText.textContent = randomMessage;
    jumpscareText.className = `jumpscare-text jumpscare-message-${randomColor}`;
    jumpscareOverlay.classList.remove('hidden');
    container.classList.add("shake");
    
    jumpscareTimeout = setTimeout(() => {
        jumpscareOverlay.classList.add('hidden');
        container.classList.remove("shake");
        if (audioElement && isPlaying && audioEnabled) audioElement.play().catch(() => {});
        jumpscareTimeout = null;
    }, 2000);
    
    babyCryTimeout = setTimeout(() => {
        if (babyCryAudio && audioEnabled) {
            babyCryAudio.pause();
            babyCryAudio.currentTime = 0;
        }
        if (babyCryInterval) {
            clearInterval(babyCryInterval);
            babyCryInterval = null;
        }
        babyCryTimeout = null;
    }, 15000);
}

// --- FUNÇÃO PARA TOCAR ÁUDIO DO LUIS ---
function playLuisAudio() {
    if (!isPlaying || luisAudioTimeout) return;
    if (!audioEnabled || luisAudios.length === 0) return;
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * luisAudios.length);
    } while (randomIndex === lastLuisAudioIndex && luisAudios.length > 1);
    
    lastLuisAudioIndex = randomIndex;
    const audio = luisAudios[randomIndex];
    
    try {
        audio.currentTime = 0;
        audio.volume = 1.0;
        audio.play().catch(err => console.warn('Erro ao tocar audio do Luis:', err));
    } catch (err) {
        console.warn('Erro ao tocar audio do Luis:', err);
    }
    
    luisAudioTimeout = setTimeout(() => {
        luisAudioTimeout = null;
    }, 3000 + Math.random() * 2000);
}

// --- VERIFICA IMAGEM DO LUIS ---
function checkLuisImage() {
    const img = new Image();
    img.onload = function() {
        console.log('✅ Imagem do Luis carregada!');
        luisElement.style.display = 'block';
    };
    img.onerror = function() {
        console.warn('⚠️ Imagem do Luis não encontrada! Usando fallback.');
        luisElement.textContent = 'LUIS';
        luisElement.style.fontSize = '24px';
        luisElement.style.backgroundImage = 'none';
        luisElement.style.border = 'none';
        luisElement.style.boxShadow = 'none';
        luisElement.style.background = 'transparent';
        luisElement.style.width = 'auto';
        luisElement.style.height = 'auto';
        luisElement.style.bottom = '43px';
        luisElement.style.right = '0px';
        luisElement.style.transform = 'translateY(50%)';
        luisElement.style.color = '#00ff00';
        luisElement.style.fontWeight = 'bold';
    };
    img.src = 'LUIS.png';
}

// --- JOGO ---
function startGame() {
    monologueScreen.classList.add('hidden');
    shopScreen.classList.add('hidden');
    container.classList.remove('hidden');
    
    if (monologueAudio && audioEnabled) {
        monologueAudio.pause();
        monologueAudio.currentTime = 0;
    }
    
    const hasSave = loadSaveData();
    if (!hasSave) {
        currentNight = 1;
        ritualsCompletedThisNight = 0;
        totalRitualsGlobal = 0;
        gameCompleted = false;
        demonSpeed = 0.4;
    }
    
    isPlaying = true;
    score = 0;
    demonPosition = 0;
    isHurtAnimating = false;
    lastExorcismIndex = -1;
    
    // Calcula a velocidade base com progressão suave
    let speedMultiplier = 1;
    if (playerAttributes.slow_10) speedMultiplier = 0.9;
    
    demonSpeed = (0.4 + (currentNight - 1) * 0.05 + ritualsCompletedThisNight * 0.01) * speedMultiplier;
    
    if (demonSpeed > 1.2) demonSpeed = 1.2;
    
    console.log(`🚀 Velocidade do demônio: ${demonSpeed.toFixed(3)} (Noite ${currentNight}, Rituais da noite: ${ritualsCompletedThisNight})`);
    
    if (playerAttributes.delay_10s) {
        demonPosition = 0;
        deadlineText.innerText = "⏳ AGUARDANDO...";
        deadlineText.style.color = "#ff6600";
        setTimeout(() => {
            if (isPlaying) {
                deadlineText.innerText = "RITUAL ATIVO";
                deadlineText.style.color = "#555";
            }
        }, 10000);
    }
    
    updateUI();
    
    demonElement.className = "character demon-walk";
    jumpscareOverlay.classList.add('hidden');
    container.classList.remove("shake");
    
    nextSentence();
    gameInterval = setInterval(updateGame, 100);
    
    if (audioElement && audioEnabled && audioElement.paused) {
        audioElement.play().catch(err => console.warn('Erro ao tocar música do jogo:', err));
    }
    
    scheduleJumpscare();
}

function updateUI() {
    scoreCounter.innerText = totalRitualsGlobal;
    nightCounter.innerText = `${currentNight}/${MAX_NIGHTS}`;
    ritualCounter.innerText = `${ritualsCompletedThisNight + 1}/${RITUALS_PER_NIGHT}`;
    deadlineText.innerText = "RITUAL ATIVO";
    deadlineText.style.color = "#555";
}

function scheduleJumpscare() {
    if (!isPlaying) return;
    const delay = 15000 + Math.random() * 30000;
    
    setTimeout(() => {
        if (isPlaying) {
            triggerBabyCry();
            setTimeout(() => {
                if (isPlaying) scheduleJumpscare();
            }, 16000);
        }
    }, delay);
}

function nextSentence() {
    typedIndex = 0;
    currentSentence = getRandomExorcism();
    renderText();
}

function renderText() {
    let html = "";
    for (let i = 0; i < currentSentence.length; i++) {
        if (i < typedIndex) {
            html += `<span class="correct">${currentSentence[i]}</span>`;
        } else if (i === typedIndex) {
            html += `<span class="untyped" style="background-color: #fff; color: #000;">${currentSentence[i]}</span>`;
        } else {
            html += `<span class="untyped">${currentSentence[i]}</span>`;
        }
    }
    textDisplay.innerHTML = html;
}

function updateGame() {
    if (!isPlaying) return;

    demonPosition += demonSpeed;

    if (demonPosition > 40) {
        deadlineText.innerText = "PERIGO!";
        deadlineText.style.color = "#ff6600";
        demonElement.classList.add("shaking");
    } else {
        demonElement.classList.remove("shaking");
    }
    
    if (demonPosition > 60) {
        deadlineText.innerText = "POSSUIÇÃO IMINENTE!";
        deadlineText.style.color = "var(--error-color)";
        if (!luisAudioTimeout) playLuisAudio();
    }

    if (demonPosition >= barMax) {
        demonPosition = barMax;
        if (playerAttributes.extra_life && !playerAttributes.extra_life_used) {
            playerAttributes.extra_life_used = true;
            demonPosition = barMax / 2;
            deadlineText.innerText = "💚 VIDA EXTRA ATIVADA!";
            deadlineText.style.color = "#00ff00";
            setTimeout(() => {
                if (isPlaying) {
                    deadlineText.innerText = "POSSUIÇÃO IMINENTE!";
                    deadlineText.style.color = "var(--error-color)";
                }
            }, 1500);
            return;
        }
        gameOver();
    }

    demonElement.style.left = demonPosition + "%";
    possessionBar.style.width = (demonPosition / barMax * 100) + "%";
}

function showHurtAnimation() {
    if (isHurtAnimating) return;
    isHurtAnimating = true;
    
    demonElement.classList.remove("demon-walk");
    demonElement.classList.add("demon-hurt");
    
    clearTimeout(demonElement.hurtTimeout);
    demonElement.hurtTimeout = setTimeout(() => {
        if (isPlaying) {
            demonElement.classList.remove("demon-hurt");
            demonElement.classList.add("demon-walk");
        }
        isHurtAnimating = false;
    }, 400);
}

// --- EVENTO DE TECLADO ---
window.addEventListener("keydown", (e) => {
    if (!menuScreen.classList.contains('hidden')) {
        if (e.key === "Enter") {
            const save = getSaveData();
            if (save && save.totalRitualsGlobal > 0) {
                continueGame();
            } else {
                newGame();
            }
            return;
        }
    }
    
    if (!monologueScreen.classList.contains('hidden')) {
        if (e.key === "Escape") {
            skipMonologue();
            return;
        }
    }
    
    if (!monologueScreen.classList.contains('hidden') && !monologueButtonContainer.classList.contains('hidden')) {
        if (e.key === "Enter") {
            startGame();
            return;
        }
    }
    
    if (!isPlaying) return;
    
    if (e.key === "Shift" || e.key === "Control" || e.key === "Alt" || 
        e.key === "Meta" || e.key === "CapsLock" || e.key === "Tab" ||
        e.key === "Escape" || e.key === "Enter" || e.key === "Backspace") {
        return;
    }
    
    e.preventDefault();

    if (typedIndex >= currentSentence.length) return;

    let expectedChar = currentSentence[typedIndex];
    let pressedKey = e.key;
    
    if (pressedKey.length === 1) {
        if (compareChars(pressedKey, expectedChar)) {
            typedIndex++;
            let recuo = 1.2;
            if (playerAttributes.double_recuo) recuo = 2.4;
            demonPosition = Math.max(0, demonPosition - recuo);
            showHurtAnimation();
            
            if (typedIndex >= currentSentence.length) {
                totalRitualsGlobal++;
                ritualsCompletedThisNight++;
                scoreCounter.innerText = totalRitualsGlobal;
                
                saveGameData();
                
                if (ritualsCompletedThisNight >= RITUALS_PER_NIGHT) {
                    if (currentNight >= MAX_NIGHTS) {
                        gameCompleted = true;
                        saveGameData();
                        showGameComplete();
                        return;
                    }
                    showNightComplete();
                    return;
                }
                
                ritualCounter.innerText = `${ritualsCompletedThisNight + 1}/${RITUALS_PER_NIGHT}`;
                demonPosition = Math.max(0, demonPosition - 18);
                nextSentence();
            } else {
                renderText();
            }
        } else {
            if (playerAttributes.ignore_errors > 0) {
                playerAttributes.ignore_errors--;
                container.classList.add("shake");
                setTimeout(() => { container.classList.remove("shake"); }, 200);
                return;
            }
            demonPosition = Math.min(barMax, demonPosition + 3);
            container.classList.add("shake");
            setTimeout(() => { container.classList.remove("shake"); }, 200);
        }
    }
});

function showNightComplete() {
    isPlaying = false;
    clearInterval(gameInterval);
    container.classList.add('hidden');
    nightCompleteScreen.classList.remove('hidden');
    
    if (audioElement && audioEnabled) {
        audioElement.pause();
    }
}

function showGameComplete() {
    isPlaying = false;
    clearInterval(gameInterval);
    container.classList.add('hidden');
    gameCompleteScreen.classList.remove('hidden');
    
    if (audioElement && audioEnabled) {
        audioElement.pause();
    }
}

function gameOver() {
    isPlaying = false;
    clearInterval(gameInterval);
    
    if (babyCryTimeout) clearTimeout(babyCryTimeout);
    if (jumpscareTimeout) clearTimeout(jumpscareTimeout);
    if (babyCryInterval) clearInterval(babyCryInterval);
    if (luisAudioTimeout) clearTimeout(luisAudioTimeout);
    
    if (babyCryAudio && audioEnabled) {
        babyCryAudio.pause();
        babyCryAudio.currentTime = 0;
    }
    luisAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    
    document.getElementById("final-score").innerText = `RITUAIS: ${totalRitualsGlobal}`;
    document.getElementById("gameover-screen").classList.remove("hidden");
    
    demonElement.classList.remove("demon-walk", "demon-hurt", "shaking");
    jumpscareOverlay.classList.add('hidden');
    container.classList.remove("shake");
    isHurtAnimating = false;
}

function restartGame() {
    document.getElementById("gameover-screen").classList.add("hidden");
    container.classList.add('hidden');
    menuScreen.classList.remove('hidden');
    
    if (audioElement && audioEnabled) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
    
    if (stormAudio && audioEnabled) {
        stormAudio.currentTime = 0;
        stormAudio.play().catch(() => {});
    }
}

function resetGame() {
    localStorage.removeItem(SAVE_KEY);
    playerAttributes = {
        double_recuo: false,
        slow_10: false,
        extra_life: false,
        extra_life_used: false,
        ignore_errors: 0,
        barra_15: false,
        delay_10s: false
    };
    currentNight = 1;
    ritualsCompletedThisNight = 0;
    totalRitualsGlobal = 0;
    gameCompleted = false;
    barMax = 86;
    startDelay = 0;
    demonSpeed = 0.4;
    
    document.getElementById("game-complete-screen").classList.add('hidden');
    menuScreen.classList.remove('hidden');
    container.classList.add('hidden');
    
    if (audioElement && audioEnabled) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
    
    if (stormAudio && audioEnabled) {
        stormAudio.currentTime = 0;
        stormAudio.play().catch(() => {});
    }
}

// --- SISTEMA DE SAVE ---
function getSaveData() {
    try {
        const data = localStorage.getItem(SAVE_KEY);
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
}

function saveGameData() {
    const data = {
        night: currentNight,
        ritualsCompletedThisNight: ritualsCompletedThisNight,
        totalRitualsGlobal: totalRitualsGlobal,
        gameCompleted: gameCompleted,
        attributes: playerAttributes,
        barMax: barMax
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    console.log('💾 Jogo salvo:', data);
}

function loadSaveData() {
    const data = getSaveData();
    if (data) {
        currentNight = data.night || 1;
        ritualsCompletedThisNight = data.ritualsCompletedThisNight || 0;
        totalRitualsGlobal = data.totalRitualsGlobal || 0;
        gameCompleted = data.gameCompleted || false;
        playerAttributes = data.attributes || {
            double_recuo: false,
            slow_10: false,
            extra_life: false,
            extra_life_used: false,
            ignore_errors: 0,
            barra_15: false,
            delay_10s: false
        };
        barMax = data.barMax || 86;
        console.log('📂 Save carregado:', data);
        return true;
    }
    return false;
}

// --- INICIALIZAÇÃO ---
window.addEventListener('load', () => {
    checkLuisImage();
    initAudio();
    
    const save = getSaveData();
    if (save && save.totalRitualsGlobal > 0) {
        continueBtn.style.display = 'inline-block';
    } else {
        continueBtn.style.display = 'none';
    }
});

// Funções globais
window.copyEthAddress = copyEthAddress;
window.showMonologue = showMonologue;
window.startGame = startGame;
window.restartGame = restartGame;
window.continueNight = continueNight;
window.resetGame = resetGame;
window.skipMonologue = skipMonologue;
window.newGame = newGame;
window.continueGame = continueGame;
window.goToShop = goToShop;
window.buyItem = buyItem;