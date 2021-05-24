## Commands Available

| COMMAND | DESCRIPTION |
| ------- | ----------- |
| **addRole** | add a role to the database |
| **addUser** | add a user to the database |
| **addUserRole** | add user with role to database |
| **assignRoleToUser** | assign a role to a user |
| **createBucket** | create a bucket |
| **createVapID** | create Push Notifications Keys |
| **syncRolesPermission** | synchronize roles and system permissions |  

### addRole

| FLAG | ALIAS | DESCRIPTION | OPTIONAL |
| ---- | ----- | ----------- | -------- |
| --name | -n | Name of the role | **yes** |
| --slug | -s | Slug of the role | **yes** |

**Example:**
```sh 
npm run command -- addRole --name SuperAdmin --slug superadmin
```

### addUser

| FLAG | ALIAS | DESCRIPTION | OPTIONAL |
| ---- | ----- | ----------- | -------- |
| --email | -e | Email of user | **yes** |
| --firstName | -fn | First Name of the user | **yes** |
| --lastName | -ln | Last Name of the user | **yes** |
| --documentType | -dt | Document Type of the user | **yes** |
| --documentNumber | -dn | Document Number of the user | **yes** |
| --gender | -g | Gender of the user | **yes** |
| --phone | -ph | Phone of the user | **yes** |
| --country | -c | Country of the user | **yes** |
| --address | -a | Address of the user | **yes** |
| --password | -p | Password of the user | **yes** |
| --isSuperAdmin | -isa | Set if User is Super Admin | **yes** |

**Example:**
```sh 
npm run command -- addUser -e ryan.lienhart@nexp.com -fn ryan -ln lienhart -dt dni -dn 11082009 -g male -ph +5491112345678 -c usa -a sandiego -p 1234567890 -isa true
```

### addUserRole

| FLAG | ALIAS | DESCRIPTION | OPTIONAL |
| ---- | ----- | ----------- | -------- |
| --role | -r | Name of the role | **yes** |
| --email | -e | Email of user | **yes** |
| --firstName | -fn | First Name of the user | **yes** |
| --lastName | -ln | Last Name of the user | **yes** |
| --documentType | -dt | Document Type of the user | **yes** |
| --documentNumber | -dn | Document Number of the user | **yes** |
| --gender | -g | Gender of the user | **yes** |
| --phone | -ph | Phone of the user | **yes** |
| --country | -c | Country of the user | **yes** |
| --address | -a | Address of the user | **yes** |
| --password | -p | Password of the user | **yes** |
| --isSuperAdmin | -isa | Set if User is Super Admin | **yes** |

**Example:**
```sh 
npm run command -- addUserRole -r admin -e ryan.lienhart@nexp.com -fn ryan -ln lienhart -dt dni -dn 11082009 -g male -ph +5491112345678 -c usa -a sandiego -p 1234567890 -isa true
```

### assignRoleToUser

| FLAG | ALIAS | DESCRIPTION | OPTIONAL |
| ---- | ----- | ----------- | -------- |
| --email | -e | Email of the user | **yes** |
| --slug | -s | Slug of the role | **yes** |

**Example:**
```sh 
npm run command -- assignRoleToUser -e ryan.lienhart@nexp.com -s superadmin
```

### createBucket

| FLAG | ALIAS | DESCRIPTION | OPTIONAL |
| ---- | ----- | ----------- | -------- |
| --bucketName | -b | Name of the bucket | **yes** |
| --region | -r | Region of the bucket | **yes** |

**Example:**
```sh 
npm run command -- createBucket -b nexp -r us-east-1
```

### createVapID

**Example:**
```sh 
npm run command -- createVapID 
```

### syncRolesPermission

**Example:**
```sh 
npm run command -- syncRolesPermission 
```
