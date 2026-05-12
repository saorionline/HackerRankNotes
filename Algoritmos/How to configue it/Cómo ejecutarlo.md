### How to see it in action

1. **Update your `package.json`**: Make sure the path points exactly to where this file lives.
    
    JSON
    
    ```
    "scripts": {
      "draw": "npx ts-node path/to/MaximumDraw.ts"
    }
    ```
    
2. **Run the command**:
    
    Bash
    
    ```
    npm run draw
    ```
### 3. Cómo ejecutarlo (Tienes 2 opciones)

#### Opción A: Usando `ts-node` (Más rápido)

Este comando compila y ejecuta en un solo paso sin crear archivos basura:

Bash

```
npx ts-node triplets.ts
```

#### Opción B: Usando `node` (El camino largo)

Si quieres usar `node` obligatoriamente, primero tienes que convertirlo a JavaScript:

1. Compila: `npx tsc triplets.ts` (esto creará un archivo `triplets.js`).
    
2. Ejecuta: `node triplets.js`.

**If you STILL see nothing**, try running it with standard Node just to see if the file is being read at all:

Bash

```
node algoritmos.ts
```

_(Node will try to run it; it might fail because of the TypeScript types, but it should at least show an error or a print)._

Which of these steps gave you a result?