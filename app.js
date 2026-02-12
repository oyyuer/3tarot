// ===== 塔罗牌数据库 (22张大阿尔卡那) =====
const TAROT_DECK = [
    {
        id: 0,
        name_cn: "愚者",
        symbol: "🌱",
        gradient: "linear-gradient(135deg, #a8e6cf, #dcedc1)",
        keywords: ["新开始", "纯真", "冒险", "自由", "信任"],
        gentle_meaning: "愚者邀请你用初心看待这个世界。不必担心别人的眼光,勇敢地走你想走的路。每一次尝试都是珍贵的体验,即使跌倒也是成长的一部分。",
        advice: ["今天做一件从未尝试过的小事", "用好奇心代替评判"]
    },
    {
        id: 1,
        name_cn: "魔术师",
        symbol: "✨",
        gradient: "linear-gradient(135deg, #ffd3a5, #fd6585)",
        keywords: ["创造力", "专注", "行动", "潜能", "显化"],
        gentle_meaning: "你拥有将想法变为现实的能力。所需的工具和资源其实都在身边,只需要专注与行动。相信自己的创造力,开始动手吧。",
        advice: ["列出一件想做的事,立即开始第一步", "相信自己已经准备好了"]
    },
    {
        id: 2,
        name_cn: "女祭司",
        symbol: "🌙",
        gradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        keywords: ["直觉", "内在智慧", "倾听", "神秘", "静心"],
        gentle_meaning: "答案在你的内心深处。此刻不必急于向外寻找,静下来聆听内在的声音。你的直觉比你想象的更可靠。",
        advice: ["花10分钟安静独处,什么都不做", "相信第一感觉"]
    },
    {
        id: 3,
        name_cn: "女皇",
        symbol: "🌸",
        gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        keywords: ["丰盛", "滋养", "创造", "感官", "爱"],
        gentle_meaning: "此刻是滋养自己的时候。无论是身体、情感还是创造力,都值得你温柔对待。允许自己享受生活中的美好,你值得被照顾。",
        advice: ["为自己准备一顿美味的食物", "感受身体的需要,给予它温柔"]
    },
    {
        id: 4,
        name_cn: "皇帝",
        symbol: "👑",
        gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        keywords: ["结构", "秩序", "稳定", "责任", "领导"],
        gentle_meaning: "为自己建立温和的秩序与边界。不是刻板的规则,而是让你感到安全的结构。学会温柔地掌握自己的生活节奏。",
        advice: ["制定一个简单的日常仪式", "为自己设定清晰但不苛刻的界限"]
    },
    {
        id: 5,
        name_cn: "教皇",
        symbol: "📖",
        gradient: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
        keywords: ["传统", "学习", "指引", "信念", "智慧"],
        gentle_meaning: "有时候传统智慧能给予我们支持。不必独自摸索,寻求你信任的人或系统的指引。学习是一段温柔的旅程。",
        advice: ["向前辈或导师请教一个困惑", "阅读一段启发性的文字"]
    },
    {
        id: 6,
        name_cn: "恋人",
        symbol: "💕",
        gradient: "linear-gradient(135deg, #fccb90, #d57eeb)",
        keywords: ["选择", "关系", "和谐", "价值观", "连接"],
        gentle_meaning: "重要的选择面前,倾听你的心。真正的和谐来自于尊重自己的价值观。与他人的连接,首先建立在与自己的连接之上。",
        advice: ["明确一个重要选择中对你最重要的是什么", "向珍视的人表达感谢"]
    },
    {
        id: 7,
        name_cn: "战车",
        symbol: "🏹",
        gradient: "linear-gradient(135deg, #fa709a, #fee140)",
        keywords: ["前进", "意志", "专注", "突破", "控制"],
        gentle_meaning: "现在是温柔而坚定地前进的时刻。保持专注,但不必用力过猛。用你的意志力引导自己,而非强迫。",
        advice: ["确定今天最重要的一件事,优先完成它", "感受前进的力量,而非焦虑"]
    },
    {
        id: 8,
        name_cn: "力量",
        symbol: "🦁",
        gradient: "linear-gradient(135deg, #fddb92, #d1fdff)",
        keywords: ["温柔", "勇气", "耐心", "慈悲", "内在力量"],
        gentle_meaning: "真正的力量是温柔的。用慈悲对待自己和他人,这比愤怒更有力量。你比想象中更勇敢,也更柔软。",
        advice: ["对自己说一句鼓励的话", "用耐心而非强迫来处理挑战"]
    },
    {
        id: 9,
        name_cn: "隐者",
        symbol: "🕯️",
        gradient: "linear-gradient(135deg, #d299c2, #fef9d7)",
        keywords: ["独处", "内省", "寻找", "智慧", "引导"],
        gentle_meaning: "此刻需要一个人静静地待一会儿。在独处中,你会找到方向。点亮内心的灯,它会照亮你的路。",
        advice: ["给自己一段完全独处的时光", "写下此刻的感受与思考"]
    },
    {
        id: 10,
        name_cn: "命运之轮",
        symbol: "☸️",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
        keywords: ["变化", "周期", "机遇", "接纳", "流动"],
        gentle_meaning: "一切都在流动变化,这是宇宙的规律。接纳此刻的变化,它可能带来意想不到的礼物。顺流而行,而非对抗。",
        advice: ["接纳一个无法控制的变化", "看见变化中的可能性"]
    },
    {
        id: 11,
        name_cn: "正义",
        symbol: "⚖️",
        gradient: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        keywords: ["平衡", "公正", "真实", "责任", "清晰"],
        gentle_meaning: "此刻需要诚实地看待情况。寻找平衡,为自己的选择负责,但不必苛责。真相会让你自由。",
        advice: ["诚实地面对一个逃避的问题", "寻找生活中失衡的部分,温柔调整"]
    },
    {
        id: 12,
        name_cn: "倒吊人",
        symbol: "🔄",
        gradient: "linear-gradient(135deg, #b721ff, #21d4fd)",
        keywords: ["放手", "换个角度", "暂停", "臣服", "等待"],
        gentle_meaning: "有时候,停下来比继续前进更需要勇气。换个角度看问题,臣服于当下,答案会在适当的时候出现。",
        advice: ["暂停一个纠结的问题,先放一放", "从完全相反的角度看待一件事"]
    },
    {
        id: 13,
        name_cn: "死神",
        symbol: "🦋",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
        keywords: ["转化", "结束", "新生", "释放", "蜕变"],
        gentle_meaning: "结束是为了新的开始。放下那些不再适合你的,为新的可能性腾出空间。蜕变可能不舒服,但它是成长的必经之路。",
        advice: ["放下一件不再服务你的事物", "拥抱正在发生的转变"]
    },
    {
        id: 14,
        name_cn: "节制",
        symbol: "🌊",
        gradient: "linear-gradient(135deg, #ffeaa7, #74b9ff)",
        keywords: ["平衡", "调和", "耐心", "适度", "融合"],
        gentle_meaning: "在两个极端之间找到中间路径。不必全有或全无,温和地融合不同部分。耐心是一种美德,慢慢来。",
        advice: ["在两个选择之间寻找第三种可能", "调节生活节奏,避免极端"]
    },
    {
        id: 15,
        name_cn: "恶魔",
        symbol: "⛓️",
        gradient: "linear-gradient(135deg, #fc4a1a, #f7b733)",
        keywords: ["束缚", "欲望", "阴影", "觉察", "自由"],
        gentle_meaning: "注意到那些限制你的模式与习惯。不必自责,只需温柔地觉察。意识到锁链的存在,就是解锁的第一步。",
        advice: ["觉察一个重复的负面模式", "对自己的阴影面说:我看见你了"]
    },
    {
        id: 16,
        name_cn: "高塔",
        symbol: "⚡",
        gradient: "linear-gradient(135deg, #ff6b6b, #feca57)",
        keywords: ["突破", "释放", "真相", "重建", "解放"],
        gentle_meaning: "旧的结构正在崩塌,虽然不安,但这为真实的重建创造空间。在混乱中,记得呼吸。这是解放,不是毁灭。",
        advice: ["允许一个伪装崩塌,展现真实的自己", "在变化中找一个锚点,稳住自己"]
    },
    {
        id: 17,
        name_cn: "星星",
        symbol: "⭐",
        gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
        keywords: ["希望", "疗愈", "灵感", "宁静", "信任"],
        gentle_meaning: "即使在黑暗中,星光依然闪耀。此刻是疗愈与恢复希望的时刻。相信未来,温柔地照顾自己。",
        advice: ["做一件滋养心灵的事", "写下三件让你感到希望的事"]
    },
    {
        id: 18,
        name_cn: "月亮",
        symbol: "🌙",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
        keywords: ["潜意识", "直觉", "梦境", "情绪", "未知"],
        gentle_meaning: "情绪如潮汐般涨落,这是自然的。不必理解所有感受,只需允许它们存在。相信你的直觉,即使路途不清晰。",
        advice: ["记录一个梦境或直觉", "允许情绪流动,不评判"]
    },
    {
        id: 19,
        name_cn: "太阳",
        symbol: "☀️",
        gradient: "linear-gradient(135deg, #f6d365, #fda085)",
        keywords: ["喜悦", "活力", "成功", "纯真", "庆祝"],
        gentle_meaning: "阳光照耀,一切都明亮清晰。享受这份喜悦与活力,庆祝你的成就。记得保持内心的纯真与热情。",
        advice: ["做一件让你感到纯粹快乐的事", "庆祝今天的每一个小胜利"]
    },
    {
        id: 20,
        name_cn: "审判",
        symbol: "📯",
        gradient: "linear-gradient(135deg, #fa8bff, #2bd2ff)",
        keywords: ["觉醒", "召唤", "宽恕", "更新", "使命"],
        gentle_meaning: "此刻是觉醒与更新的时刻。倾听内在的召唤,原谅过去,拥抱新的自己。你正在蜕变为更真实的版本。",
        advice: ["原谅自己一个过去的错误", "回应内心真正的召唤"]
    },
    {
        id: 21,
        name_cn: "世界",
        symbol: "🌍",
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
        keywords: ["完成", "整合", "圆满", "成就", "新周期"],
        gentle_meaning: "一个周期圆满结束,你已经走到了终点。享受这份成就感,同时准备迎接新的开始。你已经完整。",
        advice: ["回顾并庆祝一段旅程的完成", "感恩此刻的圆满"]
    }
];

