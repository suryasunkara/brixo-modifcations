


 const baseurl=(state=0,action)=>{
     
     switch(action.type){
        case 'BASE':
            return  'http://gotracrat.in:8099/api/v1/dashboard/getAllSupervisors';
default:
    return state;
     }
    

 }
 export default baseurl;