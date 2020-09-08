# CSS

Styles elements in a way that we choose. It works on a last-read, first implemented process.

Three different ways of using CSS

1. Inline styling - this is the devil. The devil.
2. Internal styling - this is like, well, a cousin that you see at Christmas
3. External styling - this is the bee's knees

1. Inline: it is the closest styling type to the element. Meaning, it will override any other css given to the code. On the same line as the element you are styling.
```html
<p style="color: red; font-size: 50px">Hello, I am CSS</p>
<p style="color: red; font-size: 50px">Hello, I am CSS, also.</p>
<p style="color: red; font-size: 50px">Hello, I am CSS, me too.</p>
<p style="color: red; font-size: 50px">Hello, I am CSS, I am.</p>
<p style="color: red; font-size: 50px">Hello, I am CSS. Woo.</p>
```

2. Internal: it is the second closest styling type to the element. Inside of the html file where the elements reside. It is inside of the head tag like so... The ability to style many elements at once, without repetition. The ability to style many elements at once, without repetition. The ability to style many elements at once, without repetition. 
```html
<head>
    <style>
        h1 {
            color: pink;
            font-size: 100px;
            text-decoration: underline;
        }

        p {
            color: red;
        }
    </style>
</head>
<body>
    <p>This will be red.</p>
    <p>This will be red.</p>
    <p>This will be red.</p>
    <p>This will be red.</p>
</body>
```

3. External styling - which is a css file located outside of the html file. 
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>I should be red.</p>
</body>
```

```css file: style.css
p {
    color: red;
}
```

## Tips

* When you're styling CSS, style top to bottom. Navigation bar all the way to the footer. Structure your file in the way you style.

* embedding fonts - take the URL, add to the top of your css file and then add the font-family to the body {} - best way