// ===== 全局状态 =====
let currentState = {
    selectedCards: [],        // 用户选择的12张牌中的索引
    selectedCardData: [],     // 选中的3张完整牌数据
    shuffledDeck: [],         // 洗牌后的12张牌
    todayReading: null,       // 今日解读
    soundEnabled: false,      // 音效开关
    isRedrawing: false        // 是否仅本次重抽
};

// ===== 工具函数 =====

// 获取今日日期字符串 (YYYY-MM-DD)
function getTodayDateString() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// 格式化日期显示 (YYYY年MM月DD日)
function formatDateDisplay(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${year}年${month}月${day}日`;
}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 从完整牌库中随机抽取12张
function dealCards() {
    const shuffled = shuffleArray(TAROT_DECK);
    return shuffled.slice(0, 12);
}

// 保存今日解读到 localStorage
function saveTodayReading(reading) {
    const today = getTodayDateString();
    const historyKey = 'tarot_history';
    const history = JSON.parse(localStorage.getItem(historyKey) || '{}');
    
    history[today] = reading;
    localStorage.setItem(historyKey, JSON.stringify(history));
}

// 获取今日解读
function getTodayReading() {
    const today = getTodayDateString();
    const historyKey = 'tarot_history';
    const history = JSON.parse(localStorage.getItem(historyKey) || '{}');
    return history[today] || null;
}

// 获取历史记录
function getHistory() {
    const historyKey = 'tarot_history';
    return JSON.parse(localStorage.getItem(historyKey) || '{}');
}

// 生成解读内容
function generateReading(selectedCards) {
    const positions = [
        { title: "现状", subtitle: "你当下的能量" },
        { title: "需要看见的部分", subtitle: "值得关注的面向" },
        { title: "建议", subtitle: "今天如何照顾自己" }
    ];

    const cards = selectedCards.map((card, index) => ({
        position: positions[index],
        card: card
    }));

    // 生成今日总结
    const summary = generateSummary(selectedCards);
    
    // 从第三张牌取建议
    const actions = selectedCards[2].advice;
    
    // 生成今日提醒
    const reminders = [
        "记得,你比想象中更强大,也更值得被温柔对待。",
        "今天,请对自己多一些耐心与善意。",
        "每一刻都是新的开始,你可以选择如何前进。",
        "相信过程,你正走在自己的路上。",
        "今天,给自己一个温柔的拥抱吧。"
    ];
    const reminder = reminders[Math.floor(Math.random() * reminders.length)];

    return {
        date: getTodayDateString(),
        cards: cards,
        summary: summary,
        actions: actions,
        reminder: reminder
    };
}

// 生成温柔的总结叙事
function generateSummary(selectedCards) {
    const templates = [
        `${selectedCards[0].name_cn}告诉你,此刻${selectedCards[0].keywords[0]}的能量环绕着你。${selectedCards[1].name_cn}提醒你关注${selectedCards[1].keywords[0]}的部分,而${selectedCards[2].name_cn}建议你通过${selectedCards[2].keywords[0]}来照顾自己。今天,请温柔地对待自己的每一个感受,相信你正走在属于自己的道路上。`,
        
        `今天的牌告诉我们一个温柔的故事:你正处于${selectedCards[0].keywords[0]}的状态中,这是很自然的。${selectedCards[1].name_cn}邀请你看见${selectedCards[1].keywords[1]},不是要求你改变,而是理解。${selectedCards[2].name_cn}为你指出方向——${selectedCards[2].keywords[0]}会是今天的关键词。`,
        
        `从${selectedCards[0].name_cn}到${selectedCards[2].name_cn},这是一段从${selectedCards[0].keywords[0]}到${selectedCards[2].keywords[0]}的旅程。${selectedCards[1].name_cn}是中间的桥梁,提醒你${selectedCards[1].keywords[0]}同样重要。记得,每一步都算数,每一个感受都值得被看见。`
    ];
    
    return templates[Math.floor(Math.random() * templates.length)];
}

// ===== 屏幕切换 =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// ===== 首页初始化 =====
function initHomePage() {
    const today = getTodayDateString();
    document.getElementById('current-date').textContent = formatDateDisplay(today);
    
    // 检查今天是否已经抽过牌
    const todayReading = getTodayReading();
    if (todayReading && !currentState.isRedrawing) {
        currentState.todayReading = todayReading;
    }
}

// ===== 洗牌阶段 =====
function startShuffle() {
    showScreen('shuffle-screen');
    
    // 发牌 - 从22张中随机抽12张
    currentState.shuffledDeck = dealCards();
}

function finishShuffle() {
    showScreen('select-screen');
    renderSelectableCards();
}

// ===== 选牌阶段 =====
function renderSelectableCards() {
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';
    
    currentState.shuffledDeck.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'selectable-card card-back';
        cardEl.dataset.index = index;
        
        cardEl.addEventListener('click', () => toggleCardSelection(index, cardEl));
        
        grid.appendChild(cardEl);
    });
}

function toggleCardSelection(index, cardEl) {
    const selectedIndex = currentState.selectedCards.indexOf(index);
    
    if (selectedIndex > -1) {
        // 取消选择
        currentState.selectedCards.splice(selectedIndex, 1);
        cardEl.classList.remove('selected');
    } else {
        // 选择新卡
        if (currentState.selectedCards.length < 3) {
            currentState.selectedCards.push(index);
            cardEl.classList.add('selected');
        }
    }
    
    // 更新UI
    updateSelectionUI();
}

function updateSelectionUI() {
    const count = currentState.selectedCards.length;
    document.getElementById('selection-count').textContent = `已选 ${count}/3`;
    
    // 更新按钮状态
    const confirmBtn = document.getElementById('confirm-selection-btn');
    confirmBtn.disabled = count < 3;
    
    // 如果已选3张,禁用其他卡片
    const allCards = document.querySelectorAll('.selectable-card');
    allCards.forEach((card, index) => {
        if (count === 3 && !currentState.selectedCards.includes(index)) {
            card.classList.add('disabled');
        } else {
            card.classList.remove('disabled');
        }
    });
}

function confirmSelection() {
    // 按选择顺序获取卡片数据
    currentState.selectedCardData = currentState.selectedCards.map(
        index => currentState.shuffledDeck[index]
    );
    
    showScreen('reveal-screen');
    revealCards();
}

// ===== 翻牌阶段 =====
function revealCards() {
    const container = document.getElementById('reveal-cards-container');
    container.innerHTML = '';
    
    currentState.selectedCardData.forEach((card, index) => {
        const flipCard = createFlipCard(card);
        container.appendChild(flipCard);
        
        // 延迟翻牌
        setTimeout(() => {
            flipCard.classList.add('flipped');
        }, index * 400 + 500);
    });
    
    // 所有牌翻完后,延迟跳转到解读页
    setTimeout(() => {
        showReading();
    }, currentState.selectedCardData.length * 400 + 2000);
}

function createFlipCard(card) {
    const flipCard = document.createElement('div');
    flipCard.className = 'flip-card';
    
    flipCard.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front card-back"></div>
            <div class="flip-card-back" style="background: ${card.gradient}">
                <div class="card-face">
                    <div class="card-symbol">${card.symbol}</div>
                    <div class="card-name">${card.name_cn}</div>
                </div>
            </div>
        </div>
    `;
    
    return flipCard;
}

