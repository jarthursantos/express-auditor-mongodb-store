# express-auditor-mongodb-store
Save express-auditor result into MongoDB

## Installation 

Install this package and [express-auditor](https://github.com/jarthursantos/express-auditor) in your [NodeJS](https://nodejs.org/) project

```bash
$ yarn add express-auditor express-auditor-mongodb-store
```
or

```bash
$ npm i express-auditor express-auditor-mongodb-store
```

## Getting Started

Follow this [Getting Started](https://github.com/jarthursantos/express-auditor#getting-started) to understand why [express-auditor](https://github.com/jarthursantos/express-auditor) works

```ts
import { createAuditor } from 'express-auditor'
import { createMongoDBAuditorStorage } from 'express-auditor-mongodb-store'

const { auditor, handler } = createAuditor()

auditor.on(
  'finish',
  createAuditorStorage({
    connectionString: 'mongodb://localhost:27017',
    database: 'example',
    collection: 'my_application-logs',
  })
)
```
