Left array rotation is a fundamental algorithmic operation where elements "cycle" through the array. When an element is pushed out of the first index ($0$), it doesn't disappear; it wraps around to the final index ($n-1$).

---

## The Logic: The Modulo Shortcut

While you could move elements one by one, the most efficient way to handle "circular" logic is using the **Modulo Operator (%)**.

For an array of length $n$ and $d$ rotations:

1. **Effective Rotations:** If you rotate a 5-element array 5 times, it returns to its original state. Therefore, the "real" number of shifts needed is $d \pmod n$.
    
2. **New Index Formula:** For any element at index $i$, its new position $i_{new}$ after $d$ left shifts is:
    
    $$i_{new} = (i - d + n) \pmod n$$
    

---

## Step-by-Step Diagram Walkthrough

**Example:** `arr = [1, 2, 3, 4, 5]`, `d = 4`, `n = 5`

### 1. The Slice Strategy

Instead of moving elements one by one, we split the array into two parts based on $d$:

- **Part A (The "Fall Offs"):** Elements from index $0$ to $d-1$.
    
- **Part B (The "Stayers"):** Elements from index $d$ to $n-1$.
    

### 2. The Recombination

To "rotate left," we simply move **Part A** to the end of **Part B**.

|**Step**|**Action**|**Visualization**|
|---|---|---|
|**Initial**|Identify $d$|`[1, 2, 3, 4|
|**Split**|Slice at index $d$|Left: `[1, 2, 3, 4]`, Right: `[5]`|
|**Swap**|Move Left to the back|`[5]` + `[1, 2, 3, 4]`|
|**Result**|Final Array|`[5, 1, 2, 3, 4]`|