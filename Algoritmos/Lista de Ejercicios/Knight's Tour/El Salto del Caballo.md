Yes, I definitely remember that! In Spanish, it is often called **"El Salto del Caballo"** (The Knight's Jump), and in the world of mathematics and computer science, it is famously known as the **Knight's Tour**.

The game is a classic puzzle where you take the Knight from chess and try to visit every single square on a grid of size $n \times n$ exactly once, using only its signature "L" shaped moves.

---

## What It Consists Of

- **The Goal:** Occupy every square on the board without ever landing on the same square twice.
    
- **The Move:** A jump that moves 2 squares in one cardinal direction (up, down, left, right) and then 1 square perpendicularly.
    
- **Grid Variations:** While the standard is $8 \times 8$, the game becomes a fascinating logic challenge on smaller grids (like $5 \times 5$ or $6 \times 6$) or even rectangular ones.
    
- **Open vs. Closed:** An "Open Tour" ends anywhere, while a "Closed Tour" ends exactly one move away from the starting square, creating a perfect loop.
    

---

## The Logic: Warnsdorf's Rule

The most effective logic for solving this manually (or via code) is **Warnsdorf's Rule**. It is a heuristic that suggests:

> "Always move the Knight to the square from which it will have the **fewest** onward moves available."

By choosing the "most restricted" square first, you leave the "open" squares (those with many exits) for later, which prevents you from getting trapped in a corner.

---

## TypeScript Solution (Backtracking)

Because the state space is huge, we use **Backtracking**. If the Knight reaches a dead end, the algorithm "backtracks" to the previous move and tries a different path.