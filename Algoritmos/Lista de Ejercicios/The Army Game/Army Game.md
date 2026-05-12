The "Army Game" problem is about finding the most efficient way to cover a 2D grid. The key takeaway is that a single supply drop can cover a **$2 \times 2$ square of bases** if dropped exactly at the intersection where four cells meet.

---

## What It Consists Of

You have a grid of $n$ rows and $m$ columns. Since one package can supply a block of up to 4 cells ($2$ wide and $2$ high), the goal is to determine how many of these $2 \times 2$ "coverage zones" are needed to blanket the entire $n \times m$ area.

---

## The Logic: The "Ceiling" Strategy

To solve this, we don't need complex loops. We only need to figure out how many groups of 2 we can fit into the rows and how many we can fit into the columns.

1. **Row Coverage:** To cover $n$ rows with drops that each span 2 rows, you need $n / 2$ drops. If $n$ is odd, you need one extra drop to cover that final row. This is mathematically represented as `ceil(n / 2)`.
    
2. **Column Coverage:** Similarly, for $m$ columns, you need `ceil(m / 2)` drops.
    
3. **The Total:** The minimum number of packages is simply the product of these two values.
    

### Mathematical Shortcut

In programming, `ceil(x / 2)` is equivalent to `(x + 1) / 2` using integer division.

- If $n=2$: $(2+1)/2 = 1.5 \rightarrow 1$ (if using floor/integer division). Actually, the cleanest logic is:
    
    $$\text{Packages} = \left( \frac{n + n\%2}{2} \right) \times \left( \frac{m + m\%2}{2} \right)$$
    
    Or even simpler:
    
    $$\text{Packages} = \text{Math.ceil}(n / 2) \times \text{Math.ceil}(m / 2)$$
    

---

## Step-by-Step Diagram Walkthrough

**Example:** `n = 3, m = 3`

|**Row/Col**|**Col 1**|**Col 2**|**Col 3**|
|---|---|---|---|
|**Row 1**|[ Drop 1 ]|[ Drop 1 ]|[ Drop 2 ]|
|**Row 2**|[ Drop 1 ]|[ Drop 1 ]|[ Drop 2 ]|
|**Row 3**|[ Drop 3 ]|[ Drop 3 ]|[ Drop 4 ]|
- **Horizontal:** We need 2 drops to cover 3 columns (one covers 1&2, one covers 3).
    
- **Vertical:** We need 2 drops to cover 3 rows (one covers 1&2, one covers 3).
    
- **Total:** $2 \times 2 = 4$ packages.
    

---

## TypeScript Solution

This solution is highly efficient ($O(1)$ constant time) because it uses a direct mathematical formula rather than iterating through the grid.