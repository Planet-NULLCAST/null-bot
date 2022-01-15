import roles from '../model/roles.json.js'

const permissonLevel = (commandPermssion) => {
    let permissionList = [];

    for (let index = 0; index < roles.length; index++) {

         if(roles[index].level > commandPermssion.level){
             if (roles[index].id) {
                permissionList.push({
                    id: roles[index].id,
                    type: 'ROLE',
                    permission: false,
                })
                 
             }
            
         }
        
    }

    return permissionList;

}

export default permissonLevel;