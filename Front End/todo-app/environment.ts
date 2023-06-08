export const baseUserUrl = 'http://127.0.0.1:8000/user/'
export const baseTaskUrl = 'http://127.0.0.1:8000/task/'
export const baseUrl = 'http://127.0.0.1:8000'



/*
 Singup API
     Api -  http://127.0.0.1:8000/user/signup  
     Http Method -  post
     Key -  name,email,mobile,password,image
     Response -  statusCode(number), message(string)


Login API
     Api -  http://127.0.0.1:8000/user/login
     Http Method -  post
     Key -  email,password
     Response -  message(string), token(string), userId(number), userName(string)
     
     
Add Task API
     Api -  http://127.0.0.1:8000/task/add
     Http Method -  post
     Key -  task, description, priority
     Response -  statusCode(number), msg(string)


Pending Task Api
     Api -  http://127.0.0.1:8000/task/pending?user=1
     Http Method -  post
     Key -  task, description, date, priority
     Response -  statusCode(number), tasks(any[]), msg(string) 
     
     
Delete Task Api
     Api -  http://127.0.0.1:8000/task/remove/1
     Http Method -  delete
     Response -  statusCode(number), msg(string) 


Update Task Api 
     Api -  http://127.0.0.1:8000/task/update/1
     Http Method -  put
     Key -  task, description, complete, date, status, user
     Response -  statusCode(number), msg(string)
     
     
Completed Task Api 
     Api -  http://127.0.0.1:8000/task/completed?user=1
     Http Method -  get
     Key -  task Id, task, description, completed date, priority
     Response -  statusCode(number), tasks(any[]), msg(string)
     
     
Search Task Api 
     Api -  http://127.0.0.1:8000/task/search?user=1&query=text
     Http Method -  get
     Key -  task Id, task, description, completed date, priority
     Response -  statusCode(number), tasks(any[]), msg(string)


Filter Task Api 
     Api -  http://127.0.0.1:8000/task/filter/task?user=1&priority=low
     Http Method -  get
     Key -  task Id, task, description, completed date, priority
     Response -  statusCode(number), tasks(any[]), msg(string)
*/