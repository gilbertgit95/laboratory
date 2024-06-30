// tree processor

interface INode {
    name: string,
    description: string
    children?: INode[]
}

let tree:INode = {
    name: 'parent',
    description: '',
    children: [
        {
            name: 'child1',
            description: '',
            children: [
                {
                    name: 'child11',
                    description: '',
                    children: [
                        {
                            name: 'child111',
                            description: '',
                        },
                        {
                            name: 'child112',
                            description: '',
                            children: [
                                {
                                    name: 'child1121',
                                    description: '',
                                },
                                {
                                    name: 'child1122',
                                    description: ''
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'child12',
                    description: '',
                    children: [
                        {
                            name: 'child121',
                            description: '',
                        },
                        {
                            name: 'child122',
                            description: ''
                        }
                    ]
                }
            ]
        },
        {
            name: 'child2',
            description: '',
        },
        {
            name: 'child3',
            description: '',
            children: [
                {
                    name: 'child31',
                    description: '',
                    children: [
                        {
                            name: 'child311',
                            description: '',
                            children: [
                                {
                                    name: 'child3111',
                                    description: '',
                                    children: [
                                        {
                                            name: 'child31111',
                                            description: ''
                                        },
                                        {
                                            name: 'child31112',
                                            description: ''
                                        }
                                    ]
                                },
                                {
                                    name: 'child3112',
                                    description: ''
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const treeProcessor = (node:INode, callback:(node:INode) => void) => {
    callback(node)
    for (let cNode of node?.children || []) treeProcessor(cNode, callback)
}

treeProcessor(tree, (node:INode) => {
    console.log(node.name)
})


// tree generators/parser

const textHtml = `
    <div class="parent" id="_parent" style="">
        <h1 class="first-child">heading good</h1>
        <div class="second-child">
            <div>
                <i>italize content</i>
            </div>
            <div>
                <b>bold content</b>
            </div>
        </div>
        <div>
            <b style="margin:10px;">content inside the third child</b>
            <input type="text" />
        </div>
    </div>
`

const treeGenerator = (html:string|undefined):INode|undefined => {
    return
}

treeGenerator(textHtml)

