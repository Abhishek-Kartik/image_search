const searchForm = document.querySelector("#search-form");
const searchbox = document.querySelector("#search-box");
const searchbtn = document.querySelector("#search-btn");
const searchresult = document.querySelector("#result");
const showmore = document.querySelector("#show-more");

const accesskey = "3iEhFo-KkTIZk7tdfdrP0We8bXWSV9SNlX_lAepDk0k";

let keyword="";
let page=1;

const searchimages= async()=>{
  keyword = searchbox.value;
  const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  

  const res= await fetch(url);
  const data = await res.json();
  
  if(page===1){
    searchresult.innerHTML= "";
  }

  const results = data.results;
  results.map((result)=>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target='_blank';

    imagelink.appendChild(image);
    searchresult.appendChild(imagelink);
  })
  showmore.style.display ="block";
}

searchForm.addEventListener("submit",(event)=>{
      event.preventDefault();
      page=1;
      searchimages();
});


showmore.addEventListener("click",()=>{
  page++;
  searchimages(); 
})
 