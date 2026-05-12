 const TELEGRAM_TOKEN = '8436019529:AAFkkub2YKM0WOzqIfC8brTMznWHWPs8gu4';

const CHAT_ID = '523020869';

let audioPlayer = new Audio();
audioPlayer.playsInline = true;

const sections = [

    {

        title: "Введение",

        video: "video/video_introduccion.MP4",

        text: "Привет! Хотите самостоятельно освоить правила испанского чтения? В этом приложении вы сможете не просто узнать правила, но и попрактиковаться и даже получить от меня обратную связь. Поехали?",

        letters: "Intro",

        exercises: false

    },

    {

        title: "Раздел 1: Гласные",

        video: "video/video_vocales.MP4",

        text: "В испанском языке всего пять гласных: A, E, I, O, U. Главное правило: мы читаем их четко, как они написаны.",

        letters: "A, E, I, O, U",

        ex1_audio: "audio/vocales_2.wav",

        ex1_words: "Mañana, sombrero, inteligente, Toledo, molestar, comemos, cansados, corte, menudo, recado, Ricardo, remolacha, camarero, coleta, meninas.",

        ex2_files: ["acordar", "bocata", "calorias", "direccion", "domicilio", "ejemplo", "entrega", "escoger", "escote", "molecula", "notario"], 

        ex2_prefix: "audio/vocales_3_"

    },

    {

        title: "Раздел 2: Согласные B и V",

        video: "video/video_ByV.MP4",

        text: "В испанском буквы B и V передают один и тот же звук. Разницы в произношении между ними нет.",

        letters: "B, V",

        ex1_audio: "audio/b_v_2.wav",

        ex1_words: "Basta, votar, bello, vela, caballo, valle, baile, haber, Habana, Cuba, viva, libre, cobrar, autobus, obesidad.",

        ex2_files: ["cavar", "Cuba", "cubo", "cueva", "hablar", "iberico", "uvas", "valle", "vamos", "verdad", "vuelo"],

        ex2_prefix: "audio/b_v_3_"

    },

    {

        title: "Раздел 3: Согласные L и LL",

        video: "video/video_LyLL.MP4",

        text: "Одиночная L в испанском всегда мягкая. Двойная Ll читается как [й] или [ж].",

        letters: "L, LL",

        ex1_audio: "audio/L_y_LL_2.wav",

        ex1_words: "lluvia, collar, Molleda, llevar, levantarse, coral, llorar, llanto, lento, valor, lápiz, hola, colador, valle, huella.",

        ex2_files: ["calor", "cuello", "llenar", "Lorena", "molde", "molestar", "muelle", "pollo", "que_tal", "rallar", "rulo"],

        ex2_prefix: "audio/L_y_LL_3_"

    },

    {

        title: "Раздел 4: Согласная Ñ",

        video: "video/video_Ntilde.MP4",

        text: "Буква Ñ дает мягкий звук [нь]. После нее нет звука й.",

        letters: "Ñ",

        ex1_audio: "audio/ntilde_2.wav",

        ex1_words: "Baño, Castaña, Sueño, caña, ñoño, meñique, puño, sueño, niña, cuñado, añorar, Miño, araña, pañuelo, acompañar.",

        ex2_files: ["acompanar", "anno", "bano", "carino", "ensenar", "extranar", "lena", "pequeno", "senor", "una"],

        ex2_prefix: "audio/ntilde_3_"

    },

    {

        title: "Раздел 5: Согласная R",

        video: "video/video_R.MP4",

        text: "Буква R бывает двух видов: слабая и сильная (rr).",

        letters: "R, RR",

        ex1_audio: "audio/R_2.wav",

        ex1_words: "Rana, Pero, Perro, Carro, Caro, Enrique, carate, carrera, arrugas, ronda, parróquia, mirador, mar, muestra, morir.",

        ex2_files: ["arriba", "cara", "correr", "guitarra", "pero", "perro", "rapido", "rosa", "rubio", "tierra"],

        ex2_prefix: "audio/R_3_"

    },

    {

        title: "Раздел 6: Хитрости буквы C",

        video: "video/video_C.MP4",

        text: "Перед E, I читается как [с]. Перед A, O, U читается как [к].",

        letters: "C",

        ex1_audio: "audio/C_2.wav",

        ex1_words: "decir, nacer, maceta, centro, comer, cama, boca, pecado, receta, escuchar, agradecer, tocar, paciencia, escuela, canción.",

        ex2_files: ["barco", "calma", "cebra", "cerca", "ciudad", "copa", "cuchara", "lectura", "noticia", "oficina", "orfecer", "sacar"],

        ex2_prefix: "audio/C_3_"

    },

    {

        title: "Раздел 7: Многоликая G",

        video: "video/video_G.MP4",

        text: "G+A,O,U = [г]. G+E,I = [х]. GU+E,I = [ге/ги]. GÜ = [гуи].",

        letters: "G",

        ex1_audio: "audio/G_2.wav",

        ex1_words: "jugar, albergue, guía, agua, guapo, guisante, cigüeña, guardar, guerra, gafas, amigo, manguera, fuego, guiso, guindilla.",

        ex2_files: ["agüita", "antigüedad", "colegio", "ganar", "garganta", "gente", "gigante", "girasol", "golpe", "guacamole", "guante", "guerrero", "guion", "gula", "pagar"],

        ex2_prefix: "audio/G_3_"

    },

    {

        title: "Раздел 8: Буква Q",

        video: "video/video_Q.MP4",

        text: "Всегда в связке QU. Читается как [к].",

        letters: "Q",

        ex1_audio: "audio/Q_2.wav",

        ex1_words: "Quitar, queja, quemar, quién, quieto, querido, paquete, esquina, pequeño, parque, raqueta, maquillaje, bosque, taquilla, equivocar.",

        ex2_files: ["ataque", "banquete", "bloque", "buque", "cheque", "esqueleto", "estanque", "quedar", "quena", "querubin", "quijada", "quiosco", "quizas"],

        ex2_prefix: "audio/Q_3_"

    },

    {

        title: "Раздел 9: Буква Y",

        video: "video/video_Y.MP4",

        text: "В конце слова = [и]. Перед гласной = [й].",

        letters: "Y",

        ex1_audio: "audio/Y_2.wav",

        ex1_words: "Yo, ya, ayer, hoy, muy, ley, rey, mayo, playa, ayuda, tuyo, suyo, desayunar, apoyar.",

        ex2_files: ["arroyo", "ensayo", "inyectar", "joyeria", "mayo", "proyecto", "rayo", "subrayar", "yacimiento", "yate", "yegua", "yema", "yoga", "yuca", "yudo"],

        ex2_prefix: "audio/Y_3_"

    },

    {

        title: "Раздел 10: Буква H",

        video: "video/video_H.MP4",

        text: "Никогда не читается. В сочетании CH дает звук [ч].",

        letters: "H",

        ex1_audio: "audio/H_2.wav",

        ex1_words: "Hablar, hacer, hijo, hermano, historia, huevo, hambre, herida, hoja, hielo, humo, hogar, hongo, huelga, herencia.",

        ex2_files: ["ahora", "alcohol", "almohada", "buho", "cohete", "habitacion", "hacha", "hallar", "harinas", "hasta", "hebreo", "hecho", "prohibir", "vehiculo", "zanahoria"],

        ex2_prefix: "audio/H_3_"

    },

    {

        title: "Раздел 11: Буква Z",

        video: "video/video_Z.MP4",

        text: "Всегда читается как межзубный [с].",

        letters: "Z",

        ex1_audio: "audio/Z_2.wav",

        ex1_words: "Zapato, zumo, zona, zorro, azul, capaz, arroz, luz, nariz, feliz, paz, brazo, corazón, cruzar, terraza.",

        ex2_files: ["adelgazar", "alianza", "azúcar", "calabaza", "choza", "esperanza", "lápiz", "маíz", "manzana", "pez", "raiz", "voz", "zanja", "zueco", "zurdo"],

        ex2_prefix: "audio/Z_3_"

    },

    {

        title: "Бонус",

        video: "video/video_bonus.MP4",

        text: "Прочитайте эти фразы и запишите себя. Затем пришлите мне свою запись на проверку.",

        letters: "Bonus",

        bonus_phrases: [

            "Mañana voy a la playa.", 

            "El niño tiene un perro.", 

            "Me gusta el queso y el vino.",

            "Ricardo vive en una casa con terraza.", 

            "Hay mucha gente en el centro.",

            "El camarero trae la comida.", 

            "La niña lleva un vestido rosa.",

            "Hoy desayuno huevo y zumo.", 

            "Mi hermano toca la guitarra.", 

            "El perro corre por el valle."

        ]

    }
]; // ВОТ ЗДЕСЬ БЫЛА ОШИБКА (не было скобки)

