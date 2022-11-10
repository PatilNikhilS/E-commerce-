let Contacts = new Map();
Contacts.set("india", "+919999900000")
Contacts.set("uae", "+557291989484")
Contacts.set("canada", "+345564646454")
Contacts.set("usa", "+126987468446")

document.getElementById("select1").addEventListener('change', () => {
    let country = document.getElementById('select1').value;
    document.getElementById('phone').innerHTML = Contacts.get(country);
    document.getElementById('flag').src = `img/${country}.png`;
})

document.getElementById("srcollUp").classList.add("hide");
getYPosition = () =>{
    var top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
  }