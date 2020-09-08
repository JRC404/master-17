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

## classes
Class selector - it can be applied to multiple parts of the page, and is widely used when wanting to style particular areas.
```html
<!-- single class -->
<p class="large">Hello, I am large.</p>
<p class="red">Hello, I am red.</p>
<!-- multiple classes -->
<p class="large red">Hello, I am large && red.</p>
```
```css
.large {
    font-size: 500px;
}

.red {
    color: red;
}
```

## box model
```html
<div class="box">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque veniam placeat harum totam asperiores tempore et labore a quo voluptas.</p>
</div>
```
1. content - what we would like in the box.
2. padding - area around the content. Padding is transparent.
```css
.box {
    padding: 25px; /* 25px of padding, for the top, the right, the bottom and the left */
    padding: 25px 20px; /* top && bottom are 25px, right && left are 20px */
    padding: 25px 20px 15px; /* top is 25px, right && left are 20px, bottom is 15px; */
    padding: 25px 20px 15px 10px; /* top is 25px, right is 20px, bottom is 15px && left is 10px */
}
```
3. border - border goes around the padding, which goes around the content.
4. margin - clear an area outside of the border. Margin is transparent.



## Tips

* When you're styling CSS, style top to bottom. Navigation bar all the way to the footer. Structure your file in the way you style.

* embedding fonts - take the URL, add to the top of your css file and then add the font-family to the body {} - best way