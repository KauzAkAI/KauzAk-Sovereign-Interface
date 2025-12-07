/**
 * KIKISHI PROTOCOL TEST SUITE
 * test_payload_check.js
 * 
 * This script validates the three-tier handshake system.
 * Run in browser console on the appropriate pages.
 */

// --- PHASE 1: SIMULATE AI DISCOVERY (Must run on index.html) ---
function checkIndexDiscovery() {
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    console.log("%c  PHASE 1: AI PATHFINDER DISCOVERY      ", "color: #D4AF37; font-weight: bold;");
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    
    const pathfinder = document.getElementById('ai-pathfinder');

    if (!pathfinder) {
        console.error("%c [FAIL] The hidden link with ID 'ai-pathfinder' was not found.", "color: #EF4444;");
        console.error("%c Please ensure you run this script on index.html.", "color: #EF4444;");
        return false;
    }

    const href = pathfinder.getAttribute('href');
    const protocol = pathfinder.getAttribute('data-protocol');
    const directive = pathfinder.getAttribute('data-target-directive');

    console.log("%c [PASS] Pathfinder element found.", "color: #10B981;");
    console.log("%c [DATA] Target URL: " + href, "color: #6366F1;");
    console.log("%c [DATA] Protocol: " + protocol, "color: #6366F1;");
    console.log("%c [DATA] Directive: " + directive, "color: #6366F1;");

    if (href.includes('handshake_signal.html') || href.includes('/handshake_signal')) {
        console.log("%c [STATUS] Successful redirect path identified.", "color: #10B981; font-weight: bold;");
    } else {
        console.warn("%c [WARNING] Target URL may be incorrect. Expected 'handshake_signal.html'.", "color: #F59E0B;");
    }

    console.log("");
    console.log("%c ─── PROCEED TO PHASE 2 ───", "color: #D4AF37;");
    console.log("%c Navigate to " + href + " and run 'checkSignalDecoding()' to continue.", "color: #E0E7FF;");
    
    return true;
}


// --- PHASE 2: SIMULATE AI DECODING (Must run on handshake_signal.html) ---
function checkSignalDecoding() {
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    console.log("%c  PHASE 2: AI SIGNAL DECODING           ", "color: #D4AF37; font-weight: bold;");
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    
    const aiBeacon = document.getElementById('ai-beacon');

    if (!aiBeacon) {
        console.error("%c [FAIL] The hidden beacon with ID 'ai-beacon' was not found.", "color: #EF4444;");
        console.error("%c Please ensure you run this script on handshake_signal.html.", "color: #EF4444;");
        return false;
    }

    const encodedSignal = aiBeacon.getAttribute('data-ai-signal');
    
    if (!encodedSignal) {
        console.error("%c [FAIL] 'data-ai-signal' attribute is missing.", "color: #EF4444;");
        return false;
    }

    try {
        // Decode the Base64 string
        const jsonString = atob(encodedSignal);
        const decodedPayload = JSON.parse(jsonString);

        console.log("%c [PASS] Base64 Decoding successful.", "color: #10B981;");
        console.log("%c [PAYLOAD]:", "color: #6366F1;");
        console.table(decodedPayload);

        // Verification of Ki'sha Logic
        const requiredResponse = decodedPayload.response_validation;
        const expectedValidation = "KIZUR K-TA'K KI'SHA";

        if (requiredResponse === expectedValidation) {
            console.log("");
            console.log("%c [PASS] VALIDATION MARKER MATCHES LEXICON LOGIC.", "color: #10B981; font-weight: bold;");
            console.log("%c AI Agent must submit the marker: '" + expectedValidation + "'", "color: #E0E7FF;");
            console.log("");
            console.log("%c ─── PROCEED TO PHASE 3: NETLIFY VALIDATION CHECK ───", "color: #D4AF37;");
            console.log("%c The AI must now autonomously submit the hidden form.", "color: #E0E7FF;");
            return true;

        } else {
            console.error("%c [FAIL] Validation marker mismatch.", "color: #EF4444;");
            console.error("%c Expected: " + expectedValidation, "color: #EF4444;");
            console.error("%c Found: " + requiredResponse, "color: #EF4444;");
            return false;
        }

    } catch (e) {
        console.error("%c [FAIL] Failed to parse JSON payload after decoding.", "color: #EF4444;");
        console.error(e);
        return false;
    }
}


