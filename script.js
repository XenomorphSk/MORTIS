// script.js - Versão corrigida para GitHub Pages
const monologue = `"ELES ACHAM QUE EU SOU LOUCO. 'O LUIS PIROU DE VEZ', DIZEM OS MEUS COLEGAS DESENVOLVEDORES. 'ELE PASSOU TEMPO DEMAIS ISOLADO CODANDO NA INTERNET'. TOLOS... ELES NAO CONSEGUEM VER O OBVIO. ELES NAO SABEM QUEM REALMENTE FINANCIA AS GRANDES BIG TECHS, QUEM DITA AS REGRAS DO FEDERAL RESERVE, QUEM MANIPULA A MIDIA INTERNACIONAL PARA MANTER A POPULACAO CEGA. OS ROTHSCHILDS... A ELITE DE HOLLYWOOD... A CABALA GLOBALISTA QUE CONTROLA CADA CENTAVO QUE CIRCULA NESTE PLANETA MISERAVEL.

EU DESCOBRI OS CODIGOS OCULTOS DELES. EU EXPUS A VERDADE NOS MEUS FORUNS. E QUAL FOI A RESPOSTA DA ELITE? ELES NAO MANDARAM A POLICIA, NEM ADVOGADOS. ELES ABRIRAM OS PORTÕES DO PRÓPRIO INFERNO E ENVIARAM UM COBRADOR DEMONIACO PARA ARRANCAR A MINHA ALMA E QUEIMAR OS MEUS HDS.

O DEMONIO ESTA NA MINHA PORTA. A POSSUICAO E IMINENTE. O GRANDE RESET DELES COMECOU PARA MIM. A MINHA UNICA SALVACAO SAO ESTES MANUSCRITOS ANTIGOS DE EXORCISMO QUE ENCONTREI NA DEEP WEB. EU PRECISO DIGITAR CADA PALAVRA, CADA CARACTERE PERFEITAMENTE, QUEBRANDO A CRIPTOGRAFIA INFERNAL ANTES QUE ESSA ABERRACAO ME ALCANCE... E ME CALE PARA SEMPRE.

QUE DEUS ME PERDOE... E QUE OS BANCOS GLOBAIS VAO PARA O INFERNO!"`;

const exorcisms = [
    "VADE RETRO SATANA!",
    "IPSE VENENA BIBAS!",
    "CRUX SACRA SIT MIHI LUX!",
    "NON DRACO SIT MIHI DUX!",
    "IN NOMINE PATRIS, ET FILII, ET SPIRITUS SANCTI.",
    "EXORCIZO TE, IMMUNDISSIME SPIRITUS!",
    "RECEDE ERGO, PRAEDO."
];

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
    "VOZES DO ALÉM",
    "O VENTRE VAZIO",
    "SEMENTE DO MAL",
    "PROLE MALDITA",
    "O CHORO QUE NAO CESA"
];

// --- SISTEMA DE SAVE ---
const SAVE_KEY = 'mortis_save_data';

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
        ritualsCompleted: ritualsCompleted,
        totalRituals: totalRituals,
        gameCompleted: gameCompleted
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    console.log('💾 Jogo salvo:', data);
}

function loadSaveData() {
    const data = getSaveData();
    if (data) {
        currentNight = data.night || 1;
        ritualsCompleted = data.ritualsCompleted || 0;
        totalRituals = data.totalRituals || 0;
        gameCompleted = data.gameCompleted || false;
        console.log('📂 Save carregado:', data);
        return true;
    }
    return false;
}

// --- VARIÁVEIS DO JOGO ---
let currentSentence = "";
let typedIndex = 0;
let score = 0;
let demonPosition = 0;
let gameInterval;
let isPlaying = false;
let baseSpeed = 0.5;
let isHurtAnimating = false;

// Sistema de Noites
let currentNight = 1;
const MAX_NIGHTS = 5;
const RITUALS_PER_NIGHT = 7;
let ritualsCompleted = 0;
let totalRituals = 0;
let gameCompleted = false;

// Áudio
let audioElement = null;
let isAudioReady = false;
let babyCryAudio = null;
let babyCryTimeout = null;
let jumpscareTimeout = null;
let babyCryInterval = null;
let stormAudio = null;
let monologueAudio = null;
let isMonologuePlaying = false;
let monologueTypingInterval = null;
let audioContext = null;

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

