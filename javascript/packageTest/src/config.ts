import { IPlatform } from './utilities/platform'

const config:IPlatform[] = [
    {
        id: 'server',
        name: 'Server',
        description: 'The backend part of application',
        types: [
            {
                id: 'type-a',
                name: 'Type A',
                description: 'Node, Typescript, ExpressJS, Mongodb are its core Technologies.',
                dir: ''
            },
            {
                id: 'type-b',
                name: 'Type B',
                description: 'Not yet created.',
                dir: ''
            }
        ]
    },
    {
        id: 'webapp-ui',
        name: 'Webapp UI',
        description: 'The user interface of a web application',
        types: [
            {
                id: 'type-a',
                name: 'Type A',
                description: 'Typescript, React, Redux are its core Technologies.',
                dir: ''
            },
            {
                id: 'type-b',
                name: 'Type B',
                description: 'Not yet created.',
                dir: ''
            }
        ]
    },
    {
        id: 'mobile',
        name: 'Mobile',
        description: 'The cross platform mobile base application',
        types: [
            {
                id: 'type-a',
                name: 'Type A',
                description: 'React Native, Node, Typescript, React are its core Technologies.',
                dir: ''
            },
            {
                id: 'type-b',
                name: 'Type B',
                description: 'Not yet created.',
                dir: ''
            }
        ]
    },
    {
        id: 'desktop',
        name: 'Desktop',
        description: 'The cross platform desktop base application',
        types: [
            {
                id: 'type-a',
                name: 'Type A',
                description: 'Chromium, Node, Typescript, React are its core Technologies.',
                dir: ''
            },
            {
                id: 'type-b',
                name: 'Type B',
                description: 'Not yet created.',
                dir: ''
            }
        ]
    }
]

const logo = `
`

export {
    logo,
    config
}