let currentSectionIdx = 0;
let completedTasks = new Set();
let mediaRecorders = {};
let audioChunks = {};
let globalAudioPlayer = new Audio();
globalAudioPlayer.playsInline = true; // Essential for some iOS interactions

function init() {
    const nav = document.getElementById('section-nav');
    if (!nav) return;
    nav.innerHTML = '';
    sections.forEach((s, idx) => {
        const btn = document.createElement('button');
        btn.innerText = s.letters;
        btn.onclick = () => loadSection(idx);
        btn.id = `nav-btn-${idx}`;
        nav.appendChild(btn);
    });
    loadSection(0);
}

function loadSection(idx) {
    currentSectionIdx = idx;
    const s = sections[idx];
    
    document.querySelectorAll('#section-nav button').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`nav-btn-${idx}`);
    if (activeBtn) activeBtn.classList.add('active');

    document.getElementById('main-title').innerText = s.title;
    document.getElementById('description-text').innerText = s.text;
    document.getElementById('video-container').innerHTML = `<video controls src="${s.video}"></video>`;
    
    const area = document.getElementById('exercise-area');
    area.innerHTML = '';

    if (s.ex1_words) {
        const d = document.createElement('div');
        d.className = 'exercise-block';
        d.innerHTML = `<h3>Упражнение 1: Повторите за мной</h3><p>${s.ex1_words}</p>
            <audio controls src="${s.ex1_audio}" onplay="markDone('${idx}-ex1')"></audio>`;
        area.appendChild(d);
    }

    if (s.ex2_files) {
        const d = document.createElement('div');
        d.className = 'exercise-block';
        d.innerHTML = `<h3>Упражнение 2: Прослушайте, запишите и сравните</h3>`;
        s.ex2_files.forEach(f => {
            d.appendChild(createRow(f, s.ex2_prefix + f + ".wav", `${idx}-${f}`));
        });
        area.appendChild(d);
    }

    if (s.bonus_phrases) {
        const d = document.createElement('div');
        d.className = 'exercise-block';
        d.innerHTML = `<h3>Бонусные фразы для записи</h3>`;
        s.bonus_phrases.forEach((phrase, i) => {
            d.appendChild(createRow(phrase, null, `bonus-${i}`));
        });
        
        const contact = document.createElement('div');
        contact.style = "margin-top:20px; padding:20px; background:#f0f8ff; border-radius:10px;";
        contact.innerHTML = `
            <input type="text" id="tg-contact" placeholder="Ваш @Telegram" style="padding:10px; width:80%; border-radius:5px; border:1px solid #ccc;">
            <button id="send-btn" onclick="sendToTelegram()" style="margin-top:10px; padding:12px 24px; background:#2196F3; color:white; border:none; border-radius:5px; cursor:pointer; width:100%;">ОТПРАВИТЬ ГОЛОСОВЫЕ НА ПРОВЕРКУ</button>
        `;
        d.appendChild(contact);
        area.appendChild(d);
    }

    document.getElementById('prev-btn').style.display = idx === 0 ? 'none' : 'block';
    document.getElementById('next-btn').style.display = idx === sections.length - 1 ? 'none' : 'block';
    
    updateProgress();
}

