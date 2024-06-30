// tree processor
var tree = {
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
};
var treeProcessor = function (node, callback) {
    callback(node);
    for (var _i = 0, _a = (node === null || node === void 0 ? void 0 : node.children) || []; _i < _a.length; _i++) {
        var cNode = _a[_i];
        treeProcessor(cNode, callback);
    }
};
treeProcessor(tree, function (node) {
    console.log(node.name);
});
// tree generators/parser
var textHtml = "\n    <div class=\"parent\" id=\"_parent\" style=\"\">\n        <h1 class=\"first-child\">heading good</h1>\n        <div class=\"second-child\">\n            <div>\n                <i>italize content</i>\n            </div>\n            <div>\n                <b>bold content</b>\n            </div>\n        </div>\n        <div>\n            <b style=\"margin:10px;\">content inside the third child</b>\n            <input type=\"text\" />\n        </div>\n    </div>\n";
var treeGenerator = function (html) {
    return;
};
treeGenerator(textHtml);