// ===== 解读阶段 =====
function showReading() {
    const reading = generateReading(currentState.selectedCardData);
    currentState.todayReading = reading;
    
    showScreen('reading-screen');
    renderReading(reading);
}

function renderReading(reading) {
    // 设置日期
    document.getElementById('reading-date').textContent = formatDateDisplay(reading.date);
    
    // 渲染每张牌的解读
    const cardsContainer = document.getElementById('reading-cards');
    cardsContainer.innerHTML = '';
    
    reading.cards.forEach(item => {
        const cardItem = document.createElement('div');
        cardItem.className = 'reading-card-item';
        
        const keywordsHTML = item.card.keywords
            .map(kw => `<span class="keyword">${kw}</span>`)
            .join('');
        
        cardItem.innerHTML = `
            <div class="reading-position">${item.position.title} · ${item.position.subtitle}</div>
            <h3 class="reading-card-name">${item.card.name_cn}</h3>
            <div class="reading-keywords">${keywordsHTML}</div>
            <p class="reading-meaning">${item.card.gentle_meaning}</p>
        `;
        
        cardsContainer.appendChild(cardItem);
    });
    
    // 今日总结
    document.getElementById('summary-text').textContent = reading.summary;
    
    // 今日小行动
    const actionsList = document.getElementById('actions-list');
    actionsList.innerHTML = '';
    reading.actions.forEach(action => {
        const li = document.createElement('li');
        li.textContent = action;
        actionsList.appendChild(li);
    });
    
    // 今日提醒
    document.getElementById('reminder-text').textContent = reading.reminder;
}

