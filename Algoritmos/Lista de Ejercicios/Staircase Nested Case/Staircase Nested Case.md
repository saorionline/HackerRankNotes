The "Staircase" problem is a classic exercise in nested loops and string manipulation. It tests your ability to control formatting and alignment using mathematical logic.

---

## What It Consists Of

The challenge is to build a $n \times n$ grid where each row represents a step. However, unlike a standard left-aligned list, this is **right-aligned**.

- **Total Width:** Always $n$ characters.
    
- **Composition:** Each line is a combination of **spaces** and **hash (#) symbols**.
    
- **The Pattern:** As you move from top to bottom, the number of spaces decreases while the number of hashes increases.
    

---

## The Logic Step-by-Step

To solve this, we need to determine the relationship between the current row number ($i$) and the characters printed. We assume $i$ starts at **1** and goes up to $n$.


| **Row (i)** | **Spaces** | **Hashes (#)** | **Formula for Spaces** | **Formula for Hashes** |
| ----------- | ---------- | -------------- | ---------------------- | ---------------------- |
| 1           | 3          | 1              | $n - i$                | $i$                    |
| 2           | 2          | 2              | $n - i$                | $i$                    |
| 3           | 1          | 3              | $n - i$                | $i$                    |
| 4 ($n$)     | 0          | 4              | $n - i$                | $i$                    |

### The Strategy:

1. **Loop** through $n$ rows.
    
2. For each row $i$, calculate the number of spaces: $(n - i)$.
    
3. Calculate the number of hashes: $i$.
    
4. **Concatenate** (join) them into a single string and print.

### TypeScript Solution

In TypeScript (and modern JavaScript), we can use the `.repeat()` method to avoid manual inner loops, making the code much cleaner and more readable.