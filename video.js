const loadphones=async(searchText) =>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
      const res =await fetch(url);
      const data =await res.json();
      displayphones(data.data);
}
const displayphones= phones=>{
    const phonesContainer=document.getElementById("phones-container");
phones.forEach(phone=> {
        const phonesDiv = document.createElement("div");
        phonesDiv.classList.add('col');
        phonesDiv.innerHTML=`
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        `;
        phonesContainer.appendChild(phonesDiv);
    });
}

document.getElementById("btn-search").addEventListener("click", function() {
        const searchField=document.getElementById("search-field");
        const searchText=searchField.value;
        loadphones (searchText);
})

loadphones( );