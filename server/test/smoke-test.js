const BACKEND_URL = 'https://orvionar-tech.onrender.com';

async function runSmokeTest() {
  const timestamp = Date.now();
  const testUser = {
    name: 'Smoke Test User',
    email: `smoketest+${timestamp}@orvionar.test`,
    password: 'SmokeTestPassword123!',
    phone: '1234567890',
    college: 'Test University'
  };

  let token = null;

  console.log(`\n--- Starting Smoke Test against ${BACKEND_URL} ---\n`);

  try {
    // a. SIGNUP
    console.log(`[1/4] Testing SIGNUP (POST /api/auth/signup)...`);
    const signupRes = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser)
    });
    
    if (!signupRes.ok) {
      const err = await signupRes.text();
      throw new Error(`Signup failed with status ${signupRes.status}: ${err}`);
    }
    
    const signupData = await signupRes.json();
    console.log('✅ SIGNUP Success!');
    console.log(`   Response: ${signupData.message}\n`);

    // b. LOGIN
    console.log(`[2/4] Testing LOGIN (POST /api/auth/login)...`);
    const loginRes = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testUser.email, password: testUser.password })
    });

    if (!loginRes.ok) {
      const err = await loginRes.text();
      throw new Error(`Login failed with status ${loginRes.status}: ${err}`);
    }

    const loginData = await loginRes.json();
    token = loginData.token;
    if (!token) throw new Error('Login response missing token');
    
    console.log('✅ LOGIN Success!');
    console.log(`   Received valid token for user: ${loginData.user.email}\n`);

    // c. AUTH CHECK
    console.log(`[3/4] Testing AUTH PROFILE (GET /api/auth/me)...`);
    const authRes = await fetch(`${BACKEND_URL}/api/auth/me`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!authRes.ok) {
      const err = await authRes.text();
      throw new Error(`Auth check failed with status ${authRes.status}: ${err}`);
    }

    const authData = await authRes.json();
    if (authData.user.email !== testUser.email) {
      throw new Error(`Profile email mismatch: expected ${testUser.email}, got ${authData.user.email}`);
    }
    
    console.log('✅ AUTH CHECK Success!');
    console.log(`   Profile verified. Role: ${authData.user.role}\n`);

    // d. CHATBOT
    console.log(`[4/4] Testing CHATBOT AI (POST /api/chat)...`);
    const chatRes = await fetch(`${BACKEND_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Hello, this is a smoke test. Please reply with "Smoke test received".' }]
      })
    });

    if (!chatRes.ok) {
      const err = await chatRes.text();
      throw new Error(`Chatbot failed with status ${chatRes.status}: ${err}`);
    }

    const chatData = await chatRes.json();
    const aiMessage = chatData.choices && chatData.choices[0] && chatData.choices[0].message && chatData.choices[0].message.content;
    
    if (!aiMessage) {
      throw new Error('Chatbot response missing AI message content');
    }

    console.log('✅ CHATBOT Success!');
    console.log(`   AI Reply: "${aiMessage}"\n`);

    console.log('🎉 ALL SMOKE TESTS PASSED SUCCESSFULLY!');

  } catch (err) {
    console.error('\n❌ SMOKE TEST FAILED:');
    console.error(err.message);
    process.exit(1);
  }
}

runSmokeTest();
