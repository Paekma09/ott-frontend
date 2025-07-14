import {
    Configuration,
    DefaultApi,
    type UserDto,
    type UserLoginRequest,
    type UserSignupRequest
} from "../api";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user:  UserDto | null;
    token: string | null;
    login: (req: UserLoginRequest) => Promise<void>;
    logout: () => Promise<void>;
    signup: (req: UserSignupRequest) => Promise<void>;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const apiConfig = new Configuration({ basePath: "http://localhost:8080"});   // basePath 실제 API 엔드포인트로 맞춰야 함

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    const [user, setUser] = useState<UserDto | null>(null);
    const [token, setToken] = useState<string | null>(() => localStorage.getItem("accessToken"));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 로그인
    const login = async (req: UserLoginRequest) => {
        setIsLoading(true);
        try {
            const api = new DefaultApi(apiConfig);
            const res = await api.login(req);
            const accessToken = res.data.accessToken!;
            setToken(accessToken);
            localStorage.setItem("accessToken", res.data.accessToken!);
        } finally {
            setIsLoading(false);
        }
    };

    // 회원가입
    const signup = async (req: UserSignupRequest) => {
        setIsLoading(true);
        try {
            const api = new DefaultApi(apiConfig);
            await api.signup(req);
        } finally {
            setIsLoading(false);
        }
    };

    // 로그아웃
    const logout = async () => {
        setIsLoading(true);
        try {
            const api = new DefaultApi(apiConfig);
            // userId는 상태(user?.id)에서 가져옴
            if (!user?.id) throw new Error("User does not exist!");
            // 토큰은 Authorization 헤더에
            await api.logout(user.id, { headers: { Authorization: `Bearer ${token}` } });

            setToken(null);
            setUser(null);
            localStorage.removeItem("accessToken");
        } finally {
            setIsLoading(false);
        }
    };

    // 최초 랜더링 시 토큰 있으면 유저 정보 조회
    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                try {
                    const api = new DefaultApi(apiConfig);
                    const res = await api.getMyProfile({ headers: { Authorization: `Bearer ${token}` } });
                    setUser(res.data.user?? null);
                } catch {
                    await logout();
                }
            }
        };
        fetchUser();
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, token, login, logout, signup, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};