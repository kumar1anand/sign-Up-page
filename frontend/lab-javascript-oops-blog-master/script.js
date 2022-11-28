
class Blog{
    constructor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        // console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
addDescription(){
    var description_card = document.createElement('p');
    description_card.setAttribute("id","blog-description");
    // console.log(description_card);
    document.getElementById('card-text').appendChild(description_card);
    description_card.innerHTML += this.detail;
}
}

let addpost=document.getElementById("addBlog");

let pop=document.getElementById("popupContact");

addpost.onclick = function(){

    pop.setAttribute('style','display:block')
}

let post1=document.getElementById('post');

post1.onclick= function(){
     let title=document.getElementById('title');
     let desc=document.getElementById('detail');
     b=new Blog(title.value ,desc.value );
     b.addTitle();
     b.addDescription();
     pop.removeAttribute('style','display: none');
      title.value="";
      desc.value="";
    
    
}




