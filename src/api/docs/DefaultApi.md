# DefaultApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changePassword**](#changepassword) | **POST** /api/users/change-password | 비밀번호 변경|
|[**getMyProfile**](#getmyprofile) | **GET** /api/users/me | 토큰 기반 유저 정보 조회|
|[**getProfile**](#getprofile) | **GET** /api/users/profile | 프로필 조회|
|[**getVideoDetail**](#getvideodetail) | **GET** /api/videos/{id} | 동영상 상세 조회|
|[**getVideoList**](#getvideolist) | **GET** /api/videos | 동영상 목록 조회|
|[**login**](#login) | **POST** /api/users/login | 로그인|
|[**logout**](#logout) | **POST** /api/users/logout | 로그아웃|
|[**refreshToken**](#refreshtoken) | **POST** /api/users/refresh | AccessToken 재발급|
|[**signup**](#signup) | **POST** /api/users/signup | 회원가입 (이메일 인증)|
|[**streamVideo**](#streamvideo) | **GET** /api/videos/file/stream/{id} | 동영상 스트리밍|
|[**updateProfile**](#updateprofile) | **PUT** /api/users/updateProfile | 회원 정보 수정|
|[**uploadVideo**](#uploadvideo) | **POST** /api/videos/file/upload | 동영상 파일 업로드|
|[**verifyEmail**](#verifyemail) | **GET** /api/users/verify | 이메일 인증|
|[**withdraw**](#withdraw) | **POST** /api/users/withdraw | 회원 탈퇴|

# **changePassword**
> ChangePasswordResponse changePassword()

기존 비밀번호 확인 후 새 비밀번호 변경

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; //사용자 ID (default to undefined)
let oldPassword: string; //기존 비밀번호 (default to undefined)
let newPassword: string; //새 비밀번호 (default to undefined)

const { status, data } = await apiInstance.changePassword(
    userId,
    oldPassword,
    newPassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] | 사용자 ID | defaults to undefined|
| **oldPassword** | [**string**] | 기존 비밀번호 | defaults to undefined|
| **newPassword** | [**string**] | 새 비밀번호 | defaults to undefined|


### Return type

**ChangePasswordResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyProfile**
> ProfileResponse getMyProfile()

현재 로그인된 사용자의 정보를 토큰 기반으로 조회

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getMyProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProfileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProfile**
> ProfileResponse getProfile()

사용자 ID로 프로필 정보 조회

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; //사용자 ID (default to undefined)

const { status, data } = await apiInstance.getProfile(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] | 사용자 ID | defaults to undefined|


### Return type

**ProfileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVideoDetail**
> VideoDto getVideoDetail()

동영상 ID로 특정 동영상을 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getVideoDetail(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**VideoDto**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVideoList**
> Array<VideoDto> getVideoList()

등록된 모든 동영상을 최신순으로 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getVideoList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<VideoDto>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login**
> LoginResponse login(userLoginRequest)

이메일, 비밀번호로 로그인(이메일 인증된 사용자만 가능)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userLoginRequest: UserLoginRequest; //

const { status, data } = await apiInstance.login(
    userLoginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userLoginRequest** | **UserLoginRequest**|  | |


### Return type

**LoginResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 로그인 성공, 토큰+유저 정보 반환 |  -  |
|**400** | 입력 오류/인증 미완료/비밀번호 불일치 등 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> CommonResponse logout()

RefreshToken을 무효화하여 로그아웃 처리

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; //사용자 ID (default to undefined)

const { status, data } = await apiInstance.logout(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] | 사용자 ID | defaults to undefined|


### Return type

**CommonResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshToken**
> CommonResponse refreshToken()

RefreshToken 으로 AccessToken 재발급

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let refreshToken: string; //RefreshToken (default to undefined)

const { status, data } = await apiInstance.refreshToken(
    refreshToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshToken** | [**string**] | RefreshToken | defaults to undefined|


### Return type

**CommonResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signup**
> CommonResponse signup(userSignupRequest)

이메일 인증을 위한 회원가입 요청

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserSignupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userSignupRequest: UserSignupRequest; //

const { status, data } = await apiInstance.signup(
    userSignupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userSignupRequest** | **UserSignupRequest**|  | |


### Return type

**CommonResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 이메일 인증 메일 발송 성공 |  -  |
|**400** | 입력 오류/중복 이메일 등 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streamVideo**
> File streamVideo()

HTTP Range를 지원하는 동영상 스트리밍 API 입니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.streamVideo(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProfile**
> ProfileResponse updateProfile(userUpdateRequest)

사용자 ID로 회원 정보 수정 (닉네임, 프로필 이미지 등)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userUpdateRequest: UserUpdateRequest; //

const { status, data } = await apiInstance.updateProfile(
    userUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateRequest** | **UserUpdateRequest**|  | |


### Return type

**ProfileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadVideo**
> object uploadVideo()

동영상 파일과 메타데이터를 업로드하고 DB에 등록합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let title: string; // (default to undefined)
let userId: string; // (default to undefined)
let file: File; // (default to undefined)
let description: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadVideo(
    title,
    userId,
    file,
    description
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **title** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyEmail**
> CommonResponse verifyEmail()

이메일 인증 토큰으로 회원 인증 완료

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let token: string; //이메일 인증 토큰 (default to undefined)

const { status, data } = await apiInstance.verifyEmail(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | 이메일 인증 토큰 | defaults to undefined|


### Return type

**CommonResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withdraw**
> WithdrawResponse withdraw()

Role 변경으로 회원 탈퇴 처리

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; //사용자 ID (default to undefined)

const { status, data } = await apiInstance.withdraw(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] | 사용자 ID | defaults to undefined|


### Return type

**WithdrawResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

