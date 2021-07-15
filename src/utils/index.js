import { format } from 'date-fns';

export const DatetoString = (date) => {
    if (!date) {
        return '';
    }
    return format(date, 'yyyy年M月d日HH時mm分');
};

export function translateErrors(code) {
    const error = { title: 'エラー', description: 'wait for miniuts' };
    switch (code) {
        case 'auth/invalid-email':
            error.description = 'メールアドレスが不正です。';
            break;
        case 'auth/user-disabled':
            error.description='アカウントが無効です。';
            break;
        case 'auth/user-not-found':
            error.description= 'ユーザーが見つかりません。';
            break;
        case 'auth/wrong-paddword':
            error.description= 'パスワードが見つかりません。';
            break;
        case 'auth/email-already-in-use':
            error.description= 'メールアドレスが既に使用済みです。';
            break;
        case 'auth/operation-not-allowed':
            error.description= '開発者にお問い合わせ下さい。';
            break;
        case 'auth/weak-password':
            error.description='パスワードが簡単すぎます。';
            break;
        default:
    }
    return error;
}
