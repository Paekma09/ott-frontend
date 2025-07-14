import {Configuration, DefaultApi, type UserLoginRequest, type UserSignupRequest} from "../api";
import type {AppDispatch, RootState} from "../store";
import {resetAuth, setError, setLoading, setToken, setUser} from "../store/authSlice.ts";

/* Swagger Codegen 기반 API 클라이언트 설정 */
const apiConfig = new Configuration({ basePath: "http://localhost:8080" });
const api = new DefaultApi(apiConfig);

/* [비동기] 로그인 + 내 정보 fetch + 전역 상태 저장 */
export const loginAsync = (loginData: UserLoginRequest) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        // 1. 로그인 API 요청
        const res = await api.login(loginData);
        const accessToken = res.data.accessToken!;
        localStorage.setItem("accessToken", accessToken);
        dispatch(setToken(accessToken));

        // 2. 내 정보 fetch (토큰 필요)
        const userInfo = await api.getMyProfile({ headers: { Authorization: `Bearer ${accessToken}` } });
        dispatch(setUser(userInfo.data.user!));
        dispatch(setError(null));
    } catch (err: any) {
        dispatch(setError(err?.response?.data?.message || "로그인 실패"));
    } finally {
        dispatch(setLoading(false));
    }
};

/* [비동기] 회원가입 */
export const signupAsync = (signupData: UserSignupRequest) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
      await api.signup(signupData);
      dispatch(setError(null));
  } catch (err: any) {
      dispatch(setError(err?.response?.data?.message || "회원가입 실패"));
  } finally {
      dispatch(setLoading(false));
  }
};

/* [비동기] 내 정보(fetch) */
export const fetchMyProfileAsync = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const token = getState().auth.token;
    if (!token) {
        dispatch(resetAuth());
        return;
    }
    try {
        const res = await api.getMyProfile({ headers: { Authorization: `Bearer ${token}` } });
        dispatch(setUser(res.data.user!));
    } catch (err: any) {
        // 토큰 만료/로그인 상태 아님 → 로그아웃 처리
        dispatch(resetAuth());
    }
};

/* [비동기] 로그아웃 */
export const logoutAsync = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
        const { user, token } = getState().auth;
        if (user?.id && token) {
            await api.logout(user.id, { headers: { Authorization: `Bearer ${token}` } });
        }
    } catch {
        // 로그아웃 API 실패해도 무시하고 클라이언트 상태 초기화
    } finally {
        localStorage.removeItem("accessToken");
        dispatch(resetAuth());
        dispatch(setLoading(false));
    }
};