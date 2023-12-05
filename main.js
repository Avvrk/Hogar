document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.articulo');

    articles.forEach((articulo, index) => {
        setTimeout(() => {
            articulo.classList.add('aparecer');
        }, index * 100);
    });
});