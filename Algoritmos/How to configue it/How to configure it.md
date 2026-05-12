It sounds like you're missing the configuration file that manages your project's dependencies and scripts. To fix this, you first need to initialize your folder as an **npm project**.

Follow these steps to set everything up from scratch:

## 1. Initialize the Project

Open your terminal in the folder where your `algoritmos.ts` file is located and run:

Bash

```
npm init -y
```

This command creates a default `package.json` file. The `-y` flag tells npm to skip the setup questions and use the default settings.

---

## 2. Install Required Dependencies

Since you are running a TypeScript file (`.ts`), you need to make sure you have the necessary tools installed. Run this command:

Bash

```
npm install -g typescript ts-node
```

_(Note: If you prefer to keep them only in this project rather than global, remove the `-g` and run `npm install --save-dev typescript ts-node`.)_

---

## 3. Edit the `package.json`

Now that the file exists, open it in your code editor. Look for the `"scripts"` section and modify the `"test"` line as follows:

JSON

```
{
  "name": "your-project-name",
  "version": "1.0.0",
  "scripts": {
    "test": "ts-node algoritmos.ts"
  }
}
```

---

## 4. Run the Test

Once you have saved the file, you can execute your code by running:

Bash

```
npm test
```

### Why use `npm init`?

The `package.json` acts as the "brain" of your project. Without it, `npm` doesn't know which scripts to run or which libraries your code depends on. Once initialized, you can easily share your project, and others can run `npm install` to get the exact same environment you have.

Are you getting any specific error messages when you try to run the code?