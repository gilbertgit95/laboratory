#!/usr/bin/env node
import Main from './main'
import { config } from './config'

const main = new Main(config)
main.execute()