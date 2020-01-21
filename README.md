# Backend DevRadar

Backend feito em Node Js para servir a aplicações frontend ou mobile

## Getting Started

```
git clone https://www.github.com/felipeokino/semanaomnistack10_backend.git backend
cd backend
```

### Prerequisites

What things you need to install the software and how to install them


1. Node js - [Download Node](https://nodejs.org/en/download/)
2. Package manager - [Download Yarn](https://yarnpkg.com/en/docs/install)


### Starting project

After cloned project
```
yarn install
yarn start
```
![Screen Shot 2020-01-21 at 13 22 26](https://user-images.githubusercontent.com/21133528/72822723-59830e00-3c51-11ea-8639-f6d9f5e4c5f9.png)

Backend will be running on port 3000

## Endpoints list

### Create new user
#### send a post request to:
```
http://localhost:3333/insert/devs
```
#### Body example
![Screen Shot 2020-01-21 at 13 38 53](https://user-images.githubusercontent.com/21133528/72824054-6a348380-3c53-11ea-8b1e-8aba963175b5.png)


### Get all users
#### send a get request to:
```
http://localhost:3333/get/devs
```
#### Response send a array with objects
##### Object example
![Screen Shot 2020-01-21 at 13 44 39](https://user-images.githubusercontent.com/21133528/72824538-327a0b80-3c54-11ea-800f-1d255d53c7cb.png)

### Delete user
#### send a post request to:
```
http://localhost:3333/delete/devs
```
#### Body Example
![Screen Shot 2020-01-21 at 13 42 22](https://user-images.githubusercontent.com/21133528/72824355-e0d18100-3c53-11ea-85f5-00eaccd73ae8.png)