function createRow(text, audioSrc, id) {
    const row = document.createElement('div');
    row.className = 'word-row';
    row.style = "display:flex; align-items:center; gap:10px; margin-bottom:8px; border-bottom:1px solid #eee; padding:5px;";
    row.innerHTML = `
        <span style="flex-grow:1;">${text}</span>
        ${audioSrc ? `<button class="icon-btn" onclick="playA('${audioSrc}')">🎧</button>` : ''}
        <button class="icon-btn" id="rec-${id}" onclick="startR('${id}')">🎤</button>
        <button class="icon-btn" id="play-${id}" disabled onclick="playR('${id}')">🔊</button>
    `;
    return row;
}

function playA(src) {
    globalAudioPlayer.src = src;
    globalAudioPlayer.play().catch(e => console.log("Ошибка воспроизведения образца:", e));
}

// **CORRECTED FUNCTIONS FOR Recording and Playing back on iOS/iPhones**

async function startR(id) {
    const btn = document.getElementById(`rec-${id}`);
    
    if (btn.innerText === '🎤') {
        // 1. ПРИНУДИТЕЛЬНЫЙ СБРОС (для iOS)
        if (mediaRecorders[id]) {
            if (mediaRecorders[id].state !== 'inactive') {
                mediaRecorders[id].stop();
            }
            // Убираем старые связи, чтобы Safari думал, что это первый раз
            mediaRecorders[id] = null;
        }

        try {
            audioChunks[id] = [];
            document.getElementById(`play-${id}`).disabled = true;

            const stream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                } 
            });

            let mimeType = 'audio/mp4';
            if (!MediaRecorder.isTypeSupported(mimeType)) {
                mimeType = 'audio/webm';
            }

            const recorder = new MediaRecorder(stream, { mimeType });
            mediaRecorders[id] = recorder;

            recorder.ondataavailable = e => {
                if (e.data && e.data.size > 0) {
                    audioChunks[id].push(e.data);
                }
            };

            recorder.onstop = () => {
                // ВАЖНО: Выключаем все дорожки микрофона
                stream.getTracks().forEach(track => {
                    track.stop();
                    track.enabled = false;
                });
                
                if (audioChunks[id].length > 0) {
                    document.getElementById(`play-${id}`).disabled = false;
                    markDone(id);
                }
            };

            // Запускаем
            recorder.start(100); 
            btn.innerText = '🛑';
            
        } catch (err) {
            console.error("Ошибка:", err);
            alert("Safari заблокировал микрофон. Попробуйте обновить страницу или закрыть другие вкладки.");
        }
    } else {
        // Останавливаем запись
        if (mediaRecorders[id] && mediaRecorders[id].state !== 'inactive') {
            mediaRecorders[id].stop();
            btn.innerText = '🎤';
        }
    }
}
function playR(id) {
    if (!audioChunks[id] || audioChunks[id].length === 0) return;

    // 1. Подготавливаем данные
    const mimeType = mediaRecorders[id] ? mediaRecorders[id].mimeType : 'audio/mp4';
    const blob = new Blob(audioChunks[id], { type: mimeType });
    const url = URL.createObjectURL(blob);

    // 2. Настраиваем плеер (Критично для iOS)
    globalAudioPlayer.pause();
    globalAudioPlayer.src = url;
    globalAudioPlayer.load(); 

    // 3. Запускаем воспроизведение
    const playPromise = globalAudioPlayer.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Ошибка воспроизведения:", error);
            // Повторная попытка, если Safari притормозил
            globalAudioPlayer.play();
        });
    }

    // 4. Очистка памяти после завершения
    globalAudioPlayer.onended = () => {
        URL.revokeObjectURL(url);
    };
}

