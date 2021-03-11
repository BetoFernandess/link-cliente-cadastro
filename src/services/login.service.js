const http = require("../http/http-commons");

class LoginDataService
{
    login(data) {
        return http.post("/login", data);
      }
      getContactList(auth_id) {
        const addr_usercontacts = '/'+auth_id+'/usercontacts';
        return http.get(addr_usercontacts);
      }
      createContact(auth_id, data) {
        const addr_cretaecontact = '/'+auth_id+'/createcontact';
        return http.post(addr_cretaecontact,data);
      }

      logout(auth_id) {
        const addr_logout = '/'+auth_id+'/logout';
        return http.post(addr_logout);
      }

}

export default new LoginDataService();