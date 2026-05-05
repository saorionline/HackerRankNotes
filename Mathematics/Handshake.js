"use strict";
/**
 * Calcula el número total de apretones de manos únicos.
 * @param n - El número de asistentes.
 * @returns El total de apretones de manos.
 */
function handshakes(n) {
    // Si hay menos de 2 personas, no hay apretones.
    if (n < 2)
        return 0;
    // Aplicación directa de la fórmula combinatoria.
    return (n * (n - 1)) / 2;
}
// Ejemplo de uso:
console.log(`Para 4 personas: ${handshakes(4)} saludos.`); // Resultado: 6
