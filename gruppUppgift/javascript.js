fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(json => {
    const productDiv = document.getElementById("product1");
    productDiv.innerHTML = `
      <img src="${json.image}" alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" width="350" height="400">
      <h2>${json.title}</h2>
      <p>Price: ${json.price}€</p>
    `;
  })
  .catch(err => console.error(err));



  const buyButton1 = document.getElementById("buyButton1");

  fetch("https://fakestoreapi.com/products/1")
  .then(res => res.json())
  .then(item => {
    buyButton1.addEventListener("click", function() {
      sessionStorage.setItem("itemId", item.id);
      sessionStorage.setItem("itemName", item.title);
      sessionStorage.setItem("itemImage", item.image);
      sessionStorage.setItem("itemPrice", item.price);
      window.location.href = "orderPage.html";
    });
  })
  .catch(err => console.error(err));



  fetch('https://fakestoreapi.com/products/2')
  .then(res => res.json())
  .then(json => {
    const productDiv = document.getElementById("product2");
    productDiv.innerHTML = `
      <img src="${json.image}" alt="Mens Casual Premium Slim Fit T-Shirts"  width="350" height="400">
      <h2>${json.title}</h2>
      <p>Price: ${json.price}€</p>
    `;
  })
  .catch(err => console.error(err));



  const buyButton2 = document.getElementById("buyButton2");

  fetch("https://fakestoreapi.com/products/2")
    .then(res => res.json())
    .then(item => {
      buyButton2.addEventListener("click", function() {
        sessionStorage.setItem("itemId", item.id);
        sessionStorage.setItem("itemName", item.title);
        sessionStorage.setItem("itemImage", item.image);
        sessionStorage.setItem("itemPrice", item.price);
        window.location.href = "orderPage.html";
      });
    })
    .catch(err => console.error(err));


  fetch('https://fakestoreapi.com/products/3')
  .then(res => res.json())
  .then(json => {
    const productDiv = document.getElementById("product3");
    productDiv.innerHTML = `
      <img src="${json.image}" alt="Mens Cotton Jacket"  width="350" height="400">
      <h2>${json.title}</h2>
      <p>Price: ${json.price}€</p>
    `;
  })
  .catch(err => console.error(err));


  
  const buyButton3 = document.getElementById("buyButton3");

  fetch("https://fakestoreapi.com/products/3")
    .then(res => res.json())
    .then(item => {
      buyButton3.addEventListener("click", function() {
        sessionStorage.setItem("itemId", item.id);
        sessionStorage.setItem("itemName", item.title);
        sessionStorage.setItem("itemImage", item.image);
        sessionStorage.setItem("itemPrice", item.price);
        window.location.href = "orderPage.html";
      });
    })
    .catch(err => console.error(err));



    fetch('https://fakestoreapi.com/products/4')
    .then(res => res.json())
    .then(json => {
      const productDiv = document.getElementById("product4");
      productDiv.innerHTML = `
        <img src="${json.image}" alt="Mens Casual Slim Fit"  width="350" height="400">
        <h2>${json.title}</h2>
        <p>Price: ${json.price}€</p>
      `;
    })
    .catch(err => console.error(err));
  
  
    
    const buyButton4 = document.getElementById("buyButton4");
  
    fetch("https://fakestoreapi.com/products/4")
      .then(res => res.json())
      .then(item => {
        buyButton4.addEventListener("click", function() {
          sessionStorage.setItem("itemId", item.id);
          sessionStorage.setItem("itemName", item.title);
          sessionStorage.setItem("itemImage", item.image);
          sessionStorage.setItem("itemPrice", item.price);
          window.location.href = "orderPage.html";
        });
      })
      .catch(err => console.error(err));

    

      fetch('https://fakestoreapi.com/products/5')
      .then(res => res.json())
      .then(json => {
        const productDiv = document.getElementById("product5");
        productDiv.innerHTML = `
          <img src="${json.image}" alt="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"  width="350" height="400">
          <h2>${json.title}</h2>
          <p>Price: ${json.price}€</p>
        `;
      })
      .catch(err => console.error(err));
    
    
      
      const buyButton5 = document.getElementById("buyButton5");
    
      fetch("https://fakestoreapi.com/products/5")
        .then(res => res.json())
        .then(item => {
          buyButton5.addEventListener("click", function() {
            sessionStorage.setItem("itemId", item.id);
            sessionStorage.setItem("itemName", item.title);
            sessionStorage.setItem("itemImage", item.image);
            sessionStorage.setItem("itemPrice", item.price);
            window.location.href = "orderPage.html";
          });
        })
        .catch(err => console.error(err));


        fetch('https://fakestoreapi.com/products/6')
        .then(res => res.json())
        .then(json => {
          const productDiv = document.getElementById("product6");
          productDiv.innerHTML = `
            <img src="${json.image}" alt="Solid Gold Petite Micropave "  width="350" height="400">
            <h2>${json.title}</h2>
            <p>Price: ${json.price}€</p>
          `;
        })
        .catch(err => console.error(err));
      
      
      const buyButton6 = document.getElementById("buyButton6");
      
      fetch("https://fakestoreapi.com/products/6")
        .then(res => res.json())
        .then(item => {
          buyButton6.addEventListener("click", function() {
            sessionStorage.setItem("itemId", item.id);
            sessionStorage.setItem("itemName", item.title);
            sessionStorage.setItem("itemImage", item.image);
            sessionStorage.setItem("itemPrice", item.price);
            window.location.href = "orderPage.html";
          });
        })
        .catch(err => console.error(err));



          fetch('https://fakestoreapi.com/products/7')
          .then(res => res.json())
          .then(json => {
            const productDiv = document.getElementById("product7");
            productDiv.innerHTML = `
              <img src="${json.image}" alt="Solid Gold Petite Micropave"  width="350" height="400">
              <h2>${json.title}</h2>
              <p>Price: ${json.price}€</p>
            `;
          })
          .catch(err => console.error(err));
        
        
          
          const buyButton7 = document.getElementById("buyButton7");
        
          fetch("https://fakestoreapi.com/products/7")
            .then(res => res.json())
            .then(item => {
              buyButton7.addEventListener("click", function() {
                sessionStorage.setItem("itemId", item.id);
                sessionStorage.setItem("itemName", item.title);
                sessionStorage.setItem("itemImage", item.image);
                sessionStorage.setItem("itemPrice", item.price);
                window.location.href = "orderPage.html";
              });
            })
            .catch(err => console.error(err));



            fetch('https://fakestoreapi.com/products/8')
            .then(res => res.json())
            .then(json => {
              const productDiv = document.getElementById("product8");
              productDiv.innerHTML = `
                <img src="${json.image}" alt="Solid Gold Petite Micropave"  width="350" height="400">
                <h2>${json.title}</h2>
                <p>Price: ${json.price}€</p>
              `;
            })
            .catch(err => console.error(err));
          
          
            
            const buyButton8 = document.getElementById("buyButton8");
          
            fetch("https://fakestoreapi.com/products/8")
              .then(res => res.json())
              .then(item => {
                buyButton8.addEventListener("click", function() {
                  sessionStorage.setItem("itemId", item.id);
                  sessionStorage.setItem("itemName", item.title);
                  sessionStorage.setItem("itemImage", item.image);
                  sessionStorage.setItem("itemPrice", item.price);
                  window.location.href = "orderPage.html";
                });
              })
              .catch(err => console.error(err));



              fetch('https://fakestoreapi.com/products/9')
              .then(res => res.json())
              .then(json => {
                const productDiv = document.getElementById("product9");
                productDiv.innerHTML = `
                  <img src="${json.image}" alt="Solid Gold Petite Micropave"  width="350" height="400">
                  <h2>${json.title}</h2>
                  <p>Price: ${json.price}€</p>
                `;
              })
              .catch(err => console.error(err));
            
            
              
              const buyButton9 = document.getElementById("buyButton9");
            
              fetch("https://fakestoreapi.com/products/9")
                .then(res => res.json())
                .then(item => {
                  buyButton9.addEventListener("click", function() {
                    sessionStorage.setItem("itemId", item.id);
                    sessionStorage.setItem("itemName", item.title);
                    sessionStorage.setItem("itemImage", item.image);
                    sessionStorage.setItem("itemPrice", item.price);
                    window.location.href = "orderPage.html";
                  });
                })
                .catch(err => console.error(err));

            


