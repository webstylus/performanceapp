#Performance APP

Teste de performance usando:

- rect-devtools
- expo
- json-server


### Start da aplicação

Configure *./src/screens/Home.tsx* com seu host de teste local

```tsx

async function handleSearch() {
    try {
        const response = await fetch(`your-host:3333/friends?q=${name}`)
        const data = await response.json()
        setFriends(data)
    } catch (e) {
        console.log(e)
    }
}

```

```shell
$ yarn install
$ expo start
$ json-server -d 750 -w -H your-host -p 3333 ./src/api/server.js
$ react-devtools
```
