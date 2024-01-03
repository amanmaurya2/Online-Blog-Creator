function createBlog() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var image = document.getElementById("image").value;
    var video = document.getElementById("video").value;
    
    var blogData = encodeURIComponent(JSON.stringify({
        title: title,
        content: content,
        image: image,
        video: video
    }));
    
    var blogPageUrl = "blog.html?data=" + blogData;
    
    window.location.href = blogPageUrl;
}
