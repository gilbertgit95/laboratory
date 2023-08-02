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
const input_1 = __importDefault(require("./input"));
class Platform {
    constructor(info) {
        this.info = info;
    }
    getTypeInfo(id) {
        let result = null;
        this.info.types.forEach(item => {
            if (item.id === id)
                result = item;
        });
        return result;
    }
    selectType() {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedType = yield input_1.default.selectInput({
                message: 'Please select apllication type',
                choices: this.info.types.map(item => {
                    return {
                        title: item.name,
                        description: item.description,
                        value: item.id
                    };
                })
            });
            return selectedType;
        });
    }
}
exports.default = Platform;
