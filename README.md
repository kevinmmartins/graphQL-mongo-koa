# graphQL-mongo-koa

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8c36254b03464603a928c2cac38b62aa)](https://app.codacy.com/app/kevinmmartins/graphQL-mongo-koa?utm_source=github.com&utm_medium=referral&utm_content=kevinmmartins/graphQL-mongo-koa&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/kevinmmartins/graphQL-mongo-koa.svg?branch=master)](https://travis-ci.org/kevinmmartins/graphQL-mongo-koa)

Simple project to practice graphQL with Mongo and Koa

## Requirements

* Docker Compose 1.21.2+

## Run with Docker Compose

```bash
docker-compose build
docker-compose up
```

## Check the project

### Go to

```http
http://localhost:8085/graphql
```

### Use the Query

```graphql
{
	user(name: "Kevin Martins") {
	name
    age
    birthday
    nick
    id
  }
}
```

### Execute

 ![alt text](https://user-images.githubusercontent.com/20428703/53459347-2d96e280-3a18-11e9-9234-5a3bb2da85c5.png)
