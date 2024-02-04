let nav=document.querySelector("nav")
let A1=document.getElementById("A1")
let A2=document.getElementById("A2")
let A3=document.getElementById("A3")
let A4=document.getElementById("A4")
let A5=document.getElementById("A5")

let L1=document.getElementById("L1")
let L2=document.getElementById("L2")
let L3=document.getElementById("L3")
let L4=document.getElementById("L4")
let L5=document.getElementById("L5")
let L6=document.getElementById("L6")

let I1=document.getElementById("I1")
let I2=document.getElementById("I2")
let I3=document.getElementById("I3")

let figure=document.querySelector("figure")
let img1=document.getElementById("img1")

L1.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    img1.src=`https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png`
   nav.style.backgroundColor=`white`;
   A1.style.color=`black`
   A2.style.color=`black`
   A3.style.color=`black`
   A4.style.color=`black`
   A5.style.color=`black`
   I1.style.color=`black`
   I2.style.color=`black`
   I3.style.color=`black`
   L1.style.backgroundColor=`#D0D1D2`
figure.style.backgroundColor=`white`
   figure.innerHTML=` <main style="height:500px">
   <div class="div" id="div1">
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;">Model S</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;">Model 3</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;">Model X</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;">Model Y</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p>
       </span>
   </div>
   <div class="div" id="div2"></div>
   <div class="div" id="div3">
       <ul>
           <li>Inventory</li>
           <li>Used Cars</li>
           <li>Demo Drive</li>
           <li>Trade-in</li>
           <li>Help Me Choose</li>
           <li>Compare</li>
           <li>Fleet</li>
           <li>Cybertruck</li>
           <li>Semi</li>
           <li>Roadster</li>
       </ul>
   </div>
</main>`
  
})

L1.addEventListener("mouseout",(e)=>{
    img1.src=`https://static1.squarespace.com/static/54ff919fe4b0d0cab6f3887b/t/5a59762324a6949edb736009/1515812393365/tesla-logo-white.png`
    nav.style.backgroundColor=`rgba(7, 7, 7, 0.6)`;
    A1.style.color=`white`
    A2.style.color=`white`
    A3.style.color=`white`
    A4.style.color=`white`
    A5.style.color=`white`
    I1.style.color=`white`
    I2.style.color=`white`
    I3.style.color=`white`
    L1.style.backgroundColor=`transparent`
    figure.innerHTML=``
    figure.style.backgroundColor=`transparent`
   
 })

 //Energy click

 
L2.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    img1.src=`https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png`
   nav.style.backgroundColor=`white`;
   A1.style.color=`black`
   A2.style.color=`black`
   A3.style.color=`black`
   A4.style.color=`black`
   A5.style.color=`black`
   I1.style.color=`black`
   I2.style.color=`black`
   I3.style.color=`black`
   L2.style.backgroundColor=`#D0D1D2`
figure.style.backgroundColor=`white`
figure.style.height=`350px`

   figure.innerHTML=` <main style="height:280px">
   <div class="div" id="div1" style="height:300px;transform: translateY(90px);">
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(43px);">Solar Pannel</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(48px);">Solar Roof</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(50px);">Powerwall</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(50px);">Megapack</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Order</a></p> 
       </span>
   </div>
   <div class="div" id="div2" style="height:200px"></div>
   <div class="div" id="div3" style="height:200px">
       <ul>
           <li>Schedule a Consultation</li>
           <li>Incentives</li>
           <li>Support</li>
           <li>Partner with Tesla</li>
           <li>Commercial</li>
           <li>Utilities</li>
           
       </ul>
   </div>
</main>`
  
})




L2.addEventListener("mouseout",(e)=>{
    img1.src=`https://static1.squarespace.com/static/54ff919fe4b0d0cab6f3887b/t/5a59762324a6949edb736009/1515812393365/tesla-logo-white.png`
    nav.style.backgroundColor=`rgba(7, 7, 7, 0.6)`;
    A1.style.color=`white`
    A2.style.color=`white`
    A3.style.color=`white`
    A4.style.color=`white`
    A5.style.color=`white`
    I1.style.color=`white`
    I2.style.color=`white`
    I3.style.color=`white`
    L2.style.backgroundColor=`transparent`
    figure.innerHTML=``
    figure.style.backgroundColor=`transparent`
    figure.style.height=`500px`
   
 })

 //Charging

  
L3.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    img1.src=`https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png`
   nav.style.backgroundColor=`white`;
   A1.style.color=`black`
   A2.style.color=`black`
   A3.style.color=`black`
   A4.style.color=`black`
   A5.style.color=`black`
   I1.style.color=`black`
   I2.style.color=`black`
   I3.style.color=`black`
   L3.style.backgroundColor=`#D0D1D2`
figure.style.backgroundColor=`white`
figure.style.height=`350px`

   figure.innerHTML=` <main style="height:280px">
   <div class="div" id="div1" style="height:300px;transform: translateY(90px);">
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(69px);">Charging</h5>
           <p><a href="" id="a1">Learn</a> </p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(34px);">Home-charging</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Shop</a></p>
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(36px);">Super-charging</h5>
           <p><a href="" id="a1">Learn</a> <a href="" id="a2">Find</a></p>
       </span>
      
   </div>
   <div class="div" id="div2" style="height:200px"></div>
   <div class="div" id="div3" style="height:200px;transform: translateY(-8px);">
       <ul>
           <li>Charging Calculator</li>
           <li>Trip Planner</li>
           <li>Supercharger Voting</li>
           <li>Host a Supercharger</li>
           <li>Commercial Charging</li>
           <li>Hostwall Connections</li>
           
       </ul>
   </div>
</main>`
  
})


