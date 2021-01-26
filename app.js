function screen(val){
            document.getElementById("screen").value+=val 
           
}

function solve(){ 

            let x = document.getElementById("screen").value 
            let y = eval(x) 
            document.getElementById("screen").value = y 
            if(x===""){
            document.getElementById("screen").value = "Error ! Enter Some Value" 
                    
            }
        }

function clr() { 
        document.getElementById("screen").value = "" 
} 

function backSpace(){
        document.getElementById("screen").value = ""
    }