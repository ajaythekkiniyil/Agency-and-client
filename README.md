This is sample crud nodejs application <br>

api endpoints<br>
*In all request need to pass token in headers [x-access-token]*<br>
<hr>

To get token hit this api<br>
1. '/login' (post method)<br>
    payload= {<br>
     "username": "",<br>
     "password":"<br>
   }<br>
<hr>

To create new agency and clent <br>
2. '/api/create-new-agency-client' (post method)<br>
  payload ={<br>
    {<br>
      "agency": {<br>
        "agencyId": "A001",<br>
        "agencyName": "Agency one",<br>
        "agencyAddress1": "123 Main St",<br>
        "agencyState": "NY",<br>
        "agencyCity": "New York",<br>
        "agencyPhone": "111111111"<br>
      },<br>
      "client": {<br>
        "clientId": "C002",<br>
        "clientName": "client one",<br>
        "clientEmail": "clientone@example.com",<br>
        "clientPhone": "0987654321",<br>
        "totalBill": 12300<br>
      }<br>
    }<br>
  }<br>
<hr>

To update client data<br>
3. '/api/update-client/C002' (put method)<br>
payload ={<br>
    "name":"updated name",<br>
    "email":"",<br>
    "phone":"",<br>
    "totalBill":"2000"<br>
}<br>
<hr>
To get top Client<br>
4. '/api/top-client' (get method)<br>
