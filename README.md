Hotjar tracking for GitBook
===========================

It is available as **NPM** package:

```
$ npm i gitbook-plugin-hotjar --save
```

Within book.json we have:

```
{
    "plugins": ["hotjar"]
}
```

It is simple to set Hotjar analytics ID using the plugins configuration in the book.json:

```
{
    "plugins": ["hotjar"],
    "pluginsConfig": {
        "hotjar": {
            "hjid": 01234567
        }
    }
}
```
