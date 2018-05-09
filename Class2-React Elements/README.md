# REACT.JS USING CDN LINKS

### Installation

Insert these scripts in head:

```sh
<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>
```

And Implement all of React code in between **BABEL** script:

```sh
<script type="text/babel">
    ReactDOM.render(
        <h1>Hello World</h1>,
        document.getElementById("root")
    )
</script>
```

#### CODEPEN 

See [Class-2](https://codepen.io/aliazazalam/pen/pVWqdr)