const displayContent = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url == "/profile"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>This is the profile page.</p>');
        return res.end();
    }
    if(url == "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>home</p>');
        return res.end();
    }
    if(url == "/settings" && method == "POST"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Form was submitted</h1>');
        return res.end();
    }
    if(url == "/settings"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>settings</h1><form action="/settings" method="POST"><input type="text"><button type="submit">Press Me</button><form>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Page not found</p>');
    res.end();
}

module.exports = displayContent;