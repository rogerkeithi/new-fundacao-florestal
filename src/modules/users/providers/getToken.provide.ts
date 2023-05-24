import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class GetTokenProvide {
  public async getToken(uid: string): Promise<any> {
    getAuth()
      .createCustomToken(uid)
      .then((customToken) => {
        return customToken;
      })
      .catch((error) => {
        console.log('Error creating custom token:', error);
      });
  }
}
