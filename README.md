This is sample crud nodejs application

api endpoints
*In all request need to pass token in headers [x-access-token]*

-----------------------------------------

To get token hit this api
1. '/login' (post method)
    payload= {
     "username": "",
     "password":"
   }
-----------------------------------------

To create new agency and clent 
2. '/api/create-new-agency-client' (post method)
  payload ={
    {
      "agency": {
        "agencyId": "A001",
        "agencyName": "Agency one",
        "agencyAddress1": "123 Main St",
        "agencyState": "NY",
        "agencyCity": "New York",
        "agencyPhone": "111111111"
      },
      "client": {
        "clientId": "C002",
        "clientName": "client one",
        "clientEmail": "clientone@example.com",
        "clientPhone": "0987654321",
        "totalBill": 12300
      }
    }
  }

-----------------------------------------

To update client data
3. '/api/update-client/C002' (put method)
payload ={
    "name":"updated name",
    "email":"",
    "phone":"",
    "totalBill":"2000"
}

-----------------------------------------

To get top Client
4. '/api/top-client' (get method)
