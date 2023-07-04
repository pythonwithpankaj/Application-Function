function head(title) {
       document.write (`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <a href="index.html">${title}</a>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="page1.html">Page 1</a></li>
            <li><a href="page2.html">Page 2</a></li>
            <li><a href="page3.html">Page 3</a></li>
            <li><a href="page4.html">Page 4</a></li>
            <li><a href="page5.html">Page 5</a></li>
        </ul>
    </nav>
    <section>
     `);
}
function post(count) {
    let p = 1;
    do {
        document.write(`<h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa, quasi deleniti iure fuga enim vitae officiis ipsam aut sit adipisci consectetur rem iusto architecto aliquid sunt beatae quia deserunt velit voluptate, est illo maiores eaque inventore. Repudiandae inventore voluptatum dolorem laudantium, neque qui debitis nulla saepe aut in excepturi accusantium magnam, illo sit ipsam fugiat? Incidunt, modi ratione at pariatur nostrum reiciendis facilis quae obcaecati, dolorum atque aliquid error numquam eius labore suscipit? Est quo soluta doloribus. Id delectus maiores qui dolorem animi deleniti doloremque fugiat voluptatum perspiciatis, molestias officiis cupiditate cumque expedita architecto perferendis pariatur laudantium placeat voluptates quam mollitia quod voluptate unde itaque nam! Sapiente, magnam! Officiis adipisci porro sint sapiente optio laborum nam sit autem sed qui illo animi, accusamus dolorum temporibus mollitia nemo nostrum est deleniti velit ex nulla! Laborum quos, illum suscipit voluptatem atque earum quisquam reprehenderit doloribus fugit. Dolore quo assumenda consequuntur ullam, sed ratione ex voluptatibus? Cupiditate, iusto sit? Accusamus id eum sapiente! Error ipsum maiores a culpa, alias minus incidunt repellat obcaecati sequi voluptatem nobis iste? Iure nulla eius accusamus sunt vitae totam unde nisi minima quasi atque et reprehenderit, dolorum ea incidunt labore perferendis hic eaque ducimus saepe earum alias? Tenetur ad voluptas dolor debitis necessitatibus alias repellendus quaerat facere non. Dolores, molestias soluta culpa incidunt impedit sapiente magnam accusantium dolor consequatur cumque ea quisquam exercitationem perferendis tempora expedita enim? Placeat ea nesciunt enim minima quaerat rem voluptates quisquam, exercitationem nostrum libero ut, quidem dolores error excepturi voluptas. Harum, facilis?</p>`);
         p++;
     }
     while (p<=count);
}
function footer() {
    document.write(`</section>
    <footer>
          <h4>copyright &copy; 2023 my application </h4>
    </footer>
</body>
</html>`);
}
function image(imgData) {
    document.write(`<img src="image/${imgData}" alt="ducat india"`);
}