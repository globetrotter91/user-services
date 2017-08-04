import axios from 'axios'; 


export function listBoards(){
    return axios.get('/api/board'); 
}

export function listOneBoard(id){
    return axios.get('/api/board/'+id); 
}

export function listLists(boardId){
    return axios.get('/api/list?board='+boardId); 
}


export function listCards(listId){
    return axios.get('/api/card?list='+listId); 
}