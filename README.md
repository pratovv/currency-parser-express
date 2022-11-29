# Запустить проект с помощью докера
необходимо написать команды в консоли:

git clone https://github.com/pratovv/currency-parser-express 

cd currency-parser-express

docker build -t myapp .

docker run --publish 5000:5000 myapp

# Запустить проект без докера
необходимо написать команды в консоли:

git clone https://github.com/pratovv/currency-parser-express

cd currency-parser-express

npm install

npm start