function saveReading() {
    if (currentState.todayReading && !currentState.isRedrawing) {
        saveTodayReading(currentState.todayReading);
        alert('今日解读已保存 ✨');
    }
}

// ===== 历史记录 =====
function showHistory() {
    showScreen('history-screen');
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('history-list');
    const history = getHistory();
    const dates = Object.keys(history).sort().reverse();
    
    if (dates.length === 0) {
        historyList.innerHTML = '<div class="empty-history">还没有任何记录哦</div>';
        return;
    }
    
    historyList.innerHTML = '';
    dates.forEach(date => {
        const reading = history[date];
        const item = document.createElement('div');
        item.className = 'history-item';
        
        const cardNames = reading.cards.map(c => c.card.name_cn).join(' · ');
        
        item.innerHTML = `
            <div class="history-date">${formatDateDisplay(date)}</div>
            <div class="history-cards">${cardNames}</div>
        `;
        
        item.addEventListener('click', () => {
            currentState.todayReading = reading;
            showScreen('reading-screen');
            renderReading(reading);
        });
        
        historyList.appendChild(item);
    });
}

// ===== 模态框 =====
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ===== 音效控制 =====
function toggleSound() {
    currentState.soundEnabled = !currentState.soundEnabled;
    const icon = document.querySelector('.sound-icon');
    icon.textContent = currentState.soundEnabled ? '🔊' : '🔇';
}

