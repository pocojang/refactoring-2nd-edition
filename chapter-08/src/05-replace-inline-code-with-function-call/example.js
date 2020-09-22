/**
 * 리팩토링 전
 */
let appliesToMass = false;

for (const s of states) {
  if (s === 'MA') {
    appliesToMass = true;
  }
}

/**
 * 리팩토링 후
 */
let appliesToMass = states.includes('MA');
