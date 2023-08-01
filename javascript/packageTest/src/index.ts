#!/usr/bin/env node
import Main from './main'
import { IPlatform } from './utilities/platform'

const config:IPlatform[] = [

]
// select platforms
// - server
//      + NodeJS, Typescript, ExpressJS
// - webapp
//      + React, Typescript
// - mobile
//      + React native, Typescript

const main = new Main(config)
main.execute()