# DefaultApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMyInfo**](#getmyinfo) | **GET** /api/users/my-info | 내 정보 조회|
|[**getVideoDetail**](#getvideodetail) | **GET** /api/videos/{id} | 동영상 상세 조회|
|[**getVideoList**](#getvideolist) | **GET** /api/videos | 동영상 목록 조회|
|[**login**](#login) | **POST** /api/users/login | 로그인|
|[**signup**](#signup) | **POST** /api/users/signup | 회원가입|
|[**streamVideo**](#streamvideo) | **GET** /api/videos/file/stream/{id} | 동영상 스트리밍|
|[**uploadVideo**](#uploadvideo) | **POST** /api/videos/file/upload | 동영상 파일 업로드|

# **getMyInfo**
> UserDto getMyInfo()

JWT 인증 후 내 정보를 조회합니다.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let authorization: string; // (default to undefined)

const { status, data } = await apiInstance.getMyInfo(
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorization** | [**string**] |  | defaults to undefined|


### Return type

**UserDto**

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
> object login(userLoginRequest)

로그인 성공시 JWT 토큰을 반환합니다.

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

**object**

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

# **signup**
> UserDto signup(userSignupRequest)

신규 회원을 등록합니다.

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

**UserDto**

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

