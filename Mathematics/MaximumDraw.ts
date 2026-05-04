// Pigeonhole Principle

/**
 * Simulates the "Maximum Draws" logic to visualize why n + 1 
 * is the minimum number of socks to guarantee a match.
 */
class SockMatchSimulator {
  private colors: string[];
  private hand: Map<string, number>;
  private drawsCount: number;

  constructor(numberOfColors: number) {
    // Generate unique labels for colors (e.g., Color 0, Color 1...)
    this.colors = Array.from({ length: numberOfColors }, (_, i) => `Color ${i}`);
    this.hand = new Map();
    this.drawsCount = 0;
  }

  /**
   * Simulates the "Worst Case" scenario: 
   * Drawing every unique color before getting a duplicate.
   */
  public simulateWorstCase(): void {
    const n = this.colors.length;
    console.log(`--- Simulating Worst Case for ${n} Colors ---`);

    // Step 1: Draw n socks (one of each color)
    for (let i = 0; i < n; i++) {
      this.draw(this.colors[i]);
      this.logStatus();
    }

    // Step 2: The n + 1 draw (The Guarantee)
    console.log("\n[!] The next draw MUST result in a match.");
    this.draw(this.colors[0]); // Guaranteed to match the first color drawn
    this.logStatus();
    
    console.log(`\nTotal draws to guarantee success: ${this.drawsCount}`);
  }

  private draw(color: string): void {
    this.drawsCount++;
    const count = this.hand.get(color) || 0;
    this.hand.set(color, count + 1);
    
    const isMatch = this.hand.get(color) === 2;
    console.log(`Draw ${this.drawsCount}: Pulled ${color} ${isMatch ? '-> [MATCH FOUND!]' : ''}`);
  }

  private logStatus(): void {
    const currentHand = Array.from(this.hand.entries())
      .map(([color, count]) => `${color}: ${count}`)
      .join(", ");
    console.log(`   Current Hand: { ${currentHand} }`);
  }
}

// Execution
const n = 3;
const sim = new SockMatchSimulator(n);
sim.simulateWorstCase();


/// Printed version

/**
 * maximumDraws - Logic & Narrative
 * This function determines the minimum draws to guarantee a match.
 */
function maximumDraws(n: number): number {
    console.log(`\n--- [ LOGIC START: n = ${n} colors ] ---`);
    
    // Step 1: The "Unlucky" Phase
    console.log(`Step 1: In the worst case, you pull one of every color.`);
    for (let i = 1; i <= n; i++) {
        console.log(`   Draw ${i}: Found a unique color. (Total unique in hand: ${i})`);
    }

    // Step 2: The "Inevitability" Phase
    console.log(`Step 2: Your hand is full of unique colors. Any further draw MUST be a duplicate.`);
    
    const result = n + 1;
    console.log(`   Draw ${result}: [MATCH GUARANTEED]`);
    
    return result;
}

// --- Narrative Runner ---
// This part executes when you run 'npm run draw'
function runExerciseSimulation() {
    console.log("========================================");
    console.log("   HACKERRANK: MAXIMUM DRAWS SIMULATOR  ");
    console.log("========================================");

    const testCases = [1, 2, 5];

    testCases.forEach((n, index) => {
        console.log(`\nTEST CASE #${index + 1}`);
        const totalNeeded = maximumDraws(n);
        console.log(`\n>> Result for ${n} colors: ${totalNeeded} socks needed.`);
        console.log("----------------------------------------");
    });

    console.log("\n[Conclusion]: The formula is always (n + 1).");
}

runExerciseSimulation();