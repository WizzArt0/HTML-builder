const fs = require('fs');
const path = require('path');
const process = require('process');

const fileName = path.join(__dirname, 'text.txt')

const output = fs.createWriteStream(fileName);

const { stdin, stdout } = process;
stdout.write('Пожалуста, введите ваши данные:\n');

stdin.on('data', data => {
    let inputText = data.toString();
    if (inputText.toUpperCase() === 'EXIT\r\n') {
        process.exit();
    } else {
        output.write(inputText);
    }
});

process.on('SIGINT', () => {
    process.exit();
});
process.on('exit', () => {
    stdout.write('Файл готов. До свидания.\r\n')
});