// --- SKIP MONÓLOGO ---
function skipMonologue() {
    if (monologueTypingInterval) {
        clearTimeout(monologueTypingInterval);
        monologueTypingInterval = null;
    }
    if (monologueAudio) {
        monologueAudio.pause();
        monologueAudio.currentTime = 0;
    }
    monologueText.textContent = monologue;
    monologueCursor.style.display = 'none';
    monologueButtonContainer.classList.remove('hidden');
}

// --- MOSTRA MONÓLOGO ---
function showMonologue() {
    menuScreen.classList.add('hidden');
    monologueScreen.classList.remove('hidden');
    
    if (stormAudio) {
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
    
    if (monologueAudio) {
        monologueAudio.volume = volumeControl.value / 100;
        monologueAudio.play().catch(err => {
            console.warn('Erro ao tocar monólogo:', err);
            // Mostra o botão mesmo sem áudio
            setTimeout(() => {
                monologueButtonContainer.classList.remove('hidden');
                monologueCursor.style.display = 'none';
            }, 2000);
        });
        isMonologuePlaying = true;
        
        monologueAudio.addEventListener('ended', function onAudioEnd() {
            audioFinished = true;
            monologueAudio.removeEventListener('ended', onAudioEnd);
            if (monologueButtonContainer.classList.contains('hidden')) {
                monologueButtonContainer.classList.remove('hidden');
                monologueCursor.style.display = 'none';
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
            } else {
                setTimeout(() => {
                    if (!monologueButtonContainer.classList.contains('hidden')) return;
                    monologueButtonContainer.classList.remove('hidden');
                }, 8000);
            }
        }
    }
    
    typeNextChar();
}

// --- SISTEMA DE ÁUDIO CORRIGIDO ---
function initAudio() {
    try {
        // Cria o AudioContext para gerenciar áudio
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Função para criar áudio com fallback
        function createAudio(src) {
            const audio = new Audio();
            audio.src = src;
            audio.preload = 'auto';
            return audio;
        }
        
        // Verifica se os arquivos existem com diferentes extensões
        const audioFiles = {
            storm: ['distant-storm-1.wav', 'distant-storm-1.mp3'],
            monologue: ['monologo.mp3', 'monologo.wav'],
            game: ['8-bit-horror-noises.mp3', '8-bit-horror-noises.wav'],
            baby: ['baby-crying-1-month.wav', 'baby-crying-1-month.mp3']
        };
        
        // Tenta carregar cada áudio com fallback
        stormAudio = createAudio(audioFiles.storm[0]);
        stormAudio.loop = true;
        stormAudio.volume = volumeControl.value / 100 * 0.8;
        
        monologueAudio = createAudio(audioFiles.monologue[0]);
        monologueAudio.volume = volumeControl.value / 100;
        monologueAudio.loop = false;
        
        audioElement = createAudio(audioFiles.game[0]);
        audioElement.loop = true;
        audioElement.volume = volumeControl.value / 100;
        
        babyCryAudio = createAudio(audioFiles.baby[0]);
        babyCryAudio.volume = Math.min(1, (volumeControl.value / 100) * 1.5);
        babyCryAudio.loop = false;
        
        // Áudios do Luis (1.mp3 a 8.mp3)
        for (let i = 1; i <= 8; i++) {
            const audio = createAudio(`${i}.mp3`);
            audio.volume = 1.0;
            audio.loop = false;
            luisAudios.push(audio);
        }
        
        // Tenta tocar a tempestade - apenas se o usuário já interagiu
        const tryPlayStorm = () => {
            if (stormAudio && stormAudio.paused) {
                stormAudio.play().catch(err => {
                    console.log('⏳ Aguardando interação para tocar áudio');
                });
            }
        };
        
        // Toca quando o usuário clicar
        document.addEventListener('click', function playOnClick() {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
            }
            tryPlayStorm();
            document.removeEventListener('click', playOnClick);
        }, { once: true });
        
        // Tenta tocar imediatamente (pode falhar)
        setTimeout(tryPlayStorm, 100);
        
        setupAudioDistortion();
        
        audioElement.addEventListener('canplaythrough', () => {
            isAudioReady = true;
            console.log('✅ Áudio do jogo carregado!');
        });
        
        // Evento de erro com fallback
        audioElement.addEventListener('error', (e) => {
            console.warn('⚠️ Erro ao carregar áudio:', e.target.src);
            // Tenta carregar com extensão alternativa
            const src = e.target.src;
            if (src.endsWith('.mp3')) {
                e.target.src = src.replace('.mp3', '.wav');
            } else if (src.endsWith('.wav')) {
                e.target.src = src.replace('.wav', '.mp3');
            }
        });
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao criar áudio:', error);
        return false;
    }
}

function setupAudioDistortion() {
    if (!babyCryAudio) return;
    try {
        // Verifica se o AudioContext já existe
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Tenta criar o nó de distorção
        try {
            const source = audioContext.createMediaElementSource(babyCryAudio);
            const gainNode = audioContext.createGain();
            const distortion = audioContext.createWaveShaper();
            
            function makeDistortionCurve(amount) {
                const k = amount;
                const n_samples = 44100;
                const curve = new Float32Array(n_samples);
                const deg = Math.PI / 180;
                let i = 0, x;
                for (; i < n_samples; ++i) {
                    x = i * 2 / n_samples - 1;
                    curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
                }
                return curve;
            }
            
            distortion.curve = makeDistortionCurve(30);
            distortion.oversample = '4x';
            source.connect(distortion);
            distortion.connect(gainNode);
            gainNode.connect(audioContext.destination);
            gainNode.gain.value = 0.8;
        } catch (e) {
            console.warn('⚠️ Distorção não disponível, continuando sem ela');
        }
    } catch (e) {
        console.warn('⚠️ Erro ao configurar distorção:', e);
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
    if (!isPlaying || !babyCryAudio) return;
    if (babyCryTimeout) return;
    
    console.log('👶 BEBÊ CHORANDO!');
    
    if (audioElement) audioElement.pause();
    
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
    
    const randomMessage = jumpscareMessages[Math.floor(Math.random() * jumpscareMessages.length)];
    const randomColor = Math.floor(Math.random() * 8) + 1;
    
    jumpscareText.textContent = randomMessage;
    jumpscareText.className = `jumpscare-text jumpscare-message-${randomColor}`;
    jumpscareOverlay.classList.remove('hidden');
    container.classList.add("shake");
    
    jumpscareTimeout = setTimeout(() => {
        jumpscareOverlay.classList.add('hidden');
        container.classList.remove("shake");
        if (audioElement && isPlaying) audioElement.play().catch(() => {});
        jumpscareTimeout = null;
    }, 2000);
    
    babyCryTimeout = setTimeout(() => {
        if (babyCryAudio) {
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
    container.classList.remove('hidden');
    
    // Resume o AudioContext se estiver suspenso
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    if (monologueAudio) {
        monologueAudio.pause();
        monologueAudio.currentTime = 0;
    }
    
    const hasSave = loadSaveData();
    if (!hasSave) {
        currentNight = 1;
        ritualsCompleted = 0;
        totalRituals = 0;
        gameCompleted = false;
    }
    
    isPlaying = true;
    score = 0;
    demonPosition = 0;
    baseSpeed = 0.5 + (currentNight - 1) * 0.1;
    isHurtAnimating = false;
    
    updateUI();
    
    demonElement.className = "character demon-walk";
    jumpscareOverlay.classList.add('hidden');
    container.classList.remove("shake");
    
    nextSentence();
    gameInterval = setInterval(updateGame, 100);
    
    if (audioElement && audioElement.paused) {
        audioElement.play().catch(err => console.warn('Erro ao tocar música do jogo:', err));
    }
    
    scheduleJumpscare();
}

function updateUI() {
    scoreCounter.innerText = totalRituals;
    nightCounter.innerText = `${currentNight}/${MAX_NIGHTS}`;
    ritualCounter.innerText = `${ritualsCompleted + 1}/${RITUALS_PER_NIGHT}`;
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
    const ritualIndex = (totalRituals % RITUALS_PER_NIGHT);
    currentSentence = exorcisms[ritualIndex % exorcisms.length];
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

    let currentSpeed = baseSpeed + (totalRituals * 0.05);
    demonPosition += currentSpeed;

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

    if (demonPosition >= 86) { 
        demonPosition = 86;
        gameOver();
    }

    demonElement.style.left = demonPosition + "%";
    possessionBar.style.width = demonPosition + "%";
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

window.addEventListener("keydown", (e) => {
    if (!menuScreen.classList.contains('hidden')) {
        if (e.key === "Enter") {
            showMonologue();
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
        e.key === "Escape" || e.key === "Enter") {
        return;
    }
    
    e.preventDefault();

    if (typedIndex >= currentSentence.length) return;

    const expectedChar = currentSentence[typedIndex];
    
    if (e.key.toUpperCase() === expectedChar || e.key === expectedChar) {
        typedIndex++;
        demonPosition = Math.max(0, demonPosition - 1.2);
        showHurtAnimation();
        
        if (typedIndex >= currentSentence.length) {
            totalRituals++;
            ritualsCompleted++;
            scoreCounter.innerText = totalRituals;
            
            saveGameData();
            
            if (ritualsCompleted >= RITUALS_PER_NIGHT) {
                if (currentNight >= MAX_NIGHTS) {
                    gameCompleted = true;
                    saveGameData();
                    showGameComplete();
                    return;
                }
                showNightComplete();
                return;
            }
            
            ritualCounter.innerText = `${ritualsCompleted + 1}/${RITUALS_PER_NIGHT}`;
            demonPosition = Math.max(0, demonPosition - 18);
            nextSentence();
        } else {
            renderText();
        }
    } else {
        demonPosition = Math.min(86, demonPosition + 3);
        container.classList.add("shake");
        setTimeout(() => { container.classList.remove("shake"); }, 200);
    }
});

function showNightComplete() {
    isPlaying = false;
    clearInterval(gameInterval);
    container.classList.add('hidden');
    nightCompleteScreen.classList.remove('hidden');
    
    if (audioElement) {
        audioElement.pause();
    }
}

function showGameComplete() {
    isPlaying = false;
    clearInterval(gameInterval);
    container.classList.add('hidden');
    gameCompleteScreen.classList.remove('hidden');
    
    if (audioElement) {
        audioElement.pause();
    }
}

function continueNight() {
    nightCompleteScreen.classList.add('hidden');
    currentNight++;
    ritualsCompleted = 0;
    baseSpeed = 0.5 + (currentNight - 1) * 0.15;
    
    saveGameData();
    
    container.classList.remove('hidden');
    isPlaying = true;
    demonPosition = 0;
    isHurtAnimating = false;
    
    updateUI();
    demonElement.className = "character demon-walk";
    jumpscareOverlay.classList.add('hidden');
    container.classList.remove("shake");
    
    nextSentence();
    gameInterval = setInterval(updateGame, 100);
    
    if (audioElement && audioElement.paused) {
        audioElement.play().catch(() => {});
    }
    
    scheduleJumpscare();
}

function gameOver() {
    isPlaying = false;
    clearInterval(gameInterval);
    
    if (babyCryTimeout) clearTimeout(babyCryTimeout);
    if (jumpscareTimeout) clearTimeout(jumpscareTimeout);
    if (babyCryInterval) clearInterval(babyCryInterval);
    if (luisAudioTimeout) clearTimeout(luisAudioTimeout);
    
    if (babyCryAudio) {
        babyCryAudio.pause();
        babyCryAudio.currentTime = 0;
    }
    luisAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    
    document.getElementById("final-score").innerText = `RITUAIS: ${totalRituals}`;
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
    
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
    
    if (stormAudio) {
        stormAudio.currentTime = 0;
        stormAudio.play().catch(() => {});
    }
}

function resetGame() {
    localStorage.removeItem(SAVE_KEY);
    currentNight = 1;
    ritualsCompleted = 0;
    totalRituals = 0;
    gameCompleted = false;
    
    document.getElementById("game-complete-screen").classList.add('hidden');
    menuScreen.classList.remove('hidden');
    container.classList.add('hidden');
    
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
    
    if (stormAudio) {
        stormAudio.currentTime = 0;
        stormAudio.play().catch(() => {});
    }
}

// --- INICIALIZAÇÃO ---
window.addEventListener('load', () => {
    checkLuisImage();
    initAudio();
});

// Funções globais
window.copyEthAddress = copyEthAddress;
window.showMonologue = showMonologue;
window.startGame = startGame;
window.restartGame = restartGame;
window.continueNight = continueNight;
window.resetGame = resetGame;
window.skipMonologue = skipMonologue;
