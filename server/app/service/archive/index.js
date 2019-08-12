'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const Base64 = require('js-base64').Base64;

const BASE_PATH = 'e:\\沿江攀宁高速智慧工地\\资料归档'

class ArchiveService extends Service {
    async getArchiveTree(path) {
        if (path === "0") path = "";
        const dirPath = BASE_PATH + '\\' + (path);
        const data = await read(dirPath)
        return data.map((element, index) => {
            return {
                key: new Date().getTime() + "_" + index,
                title: element,
                parentPath: Base64.encodeURI(dirPath)
            }
        })
    }
}

const read = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, data) => {
            if (err) {
                reject(console.log(err))
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = ArchiveService