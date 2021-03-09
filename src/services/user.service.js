 const http = require("../http/http-common");

 class UserDataService
 {
    register(data) {
        return http.post("/register", data);
      }

    getUserList(auth_id) {
        const addr_userlist = '/'+auth_id+'/userlist';
        return http.get(addr_userlist);
      }
    
    
      
    
      updateUser(auth_id,uuid, data) {
        const addr_userupd = '/'+auth_id+'/updateuser/'+uuid;
        return http.put(addr_userupd, data);
      }
    
      deleteUser(auth_id,uuid) {
        const addr_userdel = '/'+auth_id+'/updateuser/'+uuid;
        return http.delete(addr_userdel);
      }
 }

 export default new UserDataService();