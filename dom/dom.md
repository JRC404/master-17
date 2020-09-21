* JS source link goes at the bottom of the HTML body tag as the elements need to be loaded before they can be modified.

```html
<body>
    <h1 class="heading">Hello</h1>
    <!-- this stays at the bottom -->
    <script src="index.js"></script>
</body>
```