def dupli(arr):
    count =0 
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if (arr[i]== arr[j]):
                count =count+1
arr = [1,2,4,5,7,8,9,4,5,6,4,7]
print(dupli(arr))
