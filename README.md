# TradeTrust Decentralized Renderer (React Template)

This template serves as a quick way to start building your own decentralized renderer using OpenAttestation stack.

## How and what?

This repository boilerplate code is spinned up from [Create React App](https://github.com/facebook/create-react-app).

The decentralized renderer code here is based off OpenAttestation's [decentralized-renderer-react-template](https://github.com/Open-Attestation/decentralized-renderer-react-template), but with **some changes** as mentioned below.

## Notable changes

To stay as simple and less opinionated as possible, these are omitted:

- Testing frameworks.
- CI pipelines.

> You are expected to setup your own tests, styling according to your needs.

## Main dependancies

- `@govtechsg/decentralized-renderer-react-components`
- `@tradetrust-tt/tradetrust`
- `react`
- `react-dom`

---

### Prerequisite

- Node (optionally, use [nvm](https://github.com/nvm-sh/nvm) to manage node version)
  - Node version 14 onwards.

### Development

```sh
npm i
npm run start
```

Head off to `http://localhost:6006/` to see storybook, while `http://127.0.0.1:8080/` to see your actual document rendered in a dummy application.

### Example Templates

This repository contains a collection of example templates located in the `/src/templates` directory. These templates serve as references and guides for setting up your own templates to suit your specific needs.

All of these templates are built using core components located under the `/src/core`. Additionally, they all utilize a QR code component to generate QR codes for easy sharing and access to relevant information.

1. Bill of Lading
The "Bill of Lading" template provides a basic example.

2. Invoice Template
The "Invoice Template" showcases the use of a privacy filter to automatically redact sensitive information, ensuring data security and privacy.

3. XML Renderer
The "XML Renderer" template demonstrates how to use XML data to dynamically render content within your template.

Feel free to explore these examples and adapt them to your own projects.

### Creating new templates

1. Create your new sample documents json in `src/templates/<YOUR_SAMPLE>/<YOUR_DOCUMENT>.json`. Be sure they conform to either OpenAttestation [v2](https://schema.openattestation.com/2.0/schema.json) or [v3](https://schema.openattestation.com/3.0/schema.json) schema.

2. Develop whatever you need using storybook, passing in your sample documents json.

3. When done, remember to register the new template to `registry` in `src/templates/index.tsx`.

> You can follow the template samples provided under `src/templates` folder.

### Build and host

```sh
npm run build
```

Host your `dist` folder in your favourite hosting provider. One example could be [netlify](https://www.netlify.com/).
