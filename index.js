

function getAlluser() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.onload = function () {
        if (request.readyState === 4 && request.status === 200) {
            let data = request.response;
            let x = "";
            for (let i = 0; i < data.length; i++) {
                x += `<div onclick="showpost(${i+1 })"  class="post">
                            <h3>${data[i].name}</h3>
                            <h4>${data[i].email}</h4>
                          </div>`;    
                
            }
            console.log(data);
            console.log("Posts retrieved successfully:");
            console.log("lengrth"+data.length); // Access the retrieved posts data here
            console.log(data); // Access the retrieved posts data here
            document.getElementById("users").innerHTML = x; // Update the HTML content with the posts
        } else {
            console.error("Failed to retrieve posts.");
        }
    };
    request.send();
}


getAlluser();

function getAllposts(id) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+id);
    request.responseType = "json";
    request.onload = function () {
        if (request.readyState === 4 && request.status === 200) {
            let data = request.response;
            let x = "";
            for (let i = 0; i < data.length; i++) {
                x += `<div class="post">
                            <h3>Title : ${data[i].title}</h3>
                            <h4> body :${data[i].body}</h4>
                          </div>`;    
                
            }
            console.log(data);
            console.log("Posts retrieved successfully:");
            console.log("lengrth"+data.length); // Access the retrieved posts data here
            console.log(data); // Access the retrieved posts data here
            document.getElementById("posts").innerHTML = x; // Update the HTML content with the posts
        } else {
            console.error("Failed to retrieve posts.");
        }
    };
    request.send();
}




getAllposts();

function showpost(n)
{
     
    getAllposts(n );
    var post = document.getElementsByClassName("post");
    for (var i = 0; i < post.length; i++) {
      post[i].style.borderColor = " white";
    }
    post[n-1].style.border = "3px solid blue";

}