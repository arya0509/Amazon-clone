let CartItems=[];
const AddToCart_Btn=document.querySelectorAll(".cart");
AddToCart_Btn.forEach(Btn => {
    Btn.addEventListener("click",function(){
        //Extracting the quantity
        let Quantity_VAL;
        const QUANTITY_INPUT=Btn.closest(".flex").querySelector(".quantity");
        if(!isNaN(parseInt(QUANTITY_INPUT.value))){
             Quantity_VAL=parseInt(QUANTITY_INPUT.value);
            console.log("Quantity is successfully extracted");


            //Extracting the price
            let Price=Btn.closest(".cloth").querySelector(".price");
            console.log(Price.textContent.slice(1));
            PriceVal=parseFloat(Price.textContent.slice(1));
            if(typeof PriceVal==="number"){
                
                console.log("Price is successfully extracted");
                console.log(PriceVal);


                 //Extracting the ItemName
                let ItemName=Btn.closest(".cloth").querySelector(".ItemName");
                ItemName =ItemName.textContent;
                let IndivisualCart={ItemName,Quantity_VAL,PriceVal}
                CartItems.push(IndivisualCart);
                console.log(CartItems);
            }else{
                //do something
            }
        }
        else{
            //do something
        }

        

       
    }
)});