var itemImg = sessionStorage.getItem("itemImage");
var itemName = sessionStorage.getItem("itemName");
var itemPrice = sessionStorage.getItem("itemPrice");


document.getElementById("itemImage").src = itemImg;
document.getElementById("itemName").innerHTML = itemName;
document.getElementById("itemPrice").innerHTML = itemPrice;



document.getElementById("submitButton").addEventListener("click", function(event) {

    event.preventDefault();

    let valid = validateForm();
  

    if (valid) {
      window.location.href = "confirmationPage.html";
    }
  });



function validateForm() {
    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    let streetAddressInput = document.getElementById("streetAddress");
    let postalCodeInput = document.getElementById("postalCode");
    let cityInput = document.getElementById("city");
  

    let valid = true;



    if (nameInput.value.length < 2 || nameInput.value.length > 50) {
        alert("Name has to be between 2 and 50 characters");
        valid = false;
    } else {
        sessionStorage.setItem("customerName", nameInput.value)
    }
  

    let phoneRegex = /^[0-9()-]+$/;
    if (phoneInput.value.length > 50 || !phoneRegex.test(phoneInput.value)) {
        alert("Phone number can only contain numbers, hyphen or parentheses and maximum 50 characters");
        valid = false;
    } else {
        sessionStorage.setItem("customerNumber", phoneInput.value)
    }
  

    if (emailInput.value.length > 50 || !emailInput.value.includes("@")) {
      alert("Email has to have @ symbol and maximum 50 characters")
      valid = false;
    } else {
        sessionStorage.setItem("customerEmail", emailInput.value)
    }
  

    if (streetAddressInput.value.length > 50) {
      alert("Address can be maximum 50 characters")
      valid = false;
    } else {
        sessionStorage.setItem("customerAddress", streetAddressInput.value)
    }
  

    let postalCodeRegex = /^[0-9]{3}[\s][0-9]{2}$/;
    if (postalCodeInput.value.length !== 6 || !postalCodeRegex.test(postalCodeInput.value)) {
      alert("Postal code has to be 6 characters and in this format: 000 00")
      valid = false;
    } else {
        sessionStorage.setItem("customerPostalCode", postalCodeInput.value)
    }
  

    if (cityInput.value.length > 50) {
      alert("City can be maximum 50 characters")
      valid = false;
    } else {
        sessionStorage.setItem("customerCity", cityInput.value)
    }

    
    return valid;
  }



