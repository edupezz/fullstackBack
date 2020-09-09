import { BaseDB } from './BaseDB';

export class UserDB extends BaseDB{
    protected static TABLE_NAME = 'SoundRepo_Users';

    public async signUp(
        id: string,
        name: string,
        email: string,
        nickname: string,
        password: string
    ): Promise<void>{
        await this.getConnection().raw(
            `INSERT INTO ${UserDB.TABLE_NAME} VALUES(
                '${id}','${name}', '${email}', '${nickname}', '${password}')`
        )
    }


}