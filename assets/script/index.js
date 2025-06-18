const container = document.createElement('div');
document.body.prepend(container);

const createPost = (post) => {
    const title = document.createElement('h2');
    title.style.color = 'red';
    const text = document.createElement('p');

    title.textContent = `Заголовок: ${post.title}`;
    text.textContent = `Статья: ${post.body}`;

    container.append(title, text);
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(post => {
            createPost(post)
        })
    })
