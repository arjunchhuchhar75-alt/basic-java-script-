function secondMinimum(nums){
    //nums length 0: 
    if(nums.length < 2)return null;
    let f=nums[0];
    let s=nums[1];
    for(let i =0; i<nums.length;i++){
        if(nums[i] < f){
            f=nums[i];
        } else if(nums[i] <s){
            s=nums[i];
        }

    }
    return s;
}

console.log(secondMinimum([4,5,2,3,7]));