L3.addEventListener("mouseout",(e)=>{
    img1.src=`https://static1.squarespace.com/static/54ff919fe4b0d0cab6f3887b/t/5a59762324a6949edb736009/1515812393365/tesla-logo-white.png`
    nav.style.backgroundColor=`rgba(7, 7, 7, 0.6)`;
    A1.style.color=`white`
    A2.style.color=`white`
    A3.style.color=`white`
    A4.style.color=`white`
    A5.style.color=`white`
    I1.style.color=`white`
    I2.style.color=`white`
    I3.style.color=`white`
    L3.style.backgroundColor=`transparent`
    figure.innerHTML=``
    figure.style.backgroundColor=`transparent`
    figure.style.height=`500px`
   
 })

 //Discover 

  
L4.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    img1.src=`https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png`
   nav.style.backgroundColor=`white`;
   A1.style.color=`black`
   A2.style.color=`black`
   A3.style.color=`black`
   A4.style.color=`black`
   A5.style.color=`black`
   I1.style.color=`black`
   I2.style.color=`black`
   I3.style.color=`black`
   L4.style.backgroundColor=`#D0D1D2`
figure.style.backgroundColor=`white`
figure.style.height=`350px`

   figure.innerHTML=` <main style="height:280px" class="main">
   <div class="div" id="div1" style="height:300px;transform: translateY(90px);">
       <span>
       <ul>
       <li style="color:#5c5e62">Resources</li>
       <li></li>
       <li>Demo Drive</li>
       <li>Insurance</li>
       <li>Vedio Guides</li>
       <li>Customer Stories</li>
       
   </ul>
       </span>

       <span>
       <ul>
       <li style="color:#5c5e62">Location Services</li>
       <li></li>
       <li>Find Us</li>
       <li>Trip Planner</li>
       <li>Find a Collision Center</li>
       <li>Find a Certified Installer</li>
       
   </ul>
       </span>

       <span>
       <ul>
       <li style="color:#5c5e62">Company</li>
       <li></li>
       <li>About</li>
       <li>Careers</li>
       <li>Investor Relations</li>
      
       
   </ul>
       </span>
      
   </div>
  
</main>`
  
})


L4.addEventListener("mouseout",(e)=>{
    img1.src=`https://static1.squarespace.com/static/54ff919fe4b0d0cab6f3887b/t/5a59762324a6949edb736009/1515812393365/tesla-logo-white.png`
    nav.style.backgroundColor=`rgba(7, 7, 7, 0.6)`;
    A1.style.color=`white`
    A2.style.color=`white`
    A3.style.color=`white`
    A4.style.color=`white`
    A5.style.color=`white`
    I1.style.color=`white`
    I2.style.color=`white`
    I3.style.color=`white`
    L4.style.backgroundColor=`transparent`
    figure.innerHTML=``
    figure.style.backgroundColor=`transparent`
    figure.style.height=`500px`
   
 })

 //shop


 
L5.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    img1.src=`https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png`
   nav.style.backgroundColor=`white`;
   A1.style.color=`black`
   A2.style.color=`black`
   A3.style.color=`black`
   A4.style.color=`black`
   A5.style.color=`black`
   I1.style.color=`black`
   I2.style.color=`black`
   I3.style.color=`black`
   L5.style.backgroundColor=`#D0D1D2`
figure.style.backgroundColor=`white`

figure.style.height=`300px`
   figure.innerHTML=` <main style="height:250px">
   <div class="div" id="div1" style="position: relative;top: 130px;">
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(50px);">Charging</h5>
           
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(10px);">Vehice Accessories</h5>
           
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(65px);">Apparel</h5>
           
       </span>
       <span>
           <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png" alt="" height="112px" width="198px">
           <h5 style="font-size: 20px; font-weight: 500;font-family: Segoe UI, Frutiger,Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;transform: translateX(60x);">Lifestyle</h5>
           
       </span>
   </div>
  
</main>`
  
})

L5.addEventListener("mouseout",(e)=>{
    img1.src=`https://static1.squarespace.com/static/54ff919fe4b0d0cab6f3887b/t/5a59762324a6949edb736009/1515812393365/tesla-logo-white.png`
    nav.style.backgroundColor=`rgba(7, 7, 7, 0.6)`;
    A1.style.color=`white`
    A2.style.color=`white`
    A3.style.color=`white`
    A4.style.color=`white`
    A5.style.color=`white`
    I1.style.color=`white`
    I2.style.color=`white`
    I3.style.color=`white`
    L5.style.backgroundColor=`transparent`
    figure.innerHTML=``
    figure.style.backgroundColor=`transparent`
    figure.style.height=`500px`
   
 })

 //moving

let h1=document.getElementById("H11")
let h2=document.getElementById("H21")






 
    
 




