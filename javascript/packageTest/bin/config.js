"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.logo = void 0;
const config = [
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
];
exports.config = config;
const logo = `
    oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
    ooooooooooo/  /oo.*  .*ooooooooooooooooooooooooooooooooooooooooooooooooo
    oooooooooo/  /o*  .ooooooooooooooooooooooooooooooooooooooooooooooooooooo
    ooooooooo/     .*oo/    |/       |/.  _/|o/   |o/  /  ____/  __   /ooooo
    oooooooo/    *oooo/  o  |  /oo|__|/  /  |/    |/  /  |ooo/. /oo  /oooooo
    ooooooo/  .o.  *o/  _   | /oo+---+  /|  |  |  |  /|   __/  __  ooooooooo
    oooooo/  /ooo*.  *./o|  | |oo|  |  /o|  . /|  . /o|  |o/__/ooo  /ooooooo
    ooooo/__/oooooo*.__*o|__|.______|__/o|___/o|___/oo|_______/____/oooooooo
    oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
`;
exports.logo = logo;
