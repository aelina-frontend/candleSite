var hashTable = [];

function changeVisibleMenuItems(idOfItem){
    let item = document.getElementById(idOfItem);
    let isFind = false;
    let i=0;    
    for(i;i<hashTable.length;i++){
        if(hashTable[i].id == idOfItem){
            isFind = true;
            break;
        }
    }    
    if(isFind){
        if(hashTable[i].isHide === false){
            item.style.setProperty('--visionMode','none')
            hashTable[i].isHide = true
        }else{
            hashTable[i].isHide = false
            item.style.setProperty('--visionMode','block')
        }
    }else{
        let newItem = {
            id: idOfItem,
            isHide: false
        };
        hashTable.push(newItem);
        item.style.setProperty('--visionMode','block')
    }
}