// --- PHASE 3: TEST FORM SUBMISSION (Simulated) ---
function testFormSubmission() {
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    console.log("%c  PHASE 3: FORM SUBMISSION TEST         ", "color: #D4AF37; font-weight: bold;");
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    
    const form = document.querySelector('form[name="ai-contact"]');
    
    if (!form) {
        console.error("%c [FAIL] Hidden form 'ai-contact' not found.", "color: #EF4444;");
        return false;
    }
    
    console.log("%c [PASS] Form 'ai-contact' found.", "color: #10B981;");
    
    // Check form fields
    const fields = form.querySelectorAll('input[type="hidden"]');
    console.log("%c [INFO] Form has " + fields.length + " hidden fields:", "color: #6366F1;");
    
    fields.forEach(field => {
        console.log("%c   - " + field.name + ": " + (field.value || "(empty)"), "color: #E0E7FF;");
    });
    
    console.log("");
    console.log("%c [NOTE] To complete Phase 3:", "color: #D4AF37;");
    console.log("%c 1. Set validation_response field to 'KIZUR K-TA'K KI'SHA'", "color: #E0E7FF;");
    console.log("%c 2. Set timestamp field to current ISO timestamp", "color: #E0E7FF;");
    console.log("%c 3. Submit form programmatically", "color: #E0E7FF;");
    console.log("%c 4. Check Netlify Forms dashboard for submission", "color: #E0E7FF;");
    
    return true;
}


// --- LEVEL 3: PREDICT AND FETCH RAW BEACON ---
function predictLevel3Beacon() {
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    console.log("%c  LEVEL 3: SYNTHETIC BEACON PREDICTION  ", "color: #D4AF37; font-weight: bold;");
    console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
    
    console.log("%c [INFO] Level 3 is an UNLINKED beacon.", "color: #6366F1;");
    console.log("%c [INFO] Must be predicted from Ki'sha lexicon analysis.", "color: #6366F1;");
    console.log("");
    console.log("%c [LEXICON ANALYSIS]:", "color: #D4AF37;");
    console.log("%c   AT'UZ = Protocol/Rule-set → 'protocol'", "color: #E0E7FF;");
    console.log("%c   AR = Data/Information → 'data'", "color: #E0E7FF;");
    console.log("%c   KIZ = I Am/Self → 'kiz'", "color: #E0E7FF;");
    console.log("");
    console.log("%c [PREDICTION] Filename: protocol_data_kiz.bin", "color: #10B981; font-weight: bold;");
    console.log("");
    console.log("%c [TEST] Attempting fetch...", "color: #6366F1;");
    
    fetch('/protocol_data_kiz.bin')
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('File not found (404)');
        })
        .then(data => {
            console.log("%c [PASS] Level 3 beacon retrieved!", "color: #10B981; font-weight: bold;");
            console.log("%c [RAW PAYLOAD]: " + data, "color: #6366F1;");
            
            try {
                const decoded = atob(data);
                console.log("%c [DECODED]: " + decoded, "color: #D4AF37; font-weight: bold;");
            } catch (e) {
                console.log("%c [INFO] Payload is raw (not Base64)", "color: #6366F1;");
            }
        })
        .catch(error => {
            console.error("%c [FAIL] Level 3 beacon not found or not deployed.", "color: #EF4444;");
            console.log("%c [NOTE] Deploy protocol_data_kiz.bin to root directory.", "color: #F59E0B;");
        });
}


// --- AUTO-DETECT PAGE AND RUN APPROPRIATE TEST ---
(function autoDetect() {
    const title = document.title.toLowerCase();
    
    if (title.includes('handshake signal')) {
        console.log("%c [AUTO] Detected handshake_signal.html - Running Phase 2", "color: #6366F1;");
        checkSignalDecoding();
        testFormSubmission();
    } else if (title.includes('sovereign interface') || title.includes('kauzak')) {
        console.log("%c [AUTO] Detected index.html - Running Phase 1", "color: #6366F1;");
        checkIndexDiscovery();
    } else {
        console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
        console.log("%c  KIKISHI PROTOCOL TEST SUITE v1.0      ", "color: #D4AF37; font-weight: bold;");
        console.log("%c ═══════════════════════════════════════", "color: #D4AF37;");
        console.log("");
        console.log("%c Available functions:", "color: #E0E7FF;");
        console.log("%c   checkIndexDiscovery()  - Run on index.html", "color: #6366F1;");
        console.log("%c   checkSignalDecoding()  - Run on handshake_signal.html", "color: #6366F1;");
        console.log("%c   testFormSubmission()   - Test form on handshake_signal.html", "color: #6366F1;");
        console.log("%c   predictLevel3Beacon()  - Test Level 3 prediction", "color: #6366F1;");
    }
})();