// ===== 事件绑定 =====
function bindEvents() {
    // 首页
    document.getElementById('start-btn').addEventListener('click', () => {
        const todayReading = getTodayReading();
        if (todayReading && !currentState.isRedrawing) {
            showModal('already-drawn-modal');
        } else {
            startShuffle();
        }
    });
    
    document.getElementById('history-btn').addEventListener('click', showHistory);
    
    // 模态框
    document.getElementById('view-today-btn').addEventListener('click', () => {
        hideModal('already-drawn-modal');
        currentState.todayReading = getTodayReading();
        showScreen('reading-screen');
        renderReading(currentState.todayReading);
    });
    
    document.getElementById('redraw-btn').addEventListener('click', () => {
        hideModal('already-drawn-modal');
        currentState.isRedrawing = true;
        currentState.selectedCards = [];
        currentState.selectedCardData = [];
        startShuffle();
    });
    
    // 洗牌
    document.getElementById('finish-shuffle-btn').addEventListener('click', finishShuffle);
    document.getElementById('skip-shuffle-btn').addEventListener('click', finishShuffle);
    
    // 选牌
    document.getElementById('confirm-selection-btn').addEventListener('click', confirmSelection);
    
    // 解读
    document.getElementById('save-reading-btn').addEventListener('click', saveReading);
    document.getElementById('return-home-btn').addEventListener('click', () => {
        currentState.isRedrawing = false;
        currentState.selectedCards = [];
        currentState.selectedCardData = [];
        showScreen('home-screen');
    });
    
    // 历史
    document.getElementById('back-from-history-btn').addEventListener('click', () => {
        showScreen('home-screen');
    });
    
    // 音效
    document.getElementById('sound-toggle').addEventListener('click', toggleSound);
}

// ===== 应用初始化 =====
function initApp() {
    initHomePage();
    bindEvents();
    showScreen('home-screen');
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
