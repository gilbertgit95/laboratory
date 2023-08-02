"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = __importDefault(require("./utilities/platform"));
const input_1 = __importDefault(require("./utilities/input"));
const config_1 = require("./config");
class Main {
    constructor(platforms) {
        this.platforms = platforms.map(item => {
            return new platform_1.default(item);
        });
    }
    getPlatform(id) {
        let result = null;
        this.platforms.forEach(item => {
            if (item.info.id === id)
                result = item;
        });
        return result;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(config_1.logo);
            console.log(` - Welcome to kagiweb-cli! Please be noted that this app will populate base code and files inside the current folder:`);
            console.log(` - ${__dirname}`);
            console.log(` - Choose Kagiweb base code you wanted to develop.`);
            console.log('\n');
            // let user select platforms
            const platformSelection = yield input_1.default.selectInput({
                message: 'Please select application Platform.',
                choices: this.platforms.map(item => {
                    return {
                        title: item.info.name,
                        description: item.info.description,
                        value: item.info.id
                    };
                })
            });
            // get selected platform
            const SelectedPlatform = this.getPlatform(platformSelection ? platformSelection : '');
            // execute selected platform
            const SelectedType = SelectedPlatform ? yield SelectedPlatform.selectType() : null;
            const SelectedTypeInfo = SelectedPlatform === null || SelectedPlatform === void 0 ? void 0 : SelectedPlatform.getTypeInfo(SelectedType ? SelectedType : '');
            console.log('\n');
            console.log(` - Processing: ${SelectedPlatform === null || SelectedPlatform === void 0 ? void 0 : SelectedPlatform.info.id} -> ${SelectedTypeInfo === null || SelectedTypeInfo === void 0 ? void 0 : SelectedTypeInfo.id}`);
            console.log(' - This app is still on development.');
            console.log(' - Done generating base code!');
        });
    }
}
exports.default = Main;
