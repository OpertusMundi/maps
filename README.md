# Topio Maps

## Quick Start

Clone the repository with the --recursive option to automatically clone submodules:

```
git clone --recursive path/to/repo`
```

Install NodeJS >= 7.10.0 , if needed, from [here](https://nodejs.org/en/download/releases/).

Start the development application locally:

```
npm i
npm start
```

The application runs at `http://localhost:8081` afterwards.

## API examples

- List of all users

```
curl -u admin:admin -XGET 'http://localhost:8081/rest/geostore/users'
```

- Add new user

```
curl -u admin:admin -XPOST -H 'Content-type: text/xml' -d '<User><name>topio</name><newPassword>topio</newPassword><role>USER</role></User>' 'http://localhost:8080/rest/geostore/rest/users'
```

## LICENSE

This program is free software. See `license.txt` for more information.
