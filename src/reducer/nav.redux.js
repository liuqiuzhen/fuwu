const ADD_GUN = 'ADD_GUN';
const initState= {
    data:1
};

export function nav(state=initState,action){
    switch (action.type) {
        case ADD_GUN:
            console.log(`aaaaaaa`)
            return {state};
        default:
            return null;
    }
}

function addGun() {
    return {type:ADD_GUN,payload:'加加'}
}
export function gunAdd(){
    return (dispatch)=>dispatch(addGun());
}

