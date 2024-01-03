window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var blogData = JSON.parse(decodeURIComponent(urlParams.get("data")));

    var blogPost = document.createElement("div");
    blogPost.className = "blogPost";
    blogPost.innerHTML = "<h2>" + blogData.title + "</h2>" +
                        "<img src='" + blogData.image + "' alt='Blog Image'>" +
                        "<p>" + blogData.content + "</p>" +
                        "<iframe width='560' height='315' src='" + blogData.video + "' frameborder='0' allow='accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

    document.getElementById("blogContainer").appendChild(blogPost);
};
