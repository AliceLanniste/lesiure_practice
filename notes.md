和backtracing相关的有combination，premutations和subset。这3个系列都能用dfs来解决问题。
combination系列：
conmbination_sum系列类似都是数组中数字相加为target，取数字数组。
conmbination_sum，可以取用重复数字。
```
function backtracking(index, target, tempDataStruct) {
      if(target === 0) {
          result.push([...tempDataStruct])
          return
      }
  
      if(target < 0) return;
  
      for(let i=index; i<candidates.length; i++) {
          tempDataStruct.push(candidates[i])
          backtracking(i, target-candidates[i], tempDataStruct)
          tempDataStruct.pop()
      }
  }
  backtracking(index, target, tempDataStruct)
```
conmbination_sum II数组元素有重复，返回的数组不能重复。就是在上面的基础上加点东西
```
function backtracking(index, target, tempDataStruct) {
        if(target === 0) {
            result.push([...tempDataStruct])
            return
        }
    
        if(target < 0) return;
    
        for(let i=index; i<candidates.length; i++) {
            //判断相同的数字
             if(i != index && candidates[i] == candidates[i-1]) continue;
            tempDataStruct.push(candidates[i])
            //i+1,index移动
            backtracking(i+1, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
```

```

    let iterate =(index,sum,temp) => {
        if(sum > target) return
        if(sum === target) {
            res.push(temp)
            return
        }

        for(let i=index;i<c.length;i++) {
              if(i != index && c[i] == c[i-1]) continue;
            iterate(i+1,sum+c[i],[...temp,c[i]])
        }
    }
    iterate(0,0,[])
```


subset系列：
subet和subset_II都是返回一个所有的子集合，不同的是subset提供的不重复数字数组，subset II是有重复数组。
因此 subSet更好解决。
solution: 1.给定一个初始值sets=[[]] 
          2. for-loop 使用map，以sets中元素一边生成新元素一边塞入sets中

subset II

solution:1.首先给数组排序，nums.sort((a,b)=>a,b),这样就能把重复数字归类到一起
         2.在实现dfs函数的时候，要加  if (i !== start && nums[i] === nums[i - 1]) continue，判断条件（过滤相同数字）

premutation系列：
premutation系列和subset系列相似，它是给定一个数组nums = [1,2,3]，要求返回所有顺序的数组。
同样可用dfs来解决。
程序核心：
```
let dfs=(arr,temp)=>{
           if(arr.length == 0){
            res.push(temp)
            return;
        }
        for(let i=0;i<arr.length;i++) {
            //递归的参数为过滤index数组和创建的num[index]数组
              dfs(arr.filter((num,idx)=>idx !=i),[...temp,arr[i]])
        }
   }
   dfs(nums,[])
```
用loop+递归的方式来实现dfs。
permutationII提供的数组nums含有重复数字，但是需要返回不重复的序列数组。
那么首先就要对nums排序，nums.sort((a,b)=>a-b),把重复数字归类。然后在上面的dfs加上条件判断
```
let iterate = (arr,temp) =>{
        if(arr.length ==1) {
            res.push([...temp,arr[0]])
            return
        }

        for(let i=0;i<=arr.length;i++) {
            //相同数字的就跳过
            if(arr[i] === arr[i+1]) continue
            iterate(arr.filter((num,indx) =>indx != i),[...temp,arr[i]])
        }
    }

    iterate(nums,[])

```