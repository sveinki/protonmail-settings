# ProtonMail-settings

You will need:
- bash
- node (mini latest LTS)
- npm (latest too, it's better)

## How to dev

1. Clone the WebClient
2. Clone this repository
3. Clone [fe-proxy](https://github.com/ProtonMail/fe-proxy)
4. Run `$ npm install` in every repo
5. Create an env file with the key `ROOT_DIR=/tmp` (_if you cloned everything inside /tmp_ )

> :warning: Clone them inside the same root dir.

Once it's done `./app dev` :tada:

> It will run first, WebClient, then settings and proxy.
> :warning: A bit static for now, it's quick&dirty so 8080, 8081 and 8040 need to be available.

App available on `http://localhost:8040`.
Settings available on `http://localhost:8040/settings/`

### Where should I should I clone them ?

Better to keep the default dir and inside the same dir.
ex:
```sh
49 directories, 56 files 
[atlas]:~/dev/taf
$ pwd     
/home/dhoko/dev/taf
[atlas]:~/dev/taf
$ tree -l
.
├── Angular
├── protonmail-settings
└── fe-proxy
```

Here WebClient is inside the dir `Angular`, is it an issue ? Nope.
We can configure it via the env.

``` 
ROOT_DIR=/home/dhoko/dev/taf
WEBCLIENT_APP=Angular
``` 

One key/env:
- `WEBCLIENT_APP`: dirname where is the webclient
- `SETTINGS_APP`: dirname where is protonmail-settings
- `PROXY_APP`: dirname where is the fe-proxy

> Default === dirname with the default git clone dir.


## Sync translations

You can sync them via `$ npm run i18n:upgrade`, it will:
- Extract translations
- Push them to crowndin
- Create a commit with them on the repo
