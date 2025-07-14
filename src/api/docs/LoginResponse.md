# LoginResponse

로그인 성공 응답 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** | Access Token(JWT) | [optional] [default to undefined]
**refreshToken** | **string** | Refresh Token | [optional] [default to undefined]
**refreshTokenExpireAt** | **string** | Refresh Token 만료 시간 | [optional] [default to undefined]
**user** | [**UserDto**](UserDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LoginResponse } from './api';

const instance: LoginResponse = {
    accessToken,
    refreshToken,
    refreshTokenExpireAt,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
