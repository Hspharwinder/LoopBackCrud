# LoopBackCrud

# node-crud-api-loopback

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

https://loopback.io/doc/en/lb4/Getting-started.html

1. lb4 app (your app name) --yes   (make sure your app name letter sholud be small)
	e.g. lb4 loop-back-angluar-node-real-time-chat --yes 

2. npm start

3. Add controller
------------
lb4 controller

4. code 
------------
import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}

5. npm start

FOR crud
==============
1. Add datatSource 
cmd--	lb4 datasource 
select -- MongDb (supported by StrongLoop)
connection string url to override ... : 
host: localhost
port: 27017
user:
password:
database: any Db name exsisting or non-exsisting
connetor : yes

2. add model
cmd --  lb4 model
base class : presistedModel
add properties
3. add repository
   lb4 repository
4. add controller
   lb4 controller

npm start

use get api 
and post api 
check mongodb working fine
 

	
