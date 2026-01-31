const fs = require('fs');

const pages =
{
    1: fs.readFileSync(`${__dirname}/../client/client.html`),
    2: fs.readFileSync(`${__dirname}/../client/client2.html`),
    3: fs.readFileSync(`${__dirname}/../client/client3.html`),

}

const getPage = (request, response, pageNumber) =>
{
    const page = pages[pageNumber];

    if (!page)
    {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page not found');
        return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(page);
    response.end();
};

module.exports = { getPage }