This is a classic geometry-based programming problem. Essentially, you are solving for a missing variable in the triangle area formula while ensuring the result satisfies a "minimum" constraint (using the **ceiling** of a number).

---

## 1. What is a "Minimum Height Triangle"?

The problem asks you to find the smallest **integer** height $h$ such that the area of a triangle with a fixed base $b$ is at least $a$.

Mathematically, you are solving this inequality for $h$:

$$\text{Area} \geq a$$

$$\frac{1}{2} \times b \times h \geq a$$

### The Logic

To find $h$, we rearrange the formula:

1. Multiply both sides by 2: $b \times h \geq 2a$
    
2. Divide by $b$: $h \geq \frac{2a}{b}$
    

Since $h$ must be an **integer**, if the result of $\frac{2a}{b}$ is a decimal (like $11.76$), you can't just round it to the nearest integer. To ensure the area is _at least_ $a$, you must always round **up** to the next whole number.

---

## 2. Walkthrough Example (Sample 1)

**Input:** Base ($b$) = 17, Area ($a$) = 100

1. **Calculate the double area:** $2 \times 100 = 200$.
    
2. **Divide by base:** $200 / 17 \approx 11.7647$.
    
3. **Apply Ceiling:** Since we need an area of _at least_ 100, a height of 11 would be too small. We must use **12**.
    

**Verification:**

- If $h = 11$: $\text{Area} = (17 \times 11) / 2 = 93.5$ (Too small!)
    
- If $h = 12$: $\text{Area} = (17 \times 12) / 2 = 102$ (Satisfies $\geq 100$)
    

---

## 3. TypeScript Solution

In TypeScript, we use the `Math.ceil()` function to handle the rounding logic.

TypeScript

```ts
function lowestTriangle(b: number, a: number): number {
    // 1. Calculate the raw height needed using the formula (2 * Area) / Base
    const rawHeight: number = (2 * a) / b;
    
    // 2. Return the ceiling (smallest integer greater than or equal to the result)
    return Math.ceil(rawHeight);
}

// Example usage:
console.log(lowestTriangle(17, 100)); // Output: 12
console.log(lowestTriangle(2, 2));     // Output: 2
```

---

## 4. Key Considerations for Coding

### The Ceiling Function

In competitive programming, `Math.ceil(x)` is your best friend for "at least" problems.

- **Note:** If the division is exact (e.g., $4 / 2 = 2$), `Math.ceil` returns 2.
    
- If there is any remainder (e.g., $4.0001$), it jumps to 3.
    

### Integer vs. Float

Unlike some languages (like C++ or Java) where dividing two integers might perform "integer division" and throw away the decimal, JavaScript/TypeScript numbers are 64-bit floats by default. This makes the division `(2 * a) / b` accurate before you pass it to `Math.ceil`.

### Alternative "Math-only" Logic

If you ever want to solve this without `Math.ceil` (using only integer arithmetic), a common trick is:

$$h = \frac{(2a + b - 1)}{b}$$

This formula uses floor division to simulate a ceiling function, which is a useful pattern to recognize in lower-level languages.

---

### Summary Table

|**Step**|**Action**|**TypeScript Tool**|
|---|---|---|
|**Formula**|$h = \frac{2a}{b}$|Arithmetic Operators `*`, `/`|
|**Requirement**|"At least" (Minimum Integer)|`Math.ceil()`|
|**Constraint**|Input is up to $10^6$|Standard `number` type handles this safely|