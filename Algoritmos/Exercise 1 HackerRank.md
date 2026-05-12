Este es un ejercicio clásico de algoritmos (similar a los de HackerRank o LeetCode). Se trata de **reducción de datos**: tomar una lista de muchos elementos y transformarlos en un solo valor (la suma).

### ¿En qué consiste el ejercicio?

Tienes una "bolsa" de números (un arreglo) y necesitas recorrerla uno por uno, acumulando el valor de cada número en una variable "totalizador".

**La lógica paso a paso:**

1. Empiezas con un `total = 0`.
    
2. Miras el primer número y se lo sumas al total.
    
3. Miras el segundo y haces lo mismo.
    
4. Repites hasta que no queden números.
    
5. Devuelves el resultado final.
    

---

### Solución 1: El camino del "Arquitecto" (Usando un Loop)

Esta es la forma más clara de ver la lógica. Usamos un loop `for...of` para iterar con seguridad.

Crea un archivo llamado `algoritmos.ts` y pega esto:

TypeScript

```
function simpleArraySum(ar: number[]): number {
    let total: number = 0; // El acumulador

    for (const num of ar) {
        total += num; // Sumamos cada número al total
    }

    return total;
}

// Prueba con el ejemplo del ejercicio
const input = [1, 2, 3, 4, 10, 11];
const result = simpleArraySum(input);

console.log("--- Algoritmos: Suma de Arreglo ---");
console.log(`Arreglo: [${input}]`);
console.log(`Resultado esperado: 31 | Resultado obtenido: ${result}`);
```

---

### Solución 2: El camino "Pro" (Usando `.reduce`)

En TypeScript, los ingenieros suelen usar un método llamado `reduce`. Es una función diseñada específicamente para "reducir" un arreglo a un solo valor. Es más elegante y evita errores de variables externas.

TypeScript

```
function simpleArraySumReduce(ar: number[]): number {
    // reduce recibe (acumulador, valorActual) => lógica, valorInicial
    return ar.reduce((accumulator, current) => accumulator + current, 0);
}

console.log("Resultado con Reduce:", simpleArraySumReduce([1, 2, 3, 4, 10, 11]));
```

---

### Cómo probarlo en Git Bash

Como este es un **archivo nuevo**, tienes que actualizar tu comando para que apunte a `algoritmos.ts`.

1. **Opción rápida en Git Bash:**
    
    Bash
    
    ```
    npx ts-node algoritmos.ts
    ```
    
2. **Si quieres usar `npm test`:**
    
    Ve a tu `package.json` y cambia la línea del script:
    
    JSON
    
    ```
    "test": "ts-node algoritmos.ts"
    ```
    
    Y luego corre `npm test`.
    

### Análisis de Restricciones (Constraints)

El ejercicio menciona que $n > 0$ y los números son $\le 1000$. En TypeScript, el tipo `number` maneja estos valores sin problema. Si estuviéramos manejando números astronómicos (trillones), tendríamos que usar `bigint`, pero para este caso, `number` es perfecto.

**¿Te animas a intentar modificar la función para que solo sume los números que sean pares?** (Pista: dentro del loop podrías usar un `if (num % 2 === 0)`).