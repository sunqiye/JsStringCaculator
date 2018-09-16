function add(arr,i,v){
    arr[i]=arr[i]?arr[i]:0
    sum = arr[i] + v
    
    arr[i] = sum % 10
    if(sum>9){
        add(arr,i+1,Math.floor(sum/10))
    }
}
function strMulti(x,y){
    var arr1 = x.split('')
    var arr2 = y.split('')
    
    var resultArr = [];
    for(var i=y.length-1;i>=0;i--){
        for(var j=x.length-1;j>=0;j--){
            var tmp = parseInt(x[j])*parseInt(y[i])
            
            //数字位
            var index = y.length-i+x.length-j-2
            resultArr[index]=resultArr[index]?resultArr[index]:0
            var sum = resultArr[index]+tmp
            //每个数组位保存一位数字
            resultArr[index]=sum%10
            //进一位
            if(tmp>9){
                add(resultArr,index+1,Math.floor(sum/10))
            }
            
        }
    }
    return resultArr.reverse().join('')
}
