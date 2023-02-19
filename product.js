function addProduct() {
    p={Name:pname.value,id:pid.value,price:prate.value,stock:pstock.value}
    if (pid.value in localStorage) {
        alert(`Product Already Exist..`)
    } else {
        localStorage.setItem(p.id, JSON.stringify(p))
        alert(`Product Added Succesfully..`)
    }
}
function viewProduct() {
    window.location="home.html"
}
function searchProducts() {
    keyid=psid.value
    if (keyid in localStorage) {
        item=JSON.parse(localStorage.getItem(keyid))
        output.innerHTML=`<h3>Product ID : ${item.id}</h3>
        <h3>Product Name : ${item.Name}</h3>
        <h3>Product Price : ${item.price}</h3>
        <h3>Product Stockvalue : ${item.stock}</h3>`
    } else {
        output.innerHTML=`<h3>--Product Not Found--</h3>`
        alert("Product is not Present")
    }
}