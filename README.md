# Запустить проект с помощью докера
необходимо написать команды в консоли:

git clone https://github.com/pratovv/currency-parser-express 

cd currency-parser-express

docker build -t myapp .

docker run --publish 5000:5000 myapp

затем необходимо перейте по ссылке,для того чтобы увидеть документацию

http://localhost:5000/swagger-api/

# Запустить проект без докера (требуется предустановленный node.js)
необходимо написать команды в консоли:

git clone https://github.com/pratovv/currency-parser-express

cd currency-parser-express

npm install

npm start

затем необходимо перейте по ссылке,для того чтобы увидеть документацию

http://localhost:5000/swagger-api/
