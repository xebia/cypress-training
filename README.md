# Abouts

- Forked client and server from git@github.com:codyseibert/tab-tracker.git

## Tab Tracker

A Vue.js / Express.js web application for keeping track of guitar tabs

## Setup

You need to have Node Js installed: <https://nodejs.org/en/>

You must at least have **NODE version 8.2.1**

To navigate the SQLite DB, you can use an application such as [THIS](https://sqlitebrowser.org/dl/) one

### Prerequisites for Windows users ###
If you have Windows, you need Python installed. You can do so [HERE](https://www.python.org/downloads/windows/)

### Client - Terminal A

``` bash
cd client
npm install
npm start
```
### Additional step for Mac - M1 processors

``` 
npm install chromedriver@<chrome-version>
```

### Server - Terminal B

``` bash
cd server
npm install
npm start
```

### On committing

run the pre-committer before you commit.

Installing pre-commit is easy, just:

```bash
brew install pre-commit
```

Running pre-commit:
pre-commit run
