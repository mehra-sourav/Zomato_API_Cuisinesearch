var data = null;

function parser(data)
{
    return JSON.parse(data);
}

function createcards(dataObj)
{
    var data = dataObj.cuisines;
    
    var cardgroup = document.getElementById('cg')
    var count =0
    data.forEach(function(obj){
        cardgroup.appendChild(createitem(obj,++count));
        //console.log(++count);
    })
    document.body.appendChild(cardgroup);
}

function createitem(obj,count)
{
    var card = document.createElement('div')
    var a1 = '<div class="card text-white bg-secondary mt-3 mr-3 ml-3" style="width: 20rem;">'
             + '<div class="card-body">'
             + '<h5 class="card-title center2">Cuisine-'+count+'</h5>'
    var a2 = '<p class="card-text center2">'+obj.cuisine.cuisine_name
             + '</p>'
    
    card.innerHTML =  a1+a2;
    
    
    //li.innerHTML = "Cuisine:"+obj.cuisine.cuisine_name;
    return card;
}

var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
      var dataObj = parser(this.responseText);
      console.log('dataObj',dataObj);
      createcards(dataObj);
  }
});

xhr.open("GET", "https://developers.zomato.com/api/v2.1/cuisines?city_id=1");
xhr.setRequestHeader("user-key", "aebcf54376d5787dd8d799adbbfac4bf");
//xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
//xhr.setRequestHeader("Accept", "*/*");
//xhr.setRequestHeader("Cache-Control", "no-cache");
//xhr.setRequestHeader("Postman-Token", "e0e512d8-b05d-4d06-9fba-c3d9d8457c59,bc3ae3e4-f812-45e8-af0c-049f93fe780f");
//xhr.setRequestHeader("Host", "developers.zomato.com");
//xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
//xhr.setRequestHeader("Cookie", "fbcity=1; zl=en; fbtrack=38a326f0d8aab23a60321a0782c72fe4; PHPSESSID=71cf91bde4aab52bf389defed6353322897438a2; csrf=0923068f0ea97a89d4568c6bbd00fe8d");
//xhr.setRequestHeader("Connection", "keep-alive");
//xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);