function markDone(id) {
    completedTasks.add(id);
    updateProgress();
}
function updateProgress() {
    let total = 0;
    sections.forEach(s => {
        if (s.ex1_words) total++;
        if (s.ex2_files) total += s.ex2_files.length;
        if (s.bonus_phrases) total += s.bonus_phrases.length;
    });
    let p = Math.round((completedTasks.size / total) * 100) || 0;
    const bar = document.getElementById('progress-bar');
    if(bar) { 
        bar.style.width = p + '%'; 
        bar.innerText = p + '%'; 
    }
}

async function sendToTelegram() {
    const contact = document.getElementById('tg-contact').value;
    if (!contact) return alert("Введите ваш Telegram!");
    const btn = document.getElementById('send-btn');
    btn.disabled = true; 
    btn.innerText = "Отправка...";

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: `📩 Новая проверка от: ${contact}` })
        });

        for (let id in audioChunks) {
            if (audioChunks[id].length > 0) {
                // **CRITICAL FIX**: Same as playR, always re-create the Blob when sending.
                const mimeType = mediaRecorders[id] && mediaRecorders[id].mimeType ? mediaRecorders[id].mimeType : 'audio/mp4';
                const currentBlob = new Blob(audioChunks[id], { type: mimeType });
                
                const fd = new FormData();
                fd.append('chat_id', CHAT_ID);
                // The third argument specifies a filename, essential for `sendVoice`.
                fd.append('voice', currentBlob, `rec_${id}.ogg`);
                
                await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendVoice`, { method: 'POST', body: fd });
            }
        }
        alert("Записи успешно отправлены!");
        showFinalMessage();
    } catch (e) { 
        console.error("Telegram API Error:", e);
        alert("Ошибка отправки"); 
        btn.disabled = false; 
        btn.innerText = "ОТПРАВИТЬ СНОВА";
    }
}

function showFinalMessage() {
    document.getElementById('content-area').innerHTML = `
        <div style="text-align:center; padding:40px;">
            <h1 style="color:#4CAF50;">¡Felicidades! 🎉</h1>
            <p>Вы успешно прошли курс. Я прослушаю ваши записи в ближайшее время!</p>
            <div style="background:#f9f9f9; padding:20px; border-radius:10px; margin-top:20px;">
                <p><a href="https://forms.gle/KVFgDnx87bwAmWDB7" target="_blank">Записаться на интенсив</a></p>
            </div>
        </div>`;
}

document.getElementById('next-btn').onclick = () => loadSection(currentSectionIdx + 1);
document.getElementById('prev-btn').onclick = () => loadSection(currentSectionIdx - 1);

window.onload = init;