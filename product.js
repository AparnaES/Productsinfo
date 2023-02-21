function addProduct() {
    p={Name:pname.value,id:pid.value,price:prate.value,brand:pbrand.value,stock:pstock.value}
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
        <h3>Product Brand : ${item.brand}</h3>
        <h3>Product Stockvalue : ${item.stock}</h3>`
    } else {
        output.innerHTML=`<h3>--Product Not Found--</h3>`
        alert("Product is not Present")
    }
}
function register() {
    username=run.value
    userid=ruid.value
    password=rpw.value
    phone=rnum.value

    userdetails={username,userid,password,phone}
    if (userid in localStorage) {
        alert(`User already registered`)
        window.location="index.html"
    } else {
        localStorage.setItem(userid, JSON.stringify(userdetails))
        alert(`User Registered Succesfully`)
        window.location="index.html"
    }
}
function logIn() {
    id=uid.value
    psw=pw.value
    if (id in localStorage) {
        data=JSON.parse(localStorage.getItem(id))
        if (psw==data["password"]) {
            window.location="productinfo.html"
            alert(`Login Successful`)

        }
         else {
            alert(`Incorrect Password`)
        }
    } 
    else {
        alert(`Incorrect Username`)
    }
   
}
function logOut() {
    localStorage.removeItem("id")
    window.location="index.html"
}
