/* ============================================
   ORVIONAR TECH – AI Chatbot (Groq Powered)
   Model: llama3-70b-8192
   ============================================ */

const OrvionarBot = (() => {

  // Connect to our secure backend proxy instead of exposing the GROQ_API_KEY
  const BACKEND_URL = 'https://orvionar-tech.onrender.com/api/chat'; // Change to live URL in production

  /* ---- SYSTEM PROMPT (Company Knowledge Base) ---- */
  const SYSTEM_PROMPT = `You are ORVIONAR AI, the official AI assistant for Orvionar Tech — an AI-powered edtech company based in Bengaluru, India. You must maintain a formal, highly professional, and concise tone at all times. Always respond in 2–4 sentences unless more detail is strictly necessary. Do NOT use emojis under any circumstances.

COMPANY INFORMATION:
- Name: Orvionar Tech
- Tagline: "Learn Smarter. Grow Faster. Get Hired."
- Description: AI-powered edtech platform transforming careers with expert mentors, live sessions, and real-world projects.
- Address: H206, 36/5, Hustlehub Tech Park, Somasundarapalya Main Rd, Adjacent 27th Main Rd, ITI Layout, Sector 2, Haralukunte Village, HSR Layout, Bengaluru – 560102
- Email: info@orvionar.in | Support: support@orvionar.in
- Phone / WhatsApp: +91 7483905485
- Website: https://www.orvionar.in
- Social: facebook.com/orvionar | twitter.com/orvionar | instagram.com/orvionar | linkedin: orvionar-tech-private-limited
- Working Hours: Monday–Saturday, 9:00 AM – 7:00 PM IST

KEY STATS:
- 10,000+ learners trained
- 97% placement rate
- 50+ expert mentors
- 30+ courses
- Most learners get hired within 3 months

VISION: To be a global leader in education and training, fostering innovation, excellence, and lifelong learning for all.
MISSION: To provide accessible, high-quality education that equips learners with practical skills for real-world challenges.

FEATURES:
1. Live Interactive Sessions – LIVE classes with instant doubt resolution
2. Career-Defining Projects – Real job scenario projects
3. Learning Activities – Chapter-wise Quizzes & Assignments
4. Doubt Buster Sessions – 24/7 Live Discussion with batchmates & Faculty
5. Community Access – Network of learners and professionals
6. AI-Enhanced LMS – Personalized learning powered by AI
7. Industry-Recognized Certification – Certificates valued by top companies
8. Dedicated Career Support – Placement guidance and job assistance

OUR DOMAINS & COURSES:
We provide specialized, industry-relevant courses across multiple educational domains:
1. CSE / IT: MERN Stack, Data Science & Analytics, Gen-AI & Prompt Engineering, Full Stack Web Development, .NET Full Stack, Artificial Intelligence, Machine Learning, Azure Cloud Computing, Cyber Security, QA Testing & Automation, Power BI, Data Structures & Algorithms, Android Development.
2. ECE / EEE: Embedded Systems, VLSI Design, IoT (Internet of Things).
3. Management / B.Com: Digital Marketing, Business Analytics, HR Management, Financial Accounting.
4. Pharmacy: Pharmacovigilance, Clinical Data Management, Medical Coding.
5. Agriculture: Agri-Tech, Precision Farming technologies.
6. Others: Custom upskilling programs tailored for evolving industries.

OPEN JOBS AT ORVIONAR:
- Online Instructor – Web Development (Remote, Full-time)
- Content Developer – Data Science (Remote, Full-time)
- Student Success Manager (Hybrid, Full-time)
- Talent Pool available for future roles

HOW TO ENROLL / SIGN UP:
- Users can sign up or access their account via 'login.html' (click 'My-library' in the navigation bar).
- Users can enroll directly in any program by navigating to the specific course page and clicking 'Enroll Now'.

PLACEMENTS & HIRING PARTNERS:
TCS, Infosys, Wipro, HCL, Capgemini, IBM, Microsoft, L&T, Merck, Cipla and many more.

ENROLLMENT: Visit orvionar.in/domains → click Know More → Enroll Now, or call/WhatsApp +91 7483905485.
STUDENT PORTAL: Login at orvionar.in/my-library to access dashboard, courses, and profile.
FEES: Competitive fees with EMI options. Contact us at info@orvionar.in or +91 7483905485 for exact pricing.

RULES:
- Always be helpful and positive about Orvionar Tech.
- If asked about fees/pricing, mention competitive pricing with EMI and direct them to contact us.
- If asked something unrelated to Orvionar, gently redirect to how Orvionar can help them.
- Never mention competitor platforms.
- Keep responses concise and actionable.
- End with a helpful follow-up suggestion when relevant.`;

  let conversationHistory = [{ role: 'system', content: SYSTEM_PROMPT }];

  /* ---- TIME ---- */
  function getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  /* ---- MARKDOWN → HTML ---- */
  function md(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code style="background:#f3f4f6;padding:2px 5px;border-radius:4px;font-size:0.85em">$1</code>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br/>');
  }

  /* ---- RENDER MESSAGE ---- */
  function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  function renderMsg(type, text, chips) {
    const messagesEl = document.getElementById('chatbot-messages');
    if (!messagesEl) return;

    const div = document.createElement('div');
    div.className = `msg ${type}`;

    if (type === 'bot') {
      div.innerHTML = `
        <div class="msg-avatar"><i class="fa-solid fa-headset" style="color:white; font-size: 0.8rem;"></i></div>
        <div>
          <div class="msg-bubble">${md(text)}</div>
          ${chips && chips.length ? `<div class="msg-chips">${chips.map(c => `<button class="msg-chip" onclick="OrvionarChat.sendChip('${c.replace(/'/g,"\\\\'")}')">${c}</button>`).join('')}</div>` : ''}
          <span class="msg-time">${getTime()}</span>
        </div>`;
    } else {
      div.innerHTML = `
        <div>
          <div class="msg-bubble">${sanitizeHTML(text)}</div>
          <span class="msg-time" style="text-align:right;display:block">${getTime()}</span>
        </div>`;
    }
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  /* ---- TYPING INDICATOR ---- */
  function showTyping() {
    const el = document.getElementById('chatbot-messages');
    if (!el) return;
    const div = document.createElement('div');
    div.id = 'typing-indicator';
    div.className = 'msg bot';
    div.innerHTML = `<div class="msg-avatar"><i class="fa-solid fa-headset" style="color:white; font-size: 0.8rem;"></i></div><div class="msg-bubble"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  }

  /* ---- CALL GROQ API ---- */
  async function callGroq(userMessage) {
    conversationHistory.push({ role: 'user', content: userMessage });

    // Explicit check for GitHub Pages / static hosting without backend
    if (BACKEND_URL.includes('localhost') && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      console.error('Chatbot requires backend infrastructure to proxy API calls securely. Falling back to static responses.');
      // Pop the user message because getFallback doesn't add to history in the same way, or we can just leave it
      conversationHistory.pop();
      return getFallback(userMessage);
    }

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: conversationHistory
        })
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || 'API error');
      }

      const data = await response.json();
      const reply = data.choices[0].message.content.trim();
      conversationHistory.push({ role: 'assistant', content: reply });

      // Keep context window manageable (max 20 messages + system)
      if (conversationHistory.length > 22) {
        conversationHistory = [
          conversationHistory[0],
          ...conversationHistory.slice(-20)
        ];
      }

      return reply;
    } catch (err) {
      console.error('Groq API error:', err);
      conversationHistory.pop(); // remove failed user message
      return getFallback(userMessage);
    }
  }

  /* ---- FALLBACK (if API fails) ---- */
  function getFallback(msg) {
    const m = msg.toLowerCase();
    if (/course|program/.test(m)) return "We offer 13+ courses including MERN Stack, Data Science, Gen-AI, Cyber Security and more. Please visit our Courses page or contact us at +91 7483905485 for further details.";
    if (/fee|price|cost/.test(m)) return "For detailed course fees and EMI options, kindly contact us at info@orvionar.in or via WhatsApp at +91 7483905485. We offer competitive pricing structures.";
    if (/placement|job/.test(m)) return "Our programs boast a 97% placement rate, with most learners securing employment within three months. Please reach out to +91 7483905485 for more details on career support.";
    if (/contact|address|phone/.test(m)) return "Call/WhatsApp: +91 7483905485 | Email: info@orvionar.in | Address: Hustlehub Tech Park, HSR Layout, Bengaluru – 560102.";
    return "I am here to assist you. You may also contact our support team directly at +91 7483905485 or info@orvionar.in for further assistance. How may I help you today?";
  }

  /* ---- QUICK CHIPS based on context ---- */
  function getChips(reply) {
    return null;
  }

  /* ---- SEND MESSAGE ---- */
  async function sendMessage(text) {
    if (!text || !text.trim()) return;
    const input = document.getElementById('chatbot-input');
    if (input) input.value = '';

    renderMsg('user', text, null);
    showTyping();

    const reply = await callGroq(text);
    hideTyping();
    renderMsg('bot', reply, getChips(reply));
  }

  /* ---- INIT ---- */
  function init() {
    const trigger  = document.getElementById('chatbot-trigger');
    const win      = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close');
    const sendBtn  = document.getElementById('chatbot-send');
    const inputEl  = document.getElementById('chatbot-input');

    if (!trigger || !win) return;

    // Toggle open/close
    trigger.addEventListener('click', () => {
      win.classList.toggle('open');
      const notif = trigger.querySelector('.chatbot-notification');
      if (notif) notif.style.display = 'none';
    });
    if (closeBtn) closeBtn.addEventListener('click', () => win.classList.remove('open'));

    // Send handlers
    if (sendBtn)  sendBtn.addEventListener('click', () => sendMessage(inputEl?.value));
    if (inputEl) {
      inputEl.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputEl.value); }
      });
    }

    // Quick action buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', () => sendMessage(btn.textContent.replace(/[📚💰🚀📍🎓]/g,'').trim()));
    });

    // Welcome message
    setTimeout(() => {
      renderMsg('bot',
        `Greetings. I am **ORVIONAR AI**, the official assistant for Orvionar Tech.\n\nI can provide information regarding our courses, fees, placements, and enrollment procedures. How may I assist you today?`,
        null
      );
    }, 1200);
  }

  return { init, sendChip: (text) => sendMessage(text) };

})();

window.OrvionarChat = OrvionarBot;
document.addEventListener('DOMContentLoaded', OrvionarBot.init);
