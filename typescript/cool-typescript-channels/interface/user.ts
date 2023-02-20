interface UserProfile {
    jwt: string;
    fans_count: number;
    follow_count: number;
    favorite_count: number;
    user: User;
    person_auth: Personauth;
    mall: Mall;
}

interface Mall {
    id: number;
    level: number;
    name: string;
    hot: number;
    address: string;
    province: string;
    city: string;
    district: string;
    lon: number;
    lat: number;
    invite_uid: string;
    head: string;
    car_push: number;
    car_limit: number;
    auth: number;
    qy_over_time: string;
    status: number;
}

interface Personauth {
    name: string;
    status: number;
    msg: string;
}

interface User {
    uid: string;
    phone: string;
    avatar: string;
    nickname: string;
    user_status: number;
    open_push: number;
    dev_status: number;
}