// === Mantra Data (预设内容，后续可替换为AI) ===
const mantraData = {
    'work-stress': {
        mantras: [
            "I am capable of handling whatever comes my way today.",
            "My worth is not defined by my productivity.",
            "I choose to focus on what I can control and release what I cannot.",
            "This too shall pass. I've handled difficult times before.",
            "I give myself permission to take breaks without guilt."
        ],
        breathing: "4-7-8 breathing: Inhale for 4, hold for 7, exhale for 8"
    },
    'anxiety': {
        mantras: [
            "I am safe in this present moment.",
            "This feeling is temporary. It will pass.",
            "I am stronger than my anxious thoughts.",
            "I choose to face today with courage and calm.",
            "My anxiety does not define me."
        ],
        breathing: "Box breathing: Inhale 4, hold 4, exhale 4, hold 4"
    },
    'insomnia': {
        mantras: [
            "I release the day and welcome rest.",
            "My body knows how to find sleep.",
            "Tomorrow is a new beginning. Today is complete.",
            "I am grateful for this day and ready to rest.",
            "Peace flows through me as I prepare for sleep."
        ],
        breathing: "4-7-8 breathing: Inhale for 4, hold for 7, exhale for 8"
    },
    'overwhelmed': {
        mantras: [
            "One thing at a time. I don't need to do it all at once.",
            "I choose progress over perfection.",
            "It's okay to slow down. I don't need to rush.",
            "I break big tasks into small, manageable steps.",
            "I trust myself to figure this out, step by step."
        ],
        breathing: "Deep belly breaths: Inhale deeply into your belly, exhale slowly"
    },
    'self-doubt': {
        mantras: [
            "I am enough, exactly as I am.",
            "My voice matters. My perspective is valuable.",
            "I trust my ability to learn and grow.",
            "I embrace my unique journey and comparison to no one.",
            "I am worthy of the opportunities that come my way."
        ],
        breathing: "Confident breath: Inhale for 4, exhale with confidence for 6"
    },
    'burnout': {
        mantras: [
            "Rest is not a reward. Rest is a requirement.",
            "I honor my limits and protect my energy.",
            "It's okay to not be okay right now.",
            "I give myself permission to pause and recharge.",
            "My well-being is more important than my to-do list."
        ],
        breathing: "Restorative breathing: Long, slow exhales to activate relaxation"
    }
};

const generalMantras = {
    mantras: [
        "I am exactly where I need to be right now.",
        "This moment is temporary. Better days are ahead.",
        "I choose to respond with kindness to myself today.",
        "I trust the process of my journey.",
        "I am growing, learning, and becoming stronger every day."
    ],
    breathing: "Take 3 deep breaths and remind yourself: you've got this."
};

// === Config ===
const FREE_GENERATIONS = 3;
const STORAGE_KEY = 'mantragen_free_generations';

// === Stripe Payment Links ===
const paymentLinks = {
    single: 'https://buy.stripe.com/test_cNi6oGdNeakB5gn20beZ200',
    monthly: 'https://buy.stripe.com/test_aFafZg24wakB24b20beZ201',
    yearly: 'https://buy.stripe.com/test_28E6oG10scsJaAHawHeZ202'
};

// === State ===
let freeGenerationsUsed = 0;

// === DOM Elements ===
const step1 = document.getElementById('step1');
const loading = document.getElementById('loading');
const result = document.getElementById('result');
const paywall = document.getElementById('paywall');

const scenarioBtns = document.querySelectorAll('.scenario-btn');
const customInput = document.getElementById('custom-scenario');
const useCustomBtn = document.getElementById('use-custom');
const mantraText = document.getElementById('mantra-text');
const breathingText = document.getElementById('breathing-text');
const copyBtn = document.getElementById('copy-btn');
const newMantraBtn = document.getElementById('new-mantra');
const remaining = document.getElementById('remaining');

// === Initialize ===
function init() {
    loadFreeGenerations();
    attachEventListeners();
}

function loadFreeGenerations() {
    const stored = localStorage.getItem(STORAGE_KEY);
    freeGenerationsUsed = stored ? parseInt(stored) : 0;
}

