// fetching github.user data:
fetch('https://api.github.com/users/woolsox')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Error: ' + response.status);
                return;
            }
    
        // test the data:
        response.json().then(function(data) {
            // console.log(data.html_url);
            // ^data test^ = success!
            
            
            // var declarations for template literal use
            // each var pulls from the git api user data:
            let name = data.name;
            let username = data.login;
            let url =  data.html_url;
            let email = 'dimeo.colin@gmail.com';
            let company = data.company;
            let website = data.blog;
            let story = data.bio;
            let avatar = data.avatar_url;
            let basicsTitle = 'The Basics';
            let storyTitle = 'The Story';
            
            // populate html page w/ content
            let populatePage =
                `
                <header><h1>${name}</h1></header>
                <div class='flex'>
                <div class='basics'>
                <h2>${basicsTitle}</h2>
                <ul>
                <li><b>Name:</b> ${name}</li>
                <li><b>GitHub URL:</b> <a href="${url}">${username}</a></li>
                <li><b>Email:</b> ${email}</li>
                <li><b>Company:</b> ${company}</li>
                <li><b>Website:</b> ${data.blog}</li>
                </ul>
                </div>
                <div class='story'>
                <h2>${storyTitle}</h2>
                <p>${story}</p>
                </div>
                <img src="${avatar}">
                </div>
                `
            
            // plugs all the content above into doc.body
            document.body.innerHTML = populatePage;
            
        });        
    } 
)