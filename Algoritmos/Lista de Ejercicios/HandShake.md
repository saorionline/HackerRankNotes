Este es un problema clásico de combinatoria conocido como el problema de los **apretones de manos**. Se trata de calcular cuántas conexiones únicas se pueden formar en un grupo de personas.

---

### ¿En qué consiste el ejercicio?

El objetivo es encontrar el número total de apretones de manos únicos que ocurren cuando $n$ personas se reúnen y cada una saluda a todas las demás exactamente una vez. Es, en esencia, un problema de **grafos completos**, donde cada nodo (persona) debe conectarse con todos los demás nodos.

---

### La lógica paso a paso

1. **La primera persona ($P_1$):** Llega a la sala y saluda a las otras $(n - 1)$ personas.
    
2. **La segunda persona ($P_2$):** Ya saludó a $P_1$, así que ahora solo necesita saludar a las $(n - 2)$ personas restantes.
    
3. **La tercera persona ($P_3$):** Ya saludó a $P_1$ y $P_2$, por lo que saluda a las $(n - 3)$ personas restantes.
    
4. **La penúltima persona:** Solo le queda 1 persona por saludar.
    
5. **La última persona:** Ya ha saludado a todos, por lo que aporta 0 saludos nuevos.
    

Esto crea una serie aritmética: $(n-1) + (n-2) + (n-3) + \dots + 1 + 0$.

---

### La forma de resolución manual (Fórmula Matemática)

En lugar de sumar uno por uno, usamos la fórmula de las **combinaciones**, específicamente "$n$ tomado de 2 en 2" ($C(n, 2)$), porque un apretón de manos requiere exactamente 2 personas y el orden no importa (si A saluda a B, es lo mismo que B salude a A).

La fórmula simplificada es:

$$\text{Apretones} = \frac{n \times (n - 1)}{2}$$

**Ejemplos rápidos:**

- Si $n = 1$: $\frac{1(0)}{2} = 0$.
    
- Si $n = 2$: $\frac{2(1)}{2} = 1$.
    
- Si $n = 3$: $\frac{3(2)}{2} = 3$.
    
- Si $n = 10$: $\frac{10(9)}{2} = 45$.
    

---

### Acercamiento funcional en JavaScript/TypeScript

En un entorno profesional o de competencia (como HackerRank), no usamos bucles para esto porque la fórmula matemática nos da una complejidad de **$O(1)$** (tiempo constante), lo cual es lo más eficiente posible.

TypeScript

```TypeScript
/**
 * Calcula el número total de apretones de manos únicos.
 * @param n - El número de asistentes.
 * @returns El total de apretones de manos.
 */
function handshakes(n: number): number {
    // Si hay menos de 2 personas, no hay apretones.
    if (n < 2) return 0;

    // Aplicación directa de la fórmula combinatoria.
    return (n * (n - 1)) / 2;
}

// Ejemplo de uso:
console.log(`Para 4 personas: ${handshakes(4)} saludos.`); // Resultado: 6
```

---

### The Key Takeaway (La conclusión clave)

La lección principal aquí es la **Eficiencia Matemática vs. Fuerza Bruta**.

Aunque podrías resolver esto con un bucle `for` que sume los números, entender la lógica de las **combinaciones** te permite resolver problemas complejos de redes y conexiones instantáneamente. En tu rol como **Arquitecto de Liquidez**, este concepto es vital: si tienes $n$ activos en un pool de trading y quieres saber cuántos pares de intercambio únicos puedes formar, la respuesta siempre será $\frac{n(n-1)}{2}$. Es la base de la conectividad total.