# HackerRankNotes
Clásico de algoritmos, estructuras de datos, matemáticas y más.

Este es un ejercicio clásico de algoritmos (similar a los de HackerRank o LeetCode). Se trata de reducción de datos: tomar una lista de muchos elementos y transformarlos en un solo valor (la suma).

¿En qué consiste el ejercicio?
Tienes una "bolsa" de números (un arreglo) y necesitas recorrerla uno por uno, acumulando el valor de cada número en una variable "totalizador".

La lógica paso a paso:

Empiezas con un total = 0.

Miras el primer número y se lo sumas al total.

Miras el segundo y haces lo mismo.

Repites hasta que no queden números.

Devuelves el resultado final.

Solución 1: El camino del "Arquitecto" (Usando un Loop)
Esta es la forma más clara de ver la lógica. Usamos un loop for...of para iterar con seguridad.

Crea un archivo llamado algoritmos.ts y pega esto: