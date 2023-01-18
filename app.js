let sequence=[]
let nextnumber;
let itemsInsequence;
let firstprevious;
let secondprevious;

for(let i=1;i<=32;i++){
    if(i===1){
        sequence.push(i)
        
    }else if(i===2){
        sequence.push(i)

    }else{
        itemsInsequence=sequence.length
        let firstprevious=itemsInsequence-1
    let secondprevious=itemsInsequence-2
    let nextnumber=sequence[firstprevious]+sequence[secondprevious]
    sequence.push(nextnumber)
    
    }

}
console.log(sequence)
let sumOfEven=0;
for(let i=1;i<sequence.length;i++){
    if(sequence[i]%2===0){
        console.log(sequence[i])
        //sumOfEven=sumOfEven+sequence[i]
        //console.log(sequence[i])
    }
    //console.log(sequence[i])
    
}
console.log(sumOfEven)