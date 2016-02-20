1. set database path for mongo
2. in powershell: mongod
3. in gitbash: mongo

show dbs
use test
show collections

<!-- clear -->
cls

<!-- test inserts -->
db.name.insert({'name':'zhenapanda'})
db.name.find().pretty()

<!-- collection creation -->
db.creatCollection('customers')
use customers
switched to db customers


