var hashTable = [];
var lastClicked = "";

function changeVisibleMenuItems(idOfItem){
    let item = document.getElementById(idOfItem);
    let isFind = false;
    let isFindPast = false;
    let numbOfNew = -1;    
    let numbOfPast = -1;
    for(let i = 0;i<hashTable.length;i++){
        if(hashTable[i].id == idOfItem){
            isFind = true;
            numbOfNew = i;
        }
        if(hashTable[i].id == lastClicked){
            isFindPast = true;
            numbOfPast = i;
        }
    }     
    if(isFind){
        if(hashTable[numbOfNew].isHide === false){
            item.style.setProperty('--visionMode','none')
            hashTable[numbOfNew].isHide = true
            lastClicked = "";
        }else{
            if(isFindPast){
                let item = document.getElementById(lastClicked);
                item.style.setProperty('--visionMode','none')
                hashTable[numbOfPast].isHide = true
            }   
            hashTable[numbOfNew].isHide = false
            item.style.setProperty('--visionMode','inline')
            lastClicked = idOfItem;
        }
    }else{
        let newItem = {
            id: idOfItem,
            isHide: false
        };
        if(isFindPast){
            let item = document.getElementById(lastClicked);
            item.style.setProperty('--visionMode','none')
            hashTable[numbOfPast].isHide = true
        }   
        hashTable.push(newItem);
        item.style.setProperty('--visionMode','inline')
        lastClicked = idOfItem;
    }
}