function saveFreeGenerations() {
    localStorage.setItem(STORAGE_KEY, freeGenerationsUsed.toString());
}

function getRemainingGenerations() {
    return Math.max(0, FREE_GENERATIONS - freeGenerationsUsed);
}

// === Event Listeners ===
function attachEventListeners() {
    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const scenario = btn.dataset.scenario;
            generateMantra(scenario);
        });
    });

    useCustomBtn.addEventListener('click', () => {
        const custom = customInput.value.trim();
        if (custom) {
            generateMantra('custom', custom);
        }
    });

    copyBtn.addEventListener('click', copyToClipboard);
    newMantraBtn.addEventListener('click', resetToStep1);

    // Pricing buttons
    document.querySelectorAll('.pricing-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', handlePricingClick);
    });

    // Paywall button
    const paywallBtn = document.querySelector('#paywall .btn-primary');
    if (paywallBtn) {
        paywallBtn.addEventListener('click', () => {
            // Scroll to pricing section
            document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// === Handle Pricing Button Click ===
function handlePricingClick(e) {
    const card = e.target.closest('.pricing-card');
    const plan = card.dataset.plan;

    let paymentUrl = '';
    switch(plan) {
        case 'single':
            paymentUrl = paymentLinks.single;
            break;
        case 'monthly':
            paymentUrl = paymentLinks.monthly;
            break;
        case 'yearly':
            paymentUrl = paymentLinks.yearly;
            break;
    }

    if (paymentUrl) {
        window.open(paymentUrl, '_blank');
    } else {
        alert('Payment link not configured yet. Please check back later!');
    }
}

// === Generate Mantra ===
function generateMantra(scenario, customInput = '') {
    // Check if user has free generations left
    if (getRemainingGenerations() <= 0) {
        showPaywall();
        return;
    }

    // Show loading
    showStep('loading');

    // Simulate AI generation (2 seconds)
    setTimeout(() => {
        const data = getMantraData(scenario, customInput);
        displayMantra(data);

        // Increment and save
        freeGenerationsUsed++;
        saveFreeGenerations();

        showStep('result');
    }, 2000);
}

function getMantraData(scenario, customInput) {
    let data;

    if (scenario === 'custom') {
        // Use general mantras for custom input
        data = generalMantras;
    } else {
        data = mantraData[scenario];
    }

    // Randomly select one mantra
    const randomIndex = Math.floor(Math.random() * data.mantras.length);
    return {
        mantra: data.mantras[randomIndex],
        breathing: data.breathing
    };
}

function displayMantra(data) {
    mantraText.textContent = data.mantra;
    breathingText.textContent = data.breathing;

    // Update remaining count
    const remainingCount = getRemainingGenerations();
    if (remainingCount > 0) {
        remaining.textContent = `${remainingCount} free generation${remainingCount > 1 ? 's' : ''} remaining`;
    } else {
        remaining.textContent = 'This was your last free generation';
    }
}

// === Navigation ===
function showStep(stepName) {
    // Hide all steps
    step1.classList.remove('active');
    loading.classList.remove('active');
    result.classList.remove('active');
    paywall.classList.remove('active');

    // Show target step
    if (stepName === 'step1') {
        step1.classList.add('active');
    } else if (stepName === 'loading') {
        loading.classList.add('active');
    } else if (stepName === 'result') {
        result.classList.add('active');
    } else if (stepName === 'paywall') {
        paywall.classList.add('active');
    }

    // Update step indicator
    updateStepIndicator(stepName);
}

function updateStepIndicator(stepName) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.remove('active'));

    if (stepName === 'step1') {
        steps[0].classList.add('active');
    } else if (stepName === 'loading' || stepName === 'result' || stepName === 'paywall') {
        steps[0].classList.add('active');
        steps[1].classList.add('active');
    }
}

function showPaywall() {
    showStep('paywall');
}

function resetToStep1() {
    showStep('step1');
    customInput.value = '';
}

// === Copy to Clipboard ===
function copyToClipboard() {
    const text = `My Power Mantra:\n\n"${mantraText.textContent}"\n\nBreathing Exercise:\n${breathingText.textContent}`;

    navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy to Clipboard';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// === Initialize on Load ===
init();
