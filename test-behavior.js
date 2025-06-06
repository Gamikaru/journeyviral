// Manual behavior test for HeroContent component
// This script simulates the expected behavior and timing

console.log('🧪 HeroContent Behavior Test\n');

// Simulate the expected behavior timeline
const titleSubtitlePairs = [
  { title: "YOUR CONTENT SUCKS.", subtitle: "WE CAN FIX THAT." },
  { title: "GO VIRAL", subtitle: "OR GO HOME." },
  { title: "BREAK ALGORITHMS.", subtitle: "NOT THE BANK." }
];

let currentPairIndex = 0;
let isScrambling = false;
let hasInitiallyLoaded = false;
let isFirstRender = true;

// Expected Timeline:
console.log('📋 Expected Timeline:');
console.log('0ms: Page loads, first pair shows with upward animation');
console.log('1500ms: Initial animations complete, start 4-second display timer');
console.log('5500ms: First scramble animation starts (1 second)');
console.log('6500ms: Second pair displays for 4 seconds');
console.log('10500ms: Second scramble animation starts (1 second)');
console.log('11500ms: Third pair displays for 4 seconds');
console.log('15500ms: Third scramble animation starts (1 second)');
console.log('16500ms: Back to first pair, cycle continues...\n');

function logCurrentState(time) {
  const pair = titleSubtitlePairs[currentPairIndex];
  const status = isScrambling ? '🔀 SCRAMBLING' : '✨ DISPLAYING';
  const isFirst = isFirstRender ? ' (FIRST RENDER - UPWARD ANIMATION)' : '';
  console.log(`${time}ms: ${status} - "${pair.title}" / "${pair.subtitle}"${isFirst}`);
}

// Simulate the behavior
function runBehaviorTest() {
  console.log('🚀 Starting Behavior Simulation:\n');

  let time = 0;

  // Initial render
  logCurrentState(time);

  // After 1500ms - initial animations complete
  setTimeout(() => {
    time = 1500;
    hasInitiallyLoaded = true;
    isFirstRender = false;
    console.log(`${time}ms: ✅ Initial animations complete, starting 4-second display timer`);
  }, 100);

  // After 5500ms - first transition (scramble starts)
  setTimeout(() => {
    time = 5500;
    isScrambling = true;
    console.log(`${time}ms: 🔀 First scramble animation starts`);
    logCurrentState(time);

    // After 1 second of scrambling - show second pair
    setTimeout(() => {
      time = 6500;
      currentPairIndex = 1;
      isScrambling = false;
      console.log(`${time}ms: ✅ Scramble complete, showing second pair`);
      logCurrentState(time);
    }, 50);
  }, 200);

  // After 10500ms - second transition
  setTimeout(() => {
    time = 10500;
    isScrambling = true;
    console.log(`${time}ms: 🔀 Second scramble animation starts`);
    logCurrentState(time);

    setTimeout(() => {
      time = 11500;
      currentPairIndex = 2;
      isScrambling = false;
      console.log(`${time}ms: ✅ Scramble complete, showing third pair`);
      logCurrentState(time);
    }, 50);
  }, 300);

  // After 15500ms - third transition (back to first)
  setTimeout(() => {
    time = 15500;
    isScrambling = true;
    console.log(`${time}ms: 🔀 Third scramble animation starts`);
    logCurrentState(time);

    setTimeout(() => {
      time = 16500;
      currentPairIndex = 0;
      isScrambling = false;
      console.log(`${time}ms: ✅ Scramble complete, back to first pair`);
      logCurrentState(time);
      console.log('\n🔄 Cycle continues every 5 seconds...');

      console.log('\n✅ Expected Behavior Summary:');
      console.log('- First pair: Upward animation on load, then displays for 4 seconds');
      console.log('- Transitions: Only scramble effect, no upward animation');
      console.log('- Timing: 4 seconds display + 1 second scramble = 5 second cycle');
      console.log('- No re-mounting: Same elements, just content changes');
    }, 50);
  }, 400);
}

runBehaviorTest();
