# NekoChan

A small local Discord bot for weeb who loves anime images, purely written in [TypeScript](https://www.typescriptlang.org) using the [Eris](https://github.com/abalabahaha/eris) Discord library.

- This Discord bot is stil **Work In Progress**.

## Developing

- **Node v16+ is required to run**

Clone this repository and edit the configuration file located in the [config](https://github.com/reinhello/mangacord/tree/master/framework) folder. Please read the README for more info.

### Discord Bot

The [bot](https://github.com/reinhello/NekoChan/tree/master/bot) folder is where the bot will run. Please read below instructions how to run the bot.

```bash
# Build the framework
npm run ci:framework
npm run build:framework

# Run the bot
npm run ci:bot
npm run start:bot
```

Once you run these commands in order and successfully, a log should appears indicating that the bot has connected to Discord.

### Framework

**NekoChan** is powered entirely by its custom built-in **[NekoChan-Framework](https://github.com/reinhello/NekoChan/tree/master/framework)**. Please be careful when editing its source code as you might accidentally overwrite something.

```bash
# ESLint
npm run lint:framework
npm run lint:framework:fix # Automatically fix ESLint problems
```

## Third-Party Resources

These are the resources used in NekoChan.

- [Eris](https://github.com/abalabahaha/eris)
- [Fluxpoint API](https://fluxpoint.dev/api)
    - [FluxpointJS](https://github.com/FluxpointDev/fluxpoint-js)
