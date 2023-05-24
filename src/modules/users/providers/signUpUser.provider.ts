import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class SignUpUserProvider {
  public async signUpUser(email, password): Promise<any> {
    console.log(email);
    getAuth()
      .createUser({
        email: email,
        password: password,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.uid);
      })
      .catch((error) => {
        console.log('Error creating new user:', error);
      });
  }
}
