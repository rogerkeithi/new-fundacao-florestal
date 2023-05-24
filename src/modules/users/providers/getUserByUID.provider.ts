import { getAuth } from 'firebase-admin/auth';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByUIDProvider {
  public async getUserByUID(uid: string): Promise<any> {
    const response = await getAuth().getUsers([{ uid: uid }]);
    return response;
  }
}
