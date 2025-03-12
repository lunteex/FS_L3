const { fileOperations } = require('./modules/Functions');

console.log('Тестирование синхронных функций:');

fileOperations.writeToFile('src/test.txt', 'NIKITA NOVIK 123123123');

console.log('Чтение файла:', fileOperations.readFromFile('src/test.txt'));

fileOperations.cleanFile('src/test.txt');
console.log('После очистки:', fileOperations.readFromFile('src/test.txt'));

fileOperations.copyFile('src/test.txt', 'src/test_copy.txt');

fileOperations.createFolder('